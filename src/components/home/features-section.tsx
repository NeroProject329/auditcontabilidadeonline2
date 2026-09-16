import styles from "./home-design.module.css";
import { IconShield, IconUserCheck, IconClock, IconChat } from "./icons";

const features = [
  {
    icon: <IconShield />,
    title: "Atendimento Seguro",
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
            Por que falar com nossa central?
          </h2>
          <p className={styles.sectionDescription}>
            Um atendimento pensado para orientar você com clareza, agilidade e
            segurança.
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
