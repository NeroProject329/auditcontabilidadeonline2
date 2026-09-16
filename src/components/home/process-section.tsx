import { IconArrowRight } from "./icons";
import styles from "./home-design.module.css";

const steps = [
  "Você entra em contato e explica sua situação.",
  "Nossa equipe analisa as informações disponíveis.",
  "Apresentamos as opções encontradas para você.",
  "Você decide como deseja prosseguir.",
];

export function ProcessSection() {
  return (
    <section
      id="etapas"
      aria-labelledby="process-title"
      className={styles.process}
    >
      <div className={styles.container}>
        <div className={styles.processHeading}>
          <span className={styles.eyebrow}>Etapas</span>
          <h2 id="process-title" className={styles.sectionTitle}>
            Como funciona o atendimento
          </h2>
        </div>
        <ol className={styles.stepGrid}>
          {steps.map((step, index) => (
            <li key={step} className={styles.stepCard}>
              <div className={styles.stepTop} aria-hidden="true">
                <span className={styles.stepNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < steps.length - 1 && <IconArrowRight />}
              </div>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
