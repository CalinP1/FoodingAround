import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagelist from "../components/Pagelist";
import styles from "./Recipes.module.css";
import RecipeSearch from "../components/RecipeSearch";
import { Outlet } from "react-router-dom";

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
          You can search by cuisine, ingredients, nutrients and calories
        </h2>
        <div className={styles.SearchAndDisplayContainer}>
          <div className={styles.containerForSearch}>
            <RecipeSearch />
          </div>
          <div className={styles.displayConatiner}>
            <div className={styles.displayImageContainer}>
              <img src="../../images/food-1.png" alt="recipe-image" />
            </div>
            <div className={styles.displayConatinerLeftAndRight}>
              <div className={styles.displayContainerLeft}>
                <p>text</p>
              </div>

              <div className={styles.displayContainerRight}>
                Display container right
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recipes;
