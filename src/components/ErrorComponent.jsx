import styles from "./ErrorComponent.module.css";
function ErrorComponent() {
  return (
    <div className={styles.errorMainContainer}>
      <div className={styles.errorMessageContainer}>
        <p>
          Sorry! We cannot find a wine for this meal.. (or maybe you have
          misspelled it)
        </p>
      </div>
      <div className={styles.errorImageContainer}>
        <img
          alt="error-container-image"
          src="../../images/broken-glass-image.png"
        />
      </div>
    </div>
  );
}
export default ErrorComponent;
