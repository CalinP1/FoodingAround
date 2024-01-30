import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagelist from "../components/Pagelist";
import WineComponent from "../components/WineComponent";
import styles from "./Wines.module.css";

function About() {
  return (
    <div>
      <Navbar />
      <Pagelist />
      <div className={styles.wineMainContainer}>
        <h2 className={styles.wineHeader}>
          Find the perfect wine pairing for your meal!
        </h2>
        <form className={styles.wineFormContainer}>
          <h3 className={styles.wineFormHeader}>
            Search for a meal or a cuisine.
          </h3>
          <input
            type="search"
            placeholder="ex: chicken, steak, italian.."
            className={styles.wineFormInput}
            value=""
          />
          <button className={styles.wineFormButton}>search</button>
        </form>
        <div className={styles.wineComponentContainer}>
          <WineComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
