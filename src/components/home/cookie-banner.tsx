"use client";

import Link from "next/link";
import { useState } from "react";

export function CookieBanner() {
  // O banner já estava oculto na página original; a refatoração preserva isso.
  const [showCookie, setShowCookie] = useState(false);

  function dismissCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookie(false);
  }

  if (!showCookie) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-[24px] border border-pink-100 bg-white p-5 shadow-2xl shadow-pink-200/70 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-slate-600">
          Utilizamos cookies para melhorar sua experiência e analisar o tráfego
          do site. Ao continuar, você concorda com nossa{" "}
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
            onClick={dismissCookies}
            className="rounded-xl bg-pink-50 px-5 py-3 text-sm font-bold text-pink-700 transition hover:bg-pink-100"
          >
            Recusar
          </button>

          <button
            type="button"
            onClick={dismissCookies}
            className="rounded-xl bg-pink-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-pink-700"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
