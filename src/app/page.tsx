"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useWhatsapp } from "@/hooks/use-whatsapp";

const WHATSAPP_MESSAGE = "Olá! Gostaria de consultar minha situação.";

function IconHeadset() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M4 13v-1a8 8 0 1 1 16 0v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 13h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M19 13h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M15 20h-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
      <path
        d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUserCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
      <path
        d="M15 20a6 6 0 0 0-12 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m17 11 2 2 4-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
      <path
        d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.5-4A8 8 0 1 1 21 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 12h.01M12 12h.01M16 12h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
      <path d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.28.6 4.51 1.74 6.47L3 29l6.7-1.73A12.94 12.94 0 0 0 16.04 29c7.18 0 13-5.82 13-13s-5.82-13-13-13Zm0 23.78c-2 0-3.94-.55-5.64-1.6l-.4-.24-3.98 1.03 1.06-3.86-.26-.42A10.7 10.7 0 0 1 5.25 16c0-5.95 4.84-10.78 10.8-10.78 5.94 0 10.78 4.83 10.78 10.78 0 5.95-4.84 10.78-10.79 10.78Zm5.91-8.08c-.32-.16-1.9-.94-2.2-1.05-.29-.1-.5-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.92-1.8-2.24-.18-.32-.02-.5.14-.65.15-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.62c-.21 0-.56.08-.86.4-.29.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.1 1.31 3.31.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.62-.37Z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCard() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M4 10h16" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

const highlights = [
  {
    value: "+1.000.000",
    label: "Atendimentos realizados",
  },
  {
    value: "+4 anos",
    label: "Experiência operacional",
  },
  {
    value: "98%",
    label: "Avaliações positivas",
  },
];

const features = [
  {
    icon: <IconShield />,
    title: "Segurança Total",
    text: "Tratamos todas as informações com sigilo, responsabilidade e cuidado em cada etapa.",
  },
  {
    icon: <IconUserCheck />,
    title: "Análise Humana",
    text: "Nada de atendimento confuso. Seu caso é avaliado por uma equipe preparada.",
  },
  {
    icon: <IconClock />,
    title: "Resposta Rápida",
    text: "Você recebe uma orientação clara e objetiva desde o primeiro contato.",
  },
  {
    icon: <IconChat />,
    title: "Acompanhamento",
    text: "Nossa central acompanha sua solicitação para deixar o processo mais simples.",
  },
];

const steps = [
  "Você entra em contato e explica sua situação.",
  "Nossa equipe analisa as informações disponíveis.",
  "Apresentamos as opções encontradas para você.",
  "Você decide como deseja prosseguir.",
];

export default function Home() {
  const { loading: whatsappLoading, openWhatsapp } = useWhatsapp();
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");

    if (!accepted) {
      setShowCookie(true);
    }
  }, []);

  function handleWhatsapp() {
    openWhatsapp(WHATSAPP_MESSAGE);
  }

  function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookie(false);
  }

  function rejectCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookie(false);
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-pink-100/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3 font-black tracking-tight text-pink-600">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-50 shadow-sm shadow-pink-200">
              <IconHeadset />
            </span>

            <span className="text-base sm:text-lg">
              Assessoria & Consulta
            </span>
          </div>

          <button
            type="button"
            onClick={handleWhatsapp}
            disabled={whatsappLoading}
            className="hidden rounded-full bg-pink-600 px-5 py-3 text-sm font-black text-white shadow-xl shadow-pink-200 transition hover:-translate-y-0.5 hover:bg-pink-700 disabled:cursor-wait disabled:opacity-70 md:inline-flex"
          >
            {whatsappLoading ? "Carregando..." : "Consultar agora"}
          </button>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,#ec4899_0%,#db2777_32%,#be185d_65%,#ec4899_100%)] px-5 pt-16 text-white md:pt-20">
  <div className="absolute left-[-100px] top-[-100px] h-80 w-80 rounded-full bg-pink-900/25 blur-3xl" />
  <div className="absolute bottom-10 right-[-130px] h-96 w-96 rounded-full bg-pink-950/20 blur-3xl" />
  <div className="absolute inset-0 bg-grid opacity-15" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="pb-14 md:pb-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-pink-900/15 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white shadow-2xl shadow-pink-950/10 backdrop-blur">
              Atendimento 2026
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Descontos exclusivos para aproveitar suas oportunidades de até{" "}
              <span className="text-[#f8d85d] drop-shadow-sm">98%</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-pink-50 sm:text-lg">
              Verifique as ofertas disponíveis para você
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handleWhatsapp}
                disabled={whatsappLoading}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-pink-600 shadow-2xl shadow-pink-950/25 transition hover:-translate-y-1 hover:shadow-white/20 disabled:cursor-wait disabled:opacity-70"
              >
                {whatsappLoading ? "Carregando..." : "Consultar agora grátis"}

                <span className="transition group-hover:translate-x-1">
                  <IconArrowRight />
                </span>
              </button>

             
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[520px] justify-center self-end">
            <div className="absolute bottom-8 h-72 w-72 rounded-full bg-pink-900/25 blur-3xl" />

            <picture>
              <source
                srcSet="/womancelular.png"
                media="(max-width: 640px)"
              />

              <img
                src="/womancelular.png"
                alt="Atendimento humano especializado"
                className="relative z-10 h-auto w-full max-w-[430px] object-contain drop-shadow-[0_35px_45px_rgba(219, 14, 96, 0.35)] md:max-w-[500px]"
              />
            </picture>
          </div>
        </div>
      </section>

      <section className="bg-pink-50 px-5 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[28px] border border-pink-100 bg-white p-7 text-center shadow-xl shadow-pink-100/80"
            >
              <strong className="block text-3xl font-black text-pink-600">
                {item.value}
              </strong>

              <span className="mt-2 block text-sm font-semibold text-slate-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-pink-600">
            Diferenciais
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Por que falar com nossa central?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500">
            Um atendimento pensado para orientar você com clareza, agilidade e
            segurança.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-[30px] border border-pink-100 bg-white p-7 shadow-xl shadow-pink-100/70 transition hover:-translate-y-2 hover:border-pink-200 hover:shadow-2xl hover:shadow-pink-100"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50 text-pink-600 transition group-hover:scale-105 group-hover:bg-pink-600 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="text-xl font-black text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-pink-50 px-5 py-20">
        <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] h-72 w-72 rounded-full bg-pink-200/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-pink-600">
              Etapas
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Como funciona o atendimento
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-[28px] border border-pink-100 bg-white p-7 shadow-xl shadow-pink-100/80"
              >
                <span className="text-3xl font-black text-pink-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={handleWhatsapp}
              disabled={whatsappLoading}
              className="inline-flex items-center justify-center rounded-full bg-pink-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-2xl shadow-pink-200 transition hover:-translate-y-1 hover:bg-pink-700 disabled:cursor-wait disabled:opacity-70"
            >
              {whatsappLoading
                ? "Carregando atendimento..."
                : "Falar com um atendente"}
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#9d174d] px-5 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-black">
                Audit Contabilidade Audit Organizacoes Contabeis LTDA
              </h3>

              <p className="mt-3 text-sm leading-7 text-pink-50">
                Atendimento especializado para análise de situações financeiras e
                administrativas.
              </p>
            </div>

            <div className="flex gap-3 text-sm text-pink-50">
              <span className="mt-0.5 text-pink-200">
                <IconMail />
              </span>

              <span>contato@auditcontabilidadeonline.com</span>
            </div>

            <div className="flex gap-3 text-sm text-pink-50">
              <span className="mt-0.5 text-pink-200">
                <IconCard />
              </span>

              <span>CNPJ: 07.994.633/0001-01</span>
            </div>

            <div className="flex gap-3 text-sm leading-7 text-pink-50">
              <span className="mt-0.5 text-pink-200">
                <IconLocation />
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

      <button
        type="button"
        onClick={handleWhatsapp}
        disabled={whatsappLoading}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-2xl shadow-green-500/30 transition hover:scale-110 disabled:cursor-wait disabled:opacity-70"
      >
        <IconWhatsapp />
      </button>

      {showCookie && (
        <div className="fixed inset-x-4 bottom-4 z-[60]">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-[24px] border border-pink-100 bg-white p-5 shadow-2xl shadow-pink-200/70 md:flex-row md:items-center md:justify-between">
            <p className="text-sm leading-6 text-slate-600">
              Utilizamos cookies para melhorar sua experiência e analisar o
              tráfego do site. Ao continuar, você concorda com nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="font-bold text-pink-600"
              >
                Política de Privacidade
              </Link>
              .
            </p>

            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={rejectCookies}
                className="rounded-xl bg-pink-50 px-5 py-3 text-sm font-bold text-pink-700 transition hover:bg-pink-100"
              >
                Recusar
              </button>

              <button
                type="button"
                onClick={acceptCookies}
                className="rounded-xl bg-pink-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-pink-700"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}