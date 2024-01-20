import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.sociallist}>
        <li className={styles.iconlist}>
          <img src="../../images/mail-icon.png" />
          <span>prostean.vasilecalin@gmail.com</span>
        </li>
        <li className={styles.iconlist}>
          <img src="../../images/linkedin-icon.png" />
          <span>www.linkedin.com/in/vasile-călin-proștean</span>
        </li>
        <li className={styles.iconlist}>
          <img src="../../images/personal-site-icon.png" />
          <span>-to-be-done-</span>
        </li>
      </ul>
      <img
        src="../../images/logo-no-background.png"
        alt="footer-logo"
        className={styles.logofooter}
      />
      <p className={styles.copyrighttext}>
        Copyright - Vasile-Calin Prostean - 2024
      </p>
    </footer>
  );
}

export default Footer;
