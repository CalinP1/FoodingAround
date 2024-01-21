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
              <select>
                <option className={styles.searchOptions}>By Ingredients</option>
                <option className={styles.searchOptions}>By Nutrients</option>
              </select>
              <input
                className={styles.afterTheOptionInput}
                placeholder="ex: pizza, chicken, garlic..."
              ></input>
              <button className={styles.searchTheRecipeButton}>Search</button>
            </form>
            <button className={styles.randomRecipeButton}>
              Get a random recipe
            </button>
            <div className={styles.listRecipesByName}>
              <ul className={styles.recipeListAfterSearchForPreview}>
                <li className={styles.recipeItemForPreview}>
                  items after the search
                </li>
                <li className={styles.recipeItemForPreview}>
                  items after the search
                </li>
                <li className={styles.recipeItemForPreview}>
                  items after the search
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.displayConatiner}>
            <h3 className={styles.recipeDetails}>*Recipe Title*</h3>
            <p> Here is the recipe component!!!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recipes;
