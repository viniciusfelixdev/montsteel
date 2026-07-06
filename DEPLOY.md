# Checklist de Publicação — MontSteel

Passo a passo para colocar o site no ar (Vercel) quando fechar com o cliente.

## 1. Pré-requisitos
- [ ] Repositório no GitHub atualizado (`main`)
- [ ] Conta na [Vercel](https://vercel.com) conectada ao GitHub
- [ ] Domínio `montsteel.com.br` com acesso ao painel de DNS
- [ ] Conta no [Resend](https://resend.com) (envio de e-mails dos formulários)

## 2. Variáveis de ambiente (Vercel → Project → Settings → Environment Variables)
O arquivo `.env.local` **não** vai para o Git. Cadastre estas variáveis na Vercel:

| Variável | Valor | Observação |
|---|---|---|
| `RESEND_API_KEY` | `re_...` | Chave gerada no Resend |
| `EMAIL_FROM` | `MontSteel <site@montsteel.com.br>` | Use `onboarding@resend.dev` até verificar o domínio |
| `EMAIL_TO` | `contato@montsteel.com.br` | Onde os leads chegam |
| `NEXT_PUBLIC_SITE_URL` | `https://www.montsteel.com.br` | URL pública (sitemap/OG) |
| `NEXT_PUBLIC_BLOG_URL` | `https://blog.montsteel.com.br` | Link "Blog" do menu |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Opcional — só ativa o GA após consentimento |

## 3. Deploy
- [ ] Importar o repositório na Vercel (framework Next.js detectado automaticamente)
- [ ] Conferir o build (a Vercel roda `next build`)
- [ ] Apontar o domínio `montsteel.com.br` (e `www`) para a Vercel (registros A/CNAME)
- [ ] SSL é automático na Vercel

## 4. E-mail (Resend) — produção
- [ ] Em Resend → Domains, adicionar `montsteel.com.br`
- [ ] Inserir os registros DNS (SPF/DKIM) que o Resend fornecer
- [ ] Após verificado, trocar `EMAIL_FROM` para `@montsteel.com.br`
- [ ] Testar envio pelos formulários de Orçamento e Fornecedores

## 5. SEO pós-deploy
- [ ] Google Search Console: adicionar a propriedade do domínio
- [ ] Enviar o sitemap: `https://www.montsteel.com.br/sitemap.xml`
- [ ] Conferir `robots.txt`: `https://www.montsteel.com.br/robots.txt`
- [ ] Validar dados estruturados no [Rich Results Test](https://search.google.com/test/rich-results)

## 6. Blog (WordPress)
- [ ] Instalar o WordPress no subdomínio `blog.montsteel.com.br`
- [ ] Apontar o DNS do subdomínio
- [ ] Confirmar que o link "Blog" do menu abre o WP

## 7. Conteúdo a substituir (com o cliente)
- [ ] Otimizar/compactar as imagens (hoje ~244 MB → WebP)
- [ ] Logos reais de clientes (`public/images/clients/`)
- [ ] Fotos reais de obras e produtos
- [ ] Handles reais de Instagram e YouTube (`src/lib/constants.ts`)

## 8. Conferência final
- [ ] Testar formulários (recebimento de e-mail)
- [ ] Testar em mobile e desktop
- [ ] WhatsApp flutuante abrindo a conversa certa
- [ ] Páginas 404 e de erro funcionando
- [ ] Banner de cookies aparecendo na primeira visita
