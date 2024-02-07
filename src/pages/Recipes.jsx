import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagelist from "../components/Pagelist";
import RecipeDisplay from "../components/RecipeDisplay";
import styles from "./Recipes.module.css";

function Recipes() {
  function handleSubmit(e) {
    e.preventDefault();
  }
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
            <div className={styles.searchConatiner}>
              <form
                onSubmit={handleSubmit}
                className={styles.formSearchContainer}
              >
                <ul className={styles.cuisinesList}>
                  <li className={styles.cuisineItem}>
                    <span>Eastern European</span>
                    <input
                      type="checkbox"
                      className={styles.checkboxCuisines}
                    />
                  </li>
                </ul>
                <input
                  type="search"
                  placeholder="hmm..."
                  className={styles.inputContainer}
                />
                <div>
                  <span>Max calories per portion?</span>
                  <input type="search" placeholder="ex:300" />
                </div>
                <div>
                  <span>Min protein per portion?</span>
                  <input type="search" placeholder="ex:10" />
                </div>
                <div>
                  <span>Intolerances?</span>
                  <input type="text" placeholder="gluten, dairy, nuts" />
                </div>
                <div>
                  <span>Any special request?</span>
                  <select>
                    <option> - </option>
                    <option>Low fat</option>
                    <option>Low sodium</option>
                    <option>Rich in fiber</option>
                  </select>
                </div>
              </form>
              <div className={styles.containerRecipesDisplay}>
                <p>list of recipes</p>
              </div>
            </div>
          </div>
          <RecipeDisplay />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recipes;
