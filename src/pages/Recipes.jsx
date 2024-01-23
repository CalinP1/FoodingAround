import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagelist from "../components/Pagelist";
import styles from "./Recipes.module.css";

function Recipes() {
  return (
    <div>
      <Navbar />
      <Pagelist />
      <div className={styles.recipesBody}>
        <h1 className={styles.recipesFirstHeader}>
          Find the perfect meal to cook
        </h1>
        <h2 className={styles.recipesSecondHeader}>
          You can search by cuisine, ingredients, nutrients... or find your new
          favourite dish by getting a random recipe
        </h2>
        <div className={styles.SearchAndDisplayContainer}>
          <div className={styles.searchConatiner}>
            <form className={styles.searchRecipeForm}>
              <h3>*Search component Title*</h3>
              <p>search component</p>
            </form>
          </div>
          <div className={styles.displayConatiner}>
            <div className={styles.displayImageContainer}>
              <img src="../../images/food-1.png" alt="recipe-image" />
            </div>
            <div className={styles.displayConatinerLeftAndRight}>
              <div className={styles.displayContainerLeft}>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
                <p className={styles.displayContainerLeftContent}>text</p>
              </div>
              <div className={styles.displayContainerRight}>
                Display container right
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recipes;
