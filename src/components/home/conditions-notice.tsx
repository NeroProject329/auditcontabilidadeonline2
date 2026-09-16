"use client";

import type { WhatsappActionProps } from "./types";
import styles from "./conditions-notice.module.css";

export function ConditionsNotice({
  onWhatsappClick,
  whatsappLoading,
}: WhatsappActionProps) {
  return (
    <section
      aria-label="Condições do atendimento"
      className="bg-[#319ADA] px-5 py-12"
    >
      <div
        className={`${styles.relief} rounded-2xl bg-white text-[#1579B8]`}
        style={{
          width: "calc(100% - 32px)",
          maxWidth: "900px",
          margin: "24px auto",
          padding: "24px",
          border: "1px solid rgba(0,0,0,0.06)",
          boxSizing: "border-box",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        <p style={{ margin: 0 }}>
          As condições, ofertas e eventuais descontos apresentados durante o
          atendimento dependem da análise e das condições disponíveis para cada
          caso. Não garantimos percentual específico de desconto ou resultado
          determinado. As condições podem variar conforme as informações
          apresentadas e a disponibilidade existente no momento da consulta.
        </p>
      </div>

      <div className="mt-12 text-center">
        <button
          type="button"
          onClick={onWhatsappClick}
          disabled={whatsappLoading}
          className={`${styles.relief} ${styles.button} inline-flex items-center justify-center rounded-full bg-pink-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-1 hover:bg-pink-700 disabled:cursor-wait disabled:opacity-70`}
        >
          {whatsappLoading
            ? "Carregando atendimento..."
            : "Falar com um atendente"}
        </button>
      </div>
    </section>
  );
}
