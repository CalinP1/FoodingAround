import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagelist from "../components/Pagelist";
import styles from "./Wines.module.css";

function About() {
  return (
    <div>
      <Navbar />
      <Pagelist />
      <div className={styles.wineMainContainer}>
        <h2 className={styles.wineHeader}>
          You got the food ready? Now find the perfect wine pairing
        </h2>
        <form className={styles.wineFormContainer}>
          <h3>Search for a meal or a cuisine</h3>
          <input
            type="search"
            placeholder="ex: chicken, steak, italian.."
            value=""
          />
          <button className={styles.button}>search</button>
        </form>
        <div className={styles.wineComponentContainer}>
          DISPLAY HERE THE RESULTS (COMPONENT)
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
