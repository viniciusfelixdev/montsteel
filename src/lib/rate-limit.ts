/**
 * Rate limiting simples em memória, por IP, para as rotas de API.
 *
 * Limitação conhecida: em ambientes serverless (Vercel), cada instância/região
 * tem sua própria memória, então o limite é "por instância", não global. Isso
 * ainda barra a maioria dos scripts de flood/abuso automatizado, mas para um
 * limite garantido entre todas as instâncias seria necessário um contador
 * compartilhado (ex.: Vercel KV / Upstash Redis).
 */

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

// Evita crescimento indefinido do Map em processos de longa duração.
function cleanup(now: number) {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

/**
 * Retorna true se a requisição deve ser permitida, false se o limite foi excedido.
 * @param key identificador único (ex.: `${rota}:${ip}`)
 * @param limit número máximo de requisições na janela
 * @param windowMs duração da janela em milissegundos
 */
export function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  if (buckets.size > 5000) cleanup(now);

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (bucket.count >= limit) return false;

  bucket.count++;
  return true;
}

/** Extrai um identificador do cliente a partir dos headers de proxy padrão. */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}
