import styles from "./RecipeDisplay.module.css";
function RecipeDisplay() {
  return (
    <div className={styles.displayConatiner}>
      <div className={styles.displayImageContainer}>
        <img src="../../images/food-1.png" alt="recipe-image" />
      </div>
      <div className={styles.displayConatinerLeftAndRight}>
        <div className={styles.displayContainerLeft}>
          <p>text</p>
        </div>
        <div className={styles.displayContainerRight}></div>
      </div>
    </div>
  );
}

export default RecipeDisplay;
