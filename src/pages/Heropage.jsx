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
          <h1 className={styles.foodmoto}>Grab a fork and pop the cork!</h1>
        </div>
        <div className={styles.herodescription}>
          <h2 className={styles.herodescriptiontext}>
            Whether you are a cooking enthusiast or a wine connoisseur,
            FoodinAround is your go-to destination for culinary inspiration.
            Dive into a world of delicious possibilities with our step-by-step
            recipes and seamless wine pairing suggestions.
          </h2>
        </div>
        <h3 className={styles.titleForLogIn}>
          Discover the ultimate culinary experience with FoodinAround!
        </h3>
        <div className={styles.loginGuidanceHeroContainer}>
          <div className={styles.loginGuidanceHero}>
            <img
              src="../../images/Recipe-1.jpg"
              alt="recipe-search-list"
              className={styles.logInHeroImage}
            />
            <p className={styles.logInExplanation}>
              On the Recipes page, explore a vast array of mouthwatering dishes
              from around the world. Simply enter your desired ingredients or
              cuisine preferences, and let our intuitive search engine guide you
              to the perfect recipe.
            </p>
          </div>
          <div className={styles.loginGuidanceHero}>
            <p className={styles.logInExplanation}>
              Each step-by-step guide ensures that even novice chefs can create
              restaurant-quality meals in the comfort of their own kitchen.
            </p>
            <img
              src="../../images/Recipe-2.jpg"
              alt="recipe-instructions-ingredients"
              className={styles.logInHeroImage}
            />
          </div>
          <div className={styles.loginGuidanceHero}>
            <img
              src="../../images/Wine-1.jpg"
              alt="wine-pairing"
              className={styles.logInHeroImage}
            />
            <p className={styles.logInExplanation}>
              But the journey does not end there! Head over to our Wine Pairing
              page to elevate your dining experience. Explore expertly curated
              wine suggestions tailored to complement your chosen dish. From
              bold reds to crisp whites, we have got you covered with the
              perfect wine pairing for every occasion.
            </p>
          </div>
          <div className={styles.loginGuidanceHero}>
            <div className={styles.credentials}>
              <p>
                FoodinAround relies on the Spoonacular API to bring you an array
                of recipes and wine pairings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer className={styles.footer} />
    </div>
  );
}

export default Heropage;
