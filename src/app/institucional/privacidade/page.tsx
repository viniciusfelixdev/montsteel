import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacidade | CoberSteel",
  description:
    "Saiba como a CoberSteel coleta, usa e protege seus dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: "/institucional/privacidade" },
};

type Secao = {
  titulo: string;
  conteudo: string;
  itens?: { label: string; texto: string }[];
  rodape?: string;
  linkParceiros?: boolean;
};

const sections: Secao[] = [
  {
    titulo: "1. Quem somos",
    conteudo: `A CoberSteel é uma empresa especializada em infraestrutura industrial flexível, com sede na Rua Júlio Gonzaga, 317 - Distrito Industrial Antonio Guaraty - Ibaté/SP. Para fins desta Política, somos o Controlador dos seus dados pessoais, conforme definido pela Lei nº 13.709/2018 (LGPD).`,
  },
  {
    titulo: "2. Quais dados coletamos",
    conteudo: `Coletamos dados pessoais fornecidos diretamente por você, como: nome completo, e-mail, telefone, empresa e segmento de atuação — por meio do formulário de orçamento, contato via WhatsApp ou e-mail. Também podemos coletar dados de navegação (como endereço IP e páginas visitadas) por meio de ferramentas de análise, para fins de melhoria do site.`,
  },
  {
    titulo: "3. Como usamos seus dados",
    conteudo: `Utilizamos seus dados para: responder solicitações de orçamento e contato; enviar propostas comerciais personalizadas; melhorar nossos produtos e serviços; cumprir obrigações legais e regulatórias. Não utilizamos seus dados para fins de marketing sem consentimento prévio.`,
  },
  {
    titulo: "4. Base legal para o tratamento",
    conteudo: `O tratamento dos seus dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD: execução de contrato ou procedimentos preliminares (Art. 7º, V); legítimo interesse do controlador (Art. 7º, IX); cumprimento de obrigação legal (Art. 7º, II); e consentimento do titular (Art. 7º, I), quando aplicável.`,
  },
  {
    titulo: "5. Compartilhamento de dados",
    conteudo: `Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais. Podemos compartilhar informações com prestadores de serviços que nos auxiliam nas operações (como serviços de e-mail e hospedagem), sempre sob obrigação contratual de confidencialidade e segurança.`,
    linkParceiros: true,
  },
  {
    titulo: "6. Retenção de dados",
    conteudo: `Mantemos seus dados pelo período necessário para cumprir as finalidades descritas nesta Política ou conforme exigido por lei. Dados de orçamentos e contratos podem ser mantidos por até 5 anos após o encerramento da relação comercial.`,
  },
  {
    titulo: "7. Seus direitos como titular",
    conteudo: `Conforme a LGPD, você tem o direito de: confirmar a existência do tratamento; acessar seus dados; corrigir dados incompletos ou desatualizados; solicitar a anonimização, bloqueio ou eliminação de dados desnecessários; revogar o consentimento; e obter informações sobre o compartilhamento dos seus dados. Para exercer seus direitos, entre em contato conosco pelo e-mail abaixo.`,
  },
  {
    titulo: "8. Segurança dos dados",
    conteudo: `Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida. No entanto, nenhum sistema de transmissão de dados pela internet é 100% seguro.`,
  },
  {
    titulo: "9. Cookies",
    conteudo: `Nosso site pode utilizar cookies e tecnologias semelhantes para melhorar a experiência de navegação, analisar o tráfego e personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.`,
  },
  {
    titulo: "10. Google Analytics 4 (GA4) e dados de navegação",
    conteudo: `Nós utilizamos o Google Analytics 4 (GA4) para entender como os visitantes interagem com o nosso site, permitindo a melhoria contínua dos nossos serviços e conteúdos. Através dele, coletamos de forma automatizada:`,
    itens: [
      {
        label: "Dados de Comportamento",
        texto: "Rolagem de páginas, cliques em botões, downloads de catálogos, reprodução de vídeos incorporados e envio de formulários de contato.",
      },
      {
        label: "Dados de Aquisição",
        texto: "A origem do seu acesso (se por meio de motores de busca, redes sociais, anúncios ou links diretos).",
      },
      {
        label: "Dados Demográficos e de Perfil",
        texto: "Informações anônimas fornecidas pelo recurso Google Signals, como faixa etária aproximada, gênero, cidade/estado de origem e categorias de interesse de consumo.",
      },
      {
        label: "Dados de Tecnologia",
        texto: "Tipo de dispositivo utilizado (computador ou celular), modelo do aparelho, sistema operacional e navegador de internet.",
      },
    ],
    rodape: `Esses dados são coletados de forma estritamente anônima e não permitem a identificação direta do usuário (como e-mail, nome ou CPF). A coleta está condicionada ao seu consentimento prévio através do nosso banner de gerenciamento de cookies. Você pode revogar ou alterar suas preferências de rastreamento a qualquer momento limpando os cookies do seu navegador. O Google Analytics é fornecido pela Google LLC, empresa sediada nos Estados Unidos, podendo os dados ser processados em servidores localizados fora do Brasil, sempre sob os padrões de proteção e as cláusulas contratuais adotadas pelo Google.`,
  },
  {
    titulo: "11. Alterações nesta Política",
    conteudo: `Esta Política pode ser atualizada periodicamente. Recomendamos que você a revise regularmente. A data da última atualização está indicada ao final do documento.`,
  },
  {
    titulo: "12. Contato",
    conteudo: `Para dúvidas, solicitações ou exercício dos seus direitos relacionados a esta Política, entre em contato com nosso encarregado de dados (DPO) pelo e-mail contato@cobersteel.com.br ou pelo telefone (16) 2120-0477.`,
  },
];

export default function PrivacidadePage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/privacidade-banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/75" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-steel to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            PRIVACIDADE
          </h1>
          <p className="text-sm text-[#94A3B8]">
            Última atualização: julho de 2026
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-dark-steel py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-mid rounded-xl p-8 sm:p-12 space-y-10">
            <p className="text-[#94A3B8] leading-relaxed">
              A CoberSteel valoriza a privacidade e a proteção dos dados pessoais de seus clientes, parceiros e visitantes. Esta Política descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
            </p>

            {sections.map((s) => (
              <div key={s.titulo}>
                <h2
                  className="text-xl font-black uppercase text-white mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {s.titulo}
                </h2>
                <p className="text-[#94A3B8] leading-relaxed text-sm">{s.conteudo}</p>
                {s.itens && (
                  <ul className="mt-3 space-y-2 pl-1">
                    {s.itens.map((item) => (
                      <li key={item.label} className="text-[#94A3B8] leading-relaxed text-sm">
                        <span className="text-white font-semibold">{item.label}:</span> {item.texto}
                      </li>
                    ))}
                  </ul>
                )}
                {s.rodape && (
                  <p className="text-[#94A3B8] leading-relaxed text-sm mt-3">{s.rodape}</p>
                )}
                {s.linkParceiros && (
                  <p className="text-[#94A3B8] leading-relaxed text-sm mt-3">
                    Saiba mais sobre nossos{" "}
                    <Link href="/institucional/parceiros" className="text-[#A7B2BF] hover:text-white transition-colors">
                      Parceiros Comerciais
                    </Link>
                    .
                  </p>
                )}
              </div>
            ))}

            <div className="border-t border-dark-border pt-8">
              <p className="text-xs text-[#94A3B8]">
                CoberSteel Coberturas e Estruturas Industriais — {CONTACT_INFO.address} — {CONTACT_INFO.email}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2 rounded-lg transition-all group"
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
