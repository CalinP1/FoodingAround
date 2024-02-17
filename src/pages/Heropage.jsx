import Navbar from "../components/Navbar";
import Pagelist from "../components/Pagelist";
import Footer from "../components/Footer";
import styles from "./Heropage.module.css";

function Heropage() {
  return (
    <div className={styles.heroBody}>
      <Navbar />
      <Pagelist />
      <div className={styles.description}>
        <div className={styles.foodbanner}>
          <h1 className={styles.foodmoto}>
            Do it yourself or find someone to do it!
          </h1>
        </div>
        <div className={styles.herodescription}>
          <h2 className={styles.herodescriptiontext}>
            Some text to understand what the app does and what are the benefits
            of making an account
          </h2>
        </div>
        <h3 className={styles.titleForLogIn}>
          Best way of enjoing FoodingAround? Create an account!
        </h3>
        <div className={styles.loginGuidanceHeroContainer}>
          <div className={styles.loginGuidanceHero}>
            <img
              src="../../images/create-an-account-hero.png"
              alt="log-in-exemple"
              className={styles.logInHeroImage}
            />
            <p className={styles.logInExplanation}>
              Here is an explanation on how your experience using this site will
              look if you create an account
            </p>
          </div>
          <div className={styles.loginGuidanceHero}>
            <p className={styles.logInExplanation}>
              Anothere example of text.. Here is an explanation on how your
              experience using this site will look if you create an account
            </p>
            <img
              src="../../images/food-1.png"
              alt="log-in-exemple"
              className={styles.logInHeroImage}
            />
          </div>
          <div className={styles.loginGuidanceHero}>
            <img
              src="../../images/food-1.png"
              alt="log-in-exemple"
              className={styles.logInHeroImage}
            />
            <p className={styles.logInExplanation}>
              Aaaaaand anothere one... Here is an explanation on how your
              experience using this site will look if you create an account
            </p>
          </div>
        </div>
      </div>
      <Footer className={styles.footer} />
    </div>
  );
}

export default Heropage;
