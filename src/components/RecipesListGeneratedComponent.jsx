import { useEffect, useState } from "react";
import styles from "./RecipesListGeneratedComponent.module.css";
import { PropTypes } from "prop-types";

function RecipesListGeneratedComponent({ linkState }) {
  const [recipesObject, setRecipesObject] = useState([]);

  useEffect(
    function () {
      async function fetchRecipes() {
        try {
          const res = await fetch(`${linkState}`);
          if (!res.ok) {
            throw new Error("Failed to fetch recipes");
          }
          const data = await res.json();
          console.log(data);
          setRecipesObject(data.results);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchRecipes();
    },
    [linkState]
  );
  return (
    <div className={styles.containerRecipesDisplay}>
      <ul className={styles.listComponent}>
        {Object.values(recipesObject).map((recipe) => (
          <li key={recipe.id} onClick={() => console.log(`hei ${recipe.id}`)}>
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
RecipesListGeneratedComponent.propTypes = {
  linkState: PropTypes.string,
};
export default RecipesListGeneratedComponent;
