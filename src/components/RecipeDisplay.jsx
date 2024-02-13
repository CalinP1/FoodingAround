import { useEffect, useState } from "react";
import styles from "./RecipeDisplay.module.css";
import { PropTypes } from "prop-types";

function RecipeDisplay({ onClickedRecipe }) {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [cookingSteps, setCookingSteps] = useState([]);
  useEffect(
    function () {
      async function recipeDisplayIngredients() {
        if (onClickedRecipe) {
          try {
            const res = await fetch(
              `https://api.spoonacular.com/recipes/${onClickedRecipe}/information?apiKey=39e199267dc14acc94501a7d7793d279`
            );
            if (!res.ok) {
              throw new Error("Failed to fetch recipes");
            }
            const data = await res.json();
            console.log(data);
          } catch (err) {
            console.log("Error!", err);
          }
        }
      }

      recipeDisplayIngredients();
    },
    [onClickedRecipe]
  );
  return (
    <div className={styles.displayConatiner}>
      <div className={styles.displayImageContainer}>
        <img src="../../images/food-1.png" alt="recipe-image" />
      </div>
      <div className={styles.displayConatinerLeftAndRight}>
        <div className={styles.displayContainerLeft}>
          <div className={styles.ingredientsContainer}>
            <p>{onClickedRecipe}</p>
          </div>
        </div>
        <div className={styles.displayContainerRight}></div>
      </div>
    </div>
  );
}
RecipeDisplay.propTypes = {
  onClickedRecipe: PropTypes.number,
};

export default RecipeDisplay;
