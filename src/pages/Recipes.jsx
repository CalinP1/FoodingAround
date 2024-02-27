import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagelist from "../components/Pagelist";
import RecipeDisplay from "../components/RecipeDisplay";
import RecipesListGeneratedComponent from "../components/RecipesListGeneratedComponent";
import styles from "./Recipes.module.css";
import { useRecipe } from "../Context/RecipesContext";

function Recipes() {
  const {
    handleSubmit,
    ingredients,
    handleIngredientsChange,
    calories,
    handleCaloriesChange,
    specialRequest,
    handleSelectChange,
    reset,
    submited,
    wrongSearch,
    clickedRecipe,
  } = useRecipe();
  return (
    <div>
      <Navbar />
      <Pagelist />
      <div className={styles.recipesBody}>
        <h1 className={styles.recipesFirstHeader}>
          Find the perfect meal to cook
        </h1>
        <h2 className={styles.recipesSecondHeader}>
          You can search by ingredients, nutrients and calories
        </h2>
        <div className={styles.SearchAndDisplayContainer}>
          <div className={styles.searchConatiner}>
            <form
              onSubmit={handleSubmit}
              className={styles.formSearchContainer}
            >
              <div className={styles.descriptionsContainer}>
                <div className={styles.baseSearch}>
                  <span>Search based on ingredients</span>
                  <input
                    type="search"
                    placeholder="hmm..."
                    value={ingredients}
                    onChange={handleIngredientsChange}
                  />
                </div>
                <div className={styles.baseSearch}>
                  <span>Max calories per portion?</span>
                  <input
                    type="search"
                    placeholder="ex:300"
                    value={calories}
                    onChange={handleCaloriesChange}
                  />
                </div>
                <div className={styles.baseSearch}>
                  <span>Any special request?</span>
                  <select value={specialRequest} onChange={handleSelectChange}>
                    <option value=""> </option>
                    <option value={"minProtein=40"}>High-protein</option>
                    <option value={"maxFat=3"}>Low fat</option>
                    <option value={"maxSodium=35"}>Low sodium</option>
                    <option value={"minFiber=10"}>Rich in fiber</option>
                  </select>
                </div>
                <button type="submit" className={styles.buttonsRecipe}>
                  Search
                </button>
              </div>
            </form>
            <div className={styles.buttonsContainer}>
              <button
                className={styles.buttonsRecipe}
                onClick={reset}
                style={{ display: submited ? "block" : "none" }}
              >
                Reset
              </button>
            </div>
            <div
              className={styles.recipeListGeneratorContainer}
              style={{ display: submited ? "block" : "none" }}
            >
              {submited && !wrongSearch && <RecipesListGeneratedComponent />}
              {submited && wrongSearch && (
                <div className={styles.containerNoRecipesDisplay}>
                  <p>No recipes found. Please refine your search criteria!</p>
                </div>
              )}
            </div>
          </div>
          {!wrongSearch && (
            <div
              className={styles.recipeDisplayContainer}
              style={{ display: clickedRecipe ? "block" : "none" }}
            >
              <RecipeDisplay />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recipes;
