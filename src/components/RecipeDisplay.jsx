import { useEffect } from "react";
import styles from "./RecipeDisplay.module.css";
import { PropTypes } from "prop-types";

function RecipeDisplay({ onClickedRecipe }) {
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
      async function recipeDisplaySteps() {
        if (onClickedRecipe) {
          try {
            const res = await fetch(
              `https://api.spoonacular.com/recipes/${onClickedRecipe}/analyzedInstructions?apiKey=39e199267dc14acc94501a7d7793d279`
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
      recipeDisplaySteps();
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
          <p>{onClickedRecipe}</p>
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
