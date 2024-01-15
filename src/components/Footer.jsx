import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.sociallist}>
        <li>email</li>
        <li>linkedin</li>
        <li>personal site</li>
      </ul>
      <img
        src="../../images/logo-no-background.png"
        alt="footer-logo"
        className={styles.logofooter}
      />
      <p className={styles.copyrighttext}>
        Copyright - Vasile-Calin Prostean - 2024
      </p>
    </div>
  );
}

export default Footer;
