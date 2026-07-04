import { timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

/** Compara em tempo constante para não vazar quanto do token está certo via timing. */
function isValidToken(provided: string, expected: string): boolean {
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function GET(request: NextRequest) {
  const ip = getClientIp(request);
  if (!checkRateLimit(`revalidate:${ip}`, 10, 60 * 1000)) {
    return NextResponse.json({ message: "Muitas tentativas" }, { status: 429 });
  }

  const secret = request.nextUrl.searchParams.get("secret");
  const slug = request.nextUrl.searchParams.get("slug");
  const expected = process.env.REVALIDATION_TOKEN;

  if (!secret || !expected || !isValidToken(secret, expected)) {
    return NextResponse.json({ message: "Token inválido" }, { status: 401 });
  }

  try {
    const paths = ["/blog"];
    revalidatePath("/blog");

    if (slug) {
      paths.push(`/blog/${slug}`);
      revalidatePath(`/blog/${slug}`);
    }

    return NextResponse.json({ revalidated: true, paths });
  } catch {
    return NextResponse.json({ message: "Erro ao revalidar" }, { status: 500 });
  }
}
