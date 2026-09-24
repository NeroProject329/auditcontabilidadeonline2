import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink } from "@/components/home/email-link";
import { LegalHeader } from "@/components/home/legal-header";
import { SiteFooter } from "@/components/home/site-footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | Audit Contabilidade",
  description:
    "Política de Privacidade da Audit Contabilidade, nome fantasia da Audit Organizações Contábeis LTDA.",
};

type IconProps = {
  className?: string;
};

function IconHeadset({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`}>
      <path d="M4 13v-1a8 8 0 1 1 16 0v1" strokeLinecap="round" />
      <path d="M5 13h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Z" />
      <path d="M19 13h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z" />
      <path d="M15 20h-3" strokeLinecap="round" />
    </svg>
  );
}

function IconShield({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`}>
      <path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDatabase({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  );
}

function IconLock({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`}>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function IconFile({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h6" />
    </svg>
  );
}

function IconMail({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function IconLocation({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`}>
      <path d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
      <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
}

function IconCookie({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`}>
      <path d="M20 13.5A8 8 0 1 1 10.5 4a3 3 0 0 0 3.5 3.5 3 3 0 0 0 4 4 3 3 0 0 0 2 2Z" />
      <path d="M8 10h.01M12 15h.01M9 17h.01" strokeLinecap="round" />
    </svg>
  );
}

const companyInfo = [
  {
    icon: IconHeadset,
    label: "Nome fantasia",
    value: "Audit Contabilidade",
  },
  {
    icon: IconFile,
    label: "Razão Social",
    value: "Audit Organizações Contábeis LTDA",
  },
  {
    icon: IconFile,
    label: "CNPJ",
    value: "07.994.633/0001-01",
  },
  {
    icon: IconMail,
    label: "E-mail",
    value: "contato@auditcontabilidadeonline.com",
  },
  {
    icon: IconLocation,
    label: "Endereço",
    value: "Rua Regimento Barriga Verde 719 Sala 02, Centro, Araranguá - SC, CEP: 88900-061",
  },
];

const sections = [
  {
    icon: IconDatabase,
    title: "1. Informações que podemos coletar",
    content: [
      "Podemos coletar informações fornecidas diretamente pelo usuário, como nome, telefone, e-mail e demais dados enviados por meio dos canais de contato disponíveis no site.",
      "Também podemos coletar informações técnicas de navegação, como endereço IP, dispositivo utilizado, navegador, páginas acessadas e interações realizadas durante a visita.",
    ],
  },
  {
    icon: IconFile,
    title: "2. Finalidade do uso das informações",
    content: [
      "As informações coletadas podem ser utilizadas para atendimento, análise de solicitações, retorno de contato, orientação inicial e melhoria da experiência do usuário.",
      "Também poderemos utilizar dados para cumprir obrigações legais, regulatórias, contratuais ou para proteger direitos da empresa e dos usuários.",
    ],
  },
  {
    icon: IconShield,
    title: "3. Compartilhamento de dados",
    content: [
      "Os dados poderão ser compartilhados apenas quando necessário para execução do atendimento, cumprimento de obrigações legais, prevenção de fraudes ou proteção de direitos.",
      "A empresa não comercializa dados pessoais dos usuários.",
    ],
  },
  {
    icon: IconLock,
    title: "4. Segurança das informações",
    content: [
      "Adotamos medidas razoáveis de segurança para proteger as informações contra acessos não autorizados, perda, alteração, divulgação indevida ou uso inadequado.",
      "Apesar disso, nenhum ambiente digital é totalmente livre de riscos. Por isso, recomendamos que o usuário também mantenha seus dados e dispositivos protegidos.",
    ],
  },
  {
    icon: IconCookie,
    title: "5. Cookies",
    content: [
      "Este site poderá utilizar cookies para melhorar a experiência de navegação, lembrar preferências e compreender como os usuários interagem com as páginas.",
      "O usuário pode configurar seu navegador para bloquear ou excluir cookies, mas isso pode afetar algumas funcionalidades do site.",
    ],
  },
  {
    icon: IconShield,
    title: "6. Direitos do titular",
    content: [
      "O usuário poderá solicitar informações sobre tratamento de dados pessoais, correção, atualização, exclusão ou demais direitos previstos na Lei Geral de Proteção de Dados.",
      "As solicitações podem ser feitas pelo e-mail oficial informado nesta página.",
    ],
  },
];

function LegalFooter() {
  return <SiteFooter />;
}

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <LegalHeader />

      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,#ec4899_0%,#db2777_32%,#be185d_65%,#ec4899_100%)] px-5 py-20 text-white md:py-24">
        <div className="absolute left-[-100px] top-[-100px] h-80 w-80 rounded-full bg-pink-900/25 blur-3xl" />
        <div className="absolute bottom-10 right-[-130px] h-96 w-96 rounded-full bg-pink-950/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-8 inline-flex rounded-full border border-white/20 bg-pink-900/15 px-4 py-2 text-sm font-black text-white backdrop-blur transition hover:bg-white/10"
          >
            ← Voltar para o início
          </Link>

          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/20 bg-pink-900/15 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white backdrop-blur">
              Privacidade e proteção de dados
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Política de Privacidade
            </h1>

            <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-pink-50 sm:text-lg">
              Esta Política de Privacidade explica como coletamos, utilizamos,
              armazenamos e protegemos as informações dos usuários que acessam este site
              ou entram em contato conosco.
            </p>

            <p className="mt-5 text-sm font-semibold text-pink-100">
              Última atualização: 06 de maio de 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-pink-50 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div
            className="rounded-[30px] border border-pink-100 bg-white p-7 sm:p-8"
            style={{ boxShadow: "-8px 10px 0 rgba(157, 23, 77, 0.12), -14px 20px 32px rgba(148, 20, 71, 0.08)" }}
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-600 text-white shadow-lg shadow-pink-200">
              <IconShield className="h-8 w-8" />
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              Dados da empresa
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {companyInfo.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-[28px] border border-pink-100 bg-pink-50/60 p-6"
                >
                  <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-pink-600">
                    <Icon className="h-5 w-5" />
                    {label}
                  </div>

                  <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6">
            {sections.map(({ icon: Icon, title, content }) => (
              <article
                key={title}
                className="rounded-[30px] border border-pink-100 bg-white p-7 sm:p-8"
                style={{ boxShadow: "-8px 10px 0 rgba(157, 23, 77, 0.1), -12px 18px 30px rgba(148, 20, 71, 0.07)" }}
              >
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-pink-600 text-white shadow-lg shadow-pink-200">
                    <Icon className="h-8 w-8" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black tracking-tight text-slate-950">
                      {title}
                    </h2>

                    <div className="mt-4 space-y-3">
                      {content.map((text) => (
                        <p key={text} className="text-sm font-medium leading-8 text-slate-600 sm:text-base">
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[30px] bg-[#319ADA] p-5 text-white sm:p-8">
  <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
    Fale conosco
  </h2>

  <p className="mt-4 max-w-3xl text-sm font-medium leading-8 text-white/90 sm:text-base">
    Para dúvidas sobre esta Política de Privacidade ou solicitações relacionadas
    aos seus dados pessoais, entre em contato pelo e-mail oficial.
  </p>

  <EmailLink
  aria-label="Enviar e-mail para a Audit Contabilidade"
  className="mt-6 flex w-full max-w-full items-center justify-center overflow-hidden rounded-full bg-white px-3 py-4 text-center text-[10px] font-black uppercase tracking-normal text-[#1579B8] shadow-[0_8px_0_#1579B8,0_15px_28px_rgba(10,76,118,0.28)] transition hover:-translate-y-1 min-[390px]:text-[11px] sm:inline-flex sm:w-auto sm:px-7 sm:text-sm sm:tracking-wide"
>
  <span className="max-w-full leading-5">
    contato@auditcontabilidadeonline.com
  </span>
</EmailLink>
</div>
        </div>
      </section>

      <LegalFooter />
    </main>
  );
}
