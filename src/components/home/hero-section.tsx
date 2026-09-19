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
          <span className={styles.heroBadge}>ATENDIMENTO CONTÁBIL 2026</span>
          <h1 id="hero-title" className={styles.heroTitle}>
            Atendimento pensado para <span>você</span> .
          </h1>
          <p className={styles.heroDescription}>
            Conte com nossa equipe para conhecer os serviços disponíveis e esclarecer suas dúvidas.
          </p>
          <div className={styles.heroCta}>
            <button
              type="button"
              onClick={onWhatsappClick}
              disabled={whatsappLoading}
              className={`${styles.button} ${styles.buttonLight}`}
            >
              {whatsappLoading ? "Carregando..." : "Saiba mais"}
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
