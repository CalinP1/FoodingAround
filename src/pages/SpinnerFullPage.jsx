import Spinner from "../components/Spinner";
import styles from "./SpinnerFullPage.module.css";
function SpinnerFullPage() {
  return (
    <div className={styles.spinnerMain}>
      <Spinner />
    </div>
  );
}

export default SpinnerFullPage;
