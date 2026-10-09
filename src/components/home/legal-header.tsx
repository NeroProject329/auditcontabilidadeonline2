import Link from "next/link";
import { IconHeadset } from "./icons";
import styles from "./home-design.module.css";

export function LegalHeader() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <Link
          href="/#inicio"
          className={styles.brand}
          aria-label="Audit Contabilidade — início"
        >
          <span className={styles.brandMark} aria-hidden="true">
            <IconHeadset />
          </span>
          <span className={styles.brandName}>
            Audit Contabilidade <small>Atendimento humano e online</small>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          <Link href="/#inicio">Início</Link>
          <Link href="/#diferenciais">Diferenciais</Link>
          <Link href="/#etapas">Como funciona</Link>
        </nav>

        <Link href="/" className={styles.button}>
          Voltar ao início
        </Link>
      </div>
    </header>
  );
}
