import styles from "./home-design.module.css";
import { IconShield, IconUserCheck, IconClock, IconChat } from "./icons";

const features = [
  {
    icon: <IconShield />,
    title: "Serviços Contábeis",
    text: "Suporte contábil para pessoas e empresas, de acordo com suas necessidades.",
  },
  {
    icon: <IconUserCheck />,
    title: "Atendimento Personalizado ",
    text: "Nossa equipe entende sua necessidade e orienta sobre os serviços adequados.",
  },
  {
    icon: <IconClock />,
    title: "Suporte Fiscal ",
    text: "Orientação para organização e cumprimento das obrigações fiscais.",
  },
  {
    icon: <IconChat />,
    title: "Assessoria Empresarial",
    text: "Suporte para rotinas contábeis e necessidades administrativas da empresa.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="features-title"
      className={styles.features}
    >
      <div className={`${styles.container} ${styles.featuresLayout}`}>
        <div>
          <span className={styles.eyebrow}>Diferenciais</span>
          <h2 id="features-title" className={styles.sectionTitle}>
            Por que contar com nossa equipe?
          </h2>
          <p className={styles.sectionDescription}>
            Atendimento contábil com clareza, organização e suporte para suas necessidades.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((item) => (
            <article key={item.title} className={styles.featureCard}>
              <div className={styles.featureIcon} aria-hidden="true">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
