import { useReducer, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagelist from "../components/Pagelist";
import RecipeDisplay from "../components/RecipeDisplay";
import RecipesListGeneratedComponent from "../components/RecipesListGeneratedComponent";
import styles from "./Recipes.module.css";

const initialState = {
  ingredients: "",
  calories: "",
  specialRequest: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "ingredients": {
      return { ...state, ingredients: action.payload };
    }
    case "calories": {
      return { ...state, calories: action.payload };
    }
    case "specialRequest": {
      return { ...state, specialRequest: action.payload };
    }
    case "reset": {
      return initialState;
    }
    default:
      return state;
  }
}
const BASE_URL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=39e199267dc14acc94501a7d7793d279&number=50";

function Recipes() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [linkConstruct, setLinkConstruct] = useState(BASE_URL);
  const [submited, setSubmited] = useState(false);
  const { ingredients, calories, specialRequest } = state;
  const [clickedRecipe, setClickedRecipe] = useState();

  function createLink() {
    setLinkConstruct(BASE_URL);
    let newLink = BASE_URL;

    if (ingredients !== "") {
      newLink += `&query=${ingredients}`;
    }
    if (calories !== "") {
      newLink += `&maxCalories=${calories}`;
    }
    if (specialRequest !== "") {
      newLink += `&${specialRequest}`;
    }
    setLinkConstruct(newLink);
  }
  function handleSubmit(e) {
    setSubmited(true);
    e.preventDefault();
    createLink();
  }

  function handleSelectChange(e) {
    dispatch({ type: "specialRequest", payload: e.target.value });
  }
  function handleIngredientsChange(e) {
    dispatch({ type: "ingredients", payload: e.target.value });
  }
  function handleCaloriesChange(e) {
    dispatch({ type: "calories", payload: e.target.value });
  }
  function reset() {
    dispatch({ type: "reset" });
    setSubmited(false);
    setClickedRecipe(null);
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
              {submited && (
                <RecipesListGeneratedComponent
                  linkState={linkConstruct}
                  setClickedRecipe={setClickedRecipe}
                />
              )}
            </div>
          </div>
          <div className={styles.recipeDisplayContainer}>
            <RecipeDisplay
              onClickedRecipe={clickedRecipe}
              style={{ display: submited ? "block" : "none" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recipes;
