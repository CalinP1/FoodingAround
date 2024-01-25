import styles from "./RecipeSearch.module.css";
function RecipeSearch() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  // const cuisineList = [
  //   "African",
  //   "Asian",
  //   "American",
  //   "British",
  //   "Cajun",
  //   "Caribbean",
  //   "Chinese",
  //   "Eastern European",
  //   "European",
  //   "French",
  //   "German",
  //   "Greek",
  //   "Indian",
  //   "Irish",
  //   "Italian",
  //   "Japanese",
  //   "Jewish",
  //   "Korean",
  //   "Latin American",
  //   "Mediterranean",
  //   "Mexican",
  //   "Middle eastern",
  //   "Nordic",
  //   "Southern",
  //   "Spanish",
  //   "Thai",
  //   "Vietnamese",
  // ];

  return (
    <div className={styles.searchConatiner}>
      <form onSubmit={handleSubmit} className={styles.formSearchContainer}>
        <ul className={styles.cuisinesList}>
          <li className={styles.cuisineItem}>
            <span>Eastern European</span>
            <input type="checkbox" className={styles.checkboxCuisines} />
          </li>
          <li className={styles.cuisineItem}>
            <span>Middle eastern</span>
            <input type="checkbox" className={styles.checkboxCuisines} />
          </li>
          <li className={styles.cuisineItem}>
            <span>Middle eastern</span>
            <input type="checkbox" className={styles.checkboxCuisines} />
          </li>
          <li className={styles.cuisineItem}>
            <span>Middle eastern</span>
            <input type="checkbox" className={styles.checkboxCuisines} />
          </li>

          <li className={styles.cuisineItem}>
            <span>Middle eastern</span>
            <input type="checkbox" className={styles.checkboxCuisines} />
          </li>

          <li className={styles.cuisineItem}>
            <span>Middle eastern</span>
            <input type="checkbox" className={styles.checkboxCuisines} />
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
  );
}

export default RecipeSearch;
