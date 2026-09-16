import { IconClock, IconUserCheck, IconChat } from "./icons";
import styles from "./home-design.module.css";

const highlights = [
  {
    value: "Anos de atuação",
    label: "Experiência operacional",
  },
  {
    value: "Atendimento humano",
    label: "Análise individual",
  },
  {
    value: "Atendimento online",
    label: "Canais oficiais",
  },
];

const highlightIcons = [IconClock, IconUserCheck, IconChat];

export function HighlightsSection() {
  return (
    <section aria-label="Sobre o atendimento" className={styles.highlights}>
      <div className={`${styles.container} ${styles.highlightGrid}`}>
        {highlights.map((item, index) => {
          const Icon = highlightIcons[index];
          return (
            <div key={item.label} className={styles.highlightCard}>
              <div className={styles.highlightIcon} aria-hidden="true">
                <Icon />
              </div>
              <div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
