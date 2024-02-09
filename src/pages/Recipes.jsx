import { useEffect, useReducer, useState } from "react";
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
      return { ...state, calories: `maxCalories${action.payload}` };
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
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=39e199267dc14acc94501a7d7793d279";

function Recipes() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [linkConstruct, setLinkConstruct] = useState(BASE_URL);

  const { ingredients, calories, specialRequest } = state;

  useEffect(() => {
    console.log(linkConstruct);
  }, [linkConstruct]);
  function createLink() {
    setLinkConstruct(BASE_URL);
    setLinkConstruct((prevLinkConstruct) => {
      return (
        prevLinkConstruct +
        "&" +
        `${state.ingredients}` +
        "&" +
        `${state.calories}` +
        "&" +
        `${state.specialRequest}`
      );
    });
  }
  function handleSubmit(e) {
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
              <button className={styles.buttonsRecipe} onClick={reset}>
                Reset
              </button>
            </div>
            <RecipesListGeneratedComponent />
          </div>

          <RecipeDisplay />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recipes;
