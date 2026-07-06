import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CONTACT_INFO, COMPANY_INFO } from "@/lib/constants";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Termos de Uso | MontSteel",
  description:
    "Condições de uso do site da MontSteel: regras de utilização, propriedade intelectual, limitação de responsabilidade e foro aplicável.",
  alternates: { canonical: "/institucional/termos-de-uso" },
};

type Secao = {
  titulo: string;
  conteudo: string;
  itens?: { label: string; texto: string }[];
  rodape?: string;
  linkPrivacidade?: boolean;
};

const sections: Secao[] = [
  {
    titulo: "1. Aceitação dos Termos",
    conteudo: `Ao acessar e utilizar o site da MontSteel, você concorda integralmente com estes Termos de Uso. Caso não concorde com qualquer disposição aqui prevista, recomendamos que não utilize este site.`,
  },
  {
    titulo: "2. Sobre o site",
    conteudo: `Este site tem finalidade institucional e comercial: apresentar os produtos e serviços da MontSteel (galpões de lona, metálicos, híbridos, mezaninos, projetos especiais e niveladoras de doca), permitir o envio de solicitações de orçamento e disponibilizar conteúdo técnico e informativo sobre infraestrutura industrial.`,
  },
  {
    titulo: "3. Uso permitido",
    conteudo: `Você pode navegar e utilizar este site para fins lícitos, relacionados à avaliação e contratação dos produtos e serviços da MontSteel. Não é permitido:`,
    itens: [
      { label: "Uso indevido", texto: "Utilizar o site de forma que possa danificar, sobrecarregar ou comprometer seu funcionamento ou segurança." },
      { label: "Acesso não autorizado", texto: "Tentar acessar áreas restritas, sistemas ou dados sem autorização." },
      { label: "Extração automatizada", texto: "Utilizar robôs, scrapers ou outros meios automatizados para coletar conteúdo do site sem autorização prévia." },
      { label: "Uso enganoso", texto: "Enviar informações falsas ou se passar por terceiros ao preencher formulários de contato ou orçamento." },
    ],
  },
  {
    titulo: "4. Propriedade intelectual",
    conteudo: `Todo o conteúdo deste site — incluindo textos, imagens, logotipos, marca, layout, código-fonte e materiais técnicos — é de propriedade da MontSteel ou licenciado para seu uso, e está protegido pela legislação brasileira de direitos autorais e propriedade industrial. É proibida a reprodução, distribuição ou uso comercial de qualquer conteúdo deste site sem autorização prévia e por escrito da MontSteel.`,
  },
  {
    titulo: "5. Orçamentos e propostas comerciais",
    conteudo: `As informações de produtos, especificações técnicas, prazos e valores apresentadas neste site têm caráter informativo e não constituem proposta comercial vinculante. Toda solicitação enviada pelo formulário de orçamento ou WhatsApp será respondida por nossa equipe com uma proposta formal, que é o documento que efetivamente rege os termos comerciais de qualquer contratação.`,
  },
  {
    titulo: "6. Conteúdo técnico e normas ABNT",
    conteudo: `O conteúdo técnico publicado neste site (páginas de produtos, normas ABNT, blog) tem finalidade informativa e educativa. Ele não substitui o memorial de cálculo, o projeto estrutural assinado por engenheiro responsável (com ART) e a documentação técnica específica de cada projeto contratado, que são os documentos que efetivamente atestam a conformidade técnica de uma obra.`,
  },
  {
    titulo: "7. Limitação de responsabilidade",
    conteudo: `A MontSteel envida esforços para manter as informações deste site atualizadas e corretas, mas não garante a ausência total de erros, imprecisões ou indisponibilidades temporárias. A MontSteel não se responsabiliza por danos decorrentes do uso ou da impossibilidade de uso deste site, incluindo interrupções, falhas técnicas ou ações de terceiros, ressalvados os casos previstos em lei.`,
  },
  {
    titulo: "8. Links para sites de terceiros",
    conteudo: `Este site pode conter links para sites de terceiros (redes sociais, parceiros, WordPress do blog). A MontSteel não se responsabiliza pelo conteúdo, pelas políticas de privacidade ou pelas práticas desses sites externos.`,
  },
  {
    titulo: "9. Privacidade e proteção de dados",
    conteudo: `O tratamento de dados pessoais coletados através deste site é regido pela nossa Política de Privacidade, elaborada em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).`,
    linkPrivacidade: true,
  },
  {
    titulo: "10. Alterações destes Termos",
    conteudo: `Estes Termos de Uso podem ser atualizados periodicamente, a qualquer momento e sem aviso prévio, para refletir mudanças legais, técnicas ou comerciais. Recomendamos que você os revise regularmente. A data da última atualização está indicada ao final do documento.`,
  },
  {
    titulo: "11. Legislação e foro aplicável",
    conteudo: `Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca da sede da MontSteel para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.`,
  },
  {
    titulo: "12. Contato",
    conteudo: `Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail ${CONTACT_INFO.email} ou pelo telefone ${CONTACT_INFO.phone1}.`,
  },
];

export default function TermosDeUsoPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/privacidade-banner.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/75" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-steel to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Termos de Uso" }]} />
          <h1
            className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4 font-display"
          >
            TERMOS DE USO
          </h1>
          <p className="text-sm text-[#94A3B8]">
            Última atualização: julho de 2026
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-light-bg dark:bg-dark-steel py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-dark-mid rounded-xl p-8 sm:p-12 space-y-10">
            <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">
              Estes Termos de Uso regulam o acesso e a utilização do site da MontSteel. Ao navegar por este site, você concorda com as condições descritas abaixo. Leia com atenção antes de utilizar nossos serviços.
            </p>

            {sections.map((s) => (
              <div key={s.titulo}>
                <h2
                  className="text-xl font-black uppercase text-dark-steel dark:text-white mb-3 font-display"
                >
                  {s.titulo}
                </h2>
                <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed text-sm">{s.conteudo}</p>
                {s.itens && (
                  <ul className="mt-3 space-y-2 pl-1">
                    {s.itens.map((item) => (
                      <li key={item.label} className="text-slate-600 dark:text-[#94A3B8] leading-relaxed text-sm">
                        <span className="text-dark-steel dark:text-white font-semibold">{item.label}:</span> {item.texto}
                      </li>
                    ))}
                  </ul>
                )}
                {s.rodape && (
                  <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed text-sm mt-3">{s.rodape}</p>
                )}
                {s.linkPrivacidade && (
                  <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed text-sm mt-3">
                    Consulte a nossa{" "}
                    <Link href="/institucional/privacidade" className="text-slate-500 dark:text-[#A7B2BF] hover:text-dark-steel dark:hover:text-white transition-colors">
                      Política de Privacidade
                    </Link>
                    .
                  </p>
                )}
              </div>
            ))}

            <div className="border-t border-slate-200 dark:border-dark-border pt-8">
              <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
                {COMPANY_INFO.razaoSocial} — CNPJ {COMPANY_INFO.cnpj} — {CONTACT_INFO.address} — {CONTACT_INFO.email}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2.5 rounded-lg transition-all group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
              Voltar para o início
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
