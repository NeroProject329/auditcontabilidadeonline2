"use client";

import { IconArrowRight } from "./icons";
import type { WhatsappActionProps } from "./types";
import styles from "./home-design.module.css";

export function HeroSection({
  onWhatsappClick,
  whatsappLoading,
}: WhatsappActionProps) {
  return (
    <section id="inicio" aria-labelledby="hero-title" className={styles.hero}>
      <div className={`${styles.container} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <span className={styles.heroBadge}>Atendimento 2026</span>
          <h1 id="hero-title" className={styles.heroTitle}>
            Consulte suas condições em poucos <span>minutos</span> .
          </h1>
          <p className={styles.heroDescription}>
            Descubra as opções disponiveis para você. Análise gratuita e sem compromisso.
          </p>
          <div className={styles.heroCta}>
            <button
              type="button"
              onClick={onWhatsappClick}
              disabled={whatsappLoading}
              className={`${styles.button} ${styles.buttonLight}`}
            >
              {whatsappLoading ? "Carregando..." : "Consultar condições"}
              <span className={styles.arrow} aria-hidden="true">
                <IconArrowRight />
              </span>
            </button>
          </div>
        </div>
        <figure className={styles.heroFigure}>
          <picture>
            <img
              src="/Mesemmf.png"
              alt="Atendimento humano especializado"
              fetchPriority="high"
            />
          </picture>
        </figure>
      </div>
    </section>
  );
}
