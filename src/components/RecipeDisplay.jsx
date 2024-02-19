import { useEffect, useState } from "react";
import styles from "./RecipeDisplay.module.css";
import { PropTypes } from "prop-types";
import Spinner from "./Spinner";

function RecipeDisplay({ onClickedRecipe }) {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [cookingSteps, setCookingSteps] = useState([]);
  const [recipeImage, setRecipeImage] = useState("");
  const [recipeTitle, setRecipeTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    function () {
      async function recipeDisplayIngredients() {
        if (onClickedRecipe) {
          try {
            setIsLoading(true);
            const res = await fetch(
              `https://api.spoonacular.com/recipes/${onClickedRecipe}/information?apiKey=39e199267dc14acc94501a7d7793d279`
            );
            if (!res.ok) {
              throw new Error("Failed to fetch recipes");
            }
            const data = await res.json();
            setIngredientsList(data.extendedIngredients);
            setCookingSteps(data.analyzedInstructions[0].steps);
            setRecipeImage(data.image);
            setRecipeTitle(data.title);
          } catch (err) {
            console.log("Error!", err);
          } finally {
            setIsLoading(false);
          }
        }
      }

      recipeDisplayIngredients();
    },
    [onClickedRecipe]
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.displayConatiner}>
      <div className={styles.displayImageContainer}>
        <img src={recipeImage} alt="recipe-image" />
      </div>
      <div className={styles.displayConatinerLeftAndRight}>
        <div className={styles.displayContainerLeft}>
          <div className={styles.ingredientsContainer}>
            <ul className={styles.ingredientsContainerList}>
              <h3>{recipeTitle}</h3>
              {ingredientsList.map((ingredient) => (
                <li key={ingredient.id}>
                  <p>{ingredient.original}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.displayContainerRight}>
          <div className={styles.cookingStepsContainer}>
            <ul className={styles.cookingStepsList}>
              {cookingSteps.map((steps) => (
                <li key={steps.number}>
                  <h4>Step: {steps.number}</h4>
                  <p>{steps.step}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
RecipeDisplay.propTypes = {
  onClickedRecipe: PropTypes.number,
};

export default RecipeDisplay;
