import Link from "next/link";
import { IconMail, IconCard, IconLocation, IconHeadset } from "./icons";
import styles from "./home-design.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerBrand}>
              <span className={styles.brandMark} aria-hidden="true">
                <IconHeadset />
              </span>
              <h2>Audit Contabilidade Audit Organizacoes Contabeis LTDA</h2>
            </div>
            <p className={styles.footerDescription}>
              Empresa responsável pelo atendimento, análise das informações
              apresentadas pelo cliente e orientação sobre as condições
              disponíveis em cada caso.
            </p>
          </div>
          <address className={styles.footerContacts}>
            <div className={styles.contact}>
              <IconMail />
              <div>
                <small>E-mail</small>
                <a href="mailto:contato@auditcontabilidadeonline.com">
                  contato@auditcontabilidadeonline.com
                </a>
              </div>
            </div>
            <div className={styles.contact}>
              <IconCard />
              <div>
                <small>CNPJ</small>07.994.633/0001-01
              </div>
            </div>
            <div className={styles.contact}>
              <IconLocation />
              <div>
                <small>Endereço</small>
                <p>Rua Regimento Barriga Verde 719 Sala 02</p>
                <p>Centro, Araranguá - SC · CEP: 88900-061</p>
              </div>
            </div>
          </address>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2026 Central Gerencial. Todos os direitos reservados.</p>
          <nav aria-label="Informações legais">
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
            <Link href="/termos-de-uso">Termos de Uso</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
