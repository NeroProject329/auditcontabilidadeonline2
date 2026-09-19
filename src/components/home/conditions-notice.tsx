"use client";

import { IconArrowRight } from "./icons";
import type { WhatsappActionProps } from "./types";
import styles from "./conditions-notice.module.css";

const services = [
  {
    title: "Contabilidade para Empresas",
    description:
      "Suporte para organização e acompanhamento das rotinas contábeis.",
  },
  {
    title: "Assessoria Fiscal",
    description:
      "Orientação e suporte para o cumprimento das obrigações fiscais.",
  },
  {
    title: "Orientação Contábil",
    description:
      "Atendimento para esclarecer dúvidas e necessidades contábeis.",
  },
  {
    title: "Assessoria Empresarial",
    description: "Suporte contábil e administrativo para empresas.",
  },
];

export function ConditionsNotice({
  onWhatsappClick,
  whatsappLoading,
}: WhatsappActionProps) {
  return (
    <section
      id="servicos"
      aria-labelledby="services-title"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Serviços</span>
          <h2 id="services-title">Conheça nossos serviços</h2>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article key={service.title} className={styles.card}>
              <div className={styles.cardTop} aria-hidden="true">
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < services.length - 1 && <IconArrowRight />}
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <button
            type="button"
            onClick={onWhatsappClick}
            disabled={whatsappLoading}
            className={styles.button}
          >
            {whatsappLoading
              ? "Carregando atendimento..."
              : "FALAR COM NOSSA EQUIPE"}
          </button>
        </div>
      </div>
    </section>
  );
}
