"use client";

import { IconHeadset } from "./icons";
import type { WhatsappActionProps } from "./types";
import styles from "./home-design.module.css";

export function SiteHeader({
  onWhatsappClick,
  whatsappLoading,
}: WhatsappActionProps) {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <a
          href="#inicio"
          className={styles.brand}
          aria-label="Assessoria e Consulta — início"
        >
          <span className={styles.brandMark} aria-hidden="true">
            <IconHeadset />
          </span>
          <span className={styles.brandName}>
            Assessoria & Consulta<small>Atendimento humano e online</small>
          </span>
        </a>
        <nav className={styles.nav} aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#etapas">Como funciona</a>
        </nav>
        <button
          type="button"
          onClick={onWhatsappClick}
          disabled={whatsappLoading}
          className={styles.button}
        >
          {whatsappLoading ? "Carregando..." : "Saiba mais"}
        </button>
      </div>
    </header>
  );
}
