import { createContext, useContext, useReducer, useState } from "react";
import { PropTypes } from "prop-types";
const RecipeContext = createContext();

function RecipeProvider({ children }) {
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const [linkConstruct, setLinkConstruct] = useState(BASE_URL);
  const [submited, setSubmited] = useState(false);
  const { ingredients, calories, specialRequest } = state;
  const [clickedRecipe, setClickedRecipe] = useState();
  const [wrongSearch, setWrongSearch] = useState(false);

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
    setWrongSearch(false);
  }
  return (
    <RecipeContext.Provider
      value={{
        state,
        dispatch,
        linkConstruct,
        setLinkConstruct,
        submited,
        setSubmited,
        clickedRecipe,
        setClickedRecipe,
        wrongSearch,
        setWrongSearch,
        handleSubmit,
        handleIngredientsChange,
        handleSelectChange,
        handleCaloriesChange,
        reset,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

function useRecipe() {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error("Context used outside the Provider!");
  }
  return context;
}
RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RecipeProvider, useRecipe };
