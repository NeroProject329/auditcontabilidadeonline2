import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | Audit Contabilidade",
  description:
    "Termos de Uso da Audit Contabilidade Audit Organizacoes Contabeis LTDA.",
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

function IconScale({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`}>
      <path d="M12 3v18" />
      <path d="M5 6h14" />
      <path d="M6 6l-3 7h6L6 6Z" />
      <path d="M18 6l-3 7h6l-3-7Z" />
      <path d="M8 21h8" />
    </svg>
  );
}

function IconCheck({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.3 2.3 4.7-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconAlert({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`}>
      <path d="M12 9v4" strokeLinecap="round" />
      <path d="M12 17h.01" strokeLinecap="round" />
      <path d="M10.3 3.8 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z" />
    </svg>
  );
}

function IconShield({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`}>
      <path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6l-7-3Z" />
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

function IconRefresh({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`}>
      <path d="M21 12a9 9 0 0 1-15.5 6.2" />
      <path d="M3 12A9 9 0 0 1 18.5 5.8" />
      <path d="M18 2v4h4" />
      <path d="M6 22v-4H2" />
    </svg>
  );
}

const companyInfo = [
  {
    icon: IconFile,
    label: "Razão Social",
    value: "Audit Contabilidade Audit Organizacoes Contabeis LTDA",
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
    icon: IconCheck,
    title: "1. Aceitação dos termos",
    content: [
      "Ao acessar este site, utilizar seus recursos ou entrar em contato com a empresa, o usuário declara que leu, compreendeu e concorda com estes Termos de Uso.",
      "Caso não concorde com alguma condição, recomendamos que não utilize o site ou os canais disponibilizados por ele.",
    ],
  },
  {
    icon: IconScale,
    title: "2. Sobre o site e o atendimento",
    content: [
      "Este site possui finalidade informativa e comercial, apresentando canais de contato, informações institucionais e orientações relacionadas ao atendimento oferecido.",
      "As informações apresentadas podem ser atualizadas, modificadas ou removidas a qualquer momento, sem aviso prévio.",
    ],
  },
  {
    icon: IconAlert,
    title: "3. Condições, análises e resultados",
    content: [
      "Condições, análises, propostas, descontos, prazos ou benefícios podem variar conforme o caso, perfil do usuário, disponibilidade, regras internas, parceiros ou instituições envolvidas.",
      "Nenhuma informação exibida no site deve ser interpretada como promessa absoluta de resultado, aprovação, desconto ou contratação.",
    ],
  },
  {
    icon: IconShield,
    title: "4. Responsabilidades do usuário",
    content: [
      "O usuário se compromete a fornecer informações verdadeiras, completas e atualizadas sempre que entrar em contato ou preencher dados por meio do site.",
      "É proibido utilizar o site para práticas ilícitas, envio de informações falsas, tentativa de fraude, cópia indevida, invasão, exploração de falhas ou qualquer ação que prejudique a empresa ou terceiros.",
    ],
  },
  {
    icon: IconFile,
    title: "5. Propriedade intelectual",
    content: [
      "Textos, imagens, layout, identidade visual, estrutura, elementos gráficos e demais conteúdos presentes neste site pertencem à empresa ou são utilizados mediante autorização/licença.",
      "É proibida a cópia, reprodução, distribuição, modificação ou uso comercial dos conteúdos sem autorização prévia.",
    ],
  },
  {
    icon: IconRefresh,
    title: "6. Alterações destes termos",
    content: [
      "A empresa poderá atualizar estes Termos de Uso a qualquer momento para refletir alterações no site, nos serviços, na legislação ou nas práticas internas.",
      "A versão mais recente estará sempre disponível nesta página.",
    ],
  },
];

function LegalFooter() {
  return (
    <footer className="bg-[#9d174d] px-5 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-black">
              Audit Contabilidade Audit Organizacoes Contabeis LTDA
            </h3>

            <p className="mt-3 text-sm leading-7 text-pink-50">
              Atendimento especializado para análise de situações financeiras e administrativas.
            </p>
          </div>

          <div className="flex gap-3 text-sm text-pink-50">
            <span className="mt-0.5 text-pink-200">
              <IconMail className="h-5 w-5" />
            </span>

            <span>contato@auditcontabilidadeonline.com</span>
          </div>

          <div className="flex gap-3 text-sm text-pink-50">
            <span className="mt-0.5 text-pink-200">
              <IconFile className="h-5 w-5" />
            </span>

            <span>CNPJ: 07.994.633/0001-01</span>
          </div>

          <div className="flex gap-3 text-sm leading-7 text-pink-50">
            <span className="mt-0.5 text-pink-200">
              <IconLocation className="h-5 w-5" />
            </span>

            <div>
              <p>Rua Regimento Barriga Verde 719 Sala 02</p>
              <p>Centro, Araranguá - SC</p>
              <p>CEP: 88900-061</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-pink-50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Central Gerencial. Todos os direitos reservados.</p>

          <div className="flex gap-4">
            <Link href="/politica-de-privacidade" className="hover:text-white">
              Política de Privacidade
            </Link>

            <Link href="/termos-de-uso" className="hover:text-white">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function TermosDeUsoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-pink-100/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3 font-black tracking-tight text-pink-600">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-50 shadow-sm shadow-pink-200">
              <IconHeadset className="h-6 w-6" />
            </span>

            <span className="text-base sm:text-lg">Assessoria & Consulta</span>
          </Link>

          <Link
            href="/"
            className="rounded-full bg-pink-600 px-5 py-3 text-sm font-black text-white shadow-xl shadow-pink-200 transition hover:-translate-y-0.5 hover:bg-pink-700"
          >
            Voltar
          </Link>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,#ec4899_0%,#db2777_32%,#be185d_65%,#ec4899_100%)] px-5 py-20 text-white md:py-24">
        <div className="absolute left-[-100px] top-[-100px] h-80 w-80 rounded-full bg-pink-900/25 blur-3xl" />
        <div className="absolute bottom-10 right-[-130px] h-96 w-96 rounded-full bg-pink-950/20 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-15" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-8 inline-flex rounded-full border border-white/20 bg-pink-900/15 px-4 py-2 text-sm font-black text-white backdrop-blur transition hover:bg-white/10"
          >
            ← Voltar para o início
          </Link>

          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/20 bg-pink-900/15 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white backdrop-blur">
              Regras de utilização
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Termos de Uso
            </h1>

            <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-pink-50 sm:text-lg">
              Estes Termos de Uso estabelecem as condições para acesso, navegação
              e utilização deste site, bem como o relacionamento inicial com a empresa.
            </p>

            <p className="mt-5 text-sm font-semibold text-pink-100">
              Última atualização: 06 de maio de 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-pink-50 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[30px] border border-pink-100 bg-white p-7 shadow-xl shadow-pink-100/80 sm:p-8">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50 text-pink-600">
              <IconScale className="h-8 w-8" />
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              Identificação da empresa
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
                className="rounded-[30px] border border-pink-100 bg-white p-7 shadow-xl shadow-pink-100/70 sm:p-8"
              >
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-pink-600">
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

          <div className="mt-8 overflow-hidden rounded-[30px] bg-[radial-gradient(circle_at_top_left,#ec4899_0%,#db2777_32%,#be185d_65%,#9d174d_100%)] p-5 text-white shadow-2xl shadow-pink-200 sm:p-8">
  <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
    Dúvidas sobre estes termos?
  </h2>

  <p className="mt-4 max-w-3xl text-sm font-medium leading-8 text-pink-50 sm:text-base">
    Para qualquer dúvida sobre estes Termos de Uso, fale com a empresa pelo canal oficial abaixo.
  </p>

  <a
  href="mailto:contato@auditcontabilidadeonline.com"
  className="mt-6 flex w-full max-w-full items-center justify-center overflow-hidden rounded-full bg-white px-3 py-4 text-center text-[10px] font-black uppercase tracking-normal text-pink-600 shadow-2xl shadow-pink-950/20 transition hover:-translate-y-1 min-[390px]:text-[11px] sm:inline-flex sm:w-auto sm:px-7 sm:text-sm sm:tracking-wide"
>
  <span className="max-w-full leading-5">
    contato@auditcontabilidadeonline.com
  </span>
</a>
</div>
        </div>
      </section>

      <LegalFooter />
    </main>
  );
}