import Navbar from "../components/Navbar";
import Pagelist from "../components/Pagelist";
import Footer from "../components/Footer";
import styles from "./Heropage.module.css";

function Heropage() {
  return (
    <div>
      <Navbar />
      <Pagelist />
      <div className={styles.description}>
        <img
          src="../../images/cooking-2.png"
          alt="food-banner"
          className={styles.foodbanner}
        />
        <img src="../../images/food-1.png" />
        <img src="../../images/food-1.png" />
        <img src="../../images/food-1.png" />
        <img src="../../images/food-1.png" />
        <img src="../../images/food-1.png" />
      </div>
      <Footer />
    </div>
  );
}

export default Heropage;
