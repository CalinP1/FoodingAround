import { useEffect, useState } from "react";
import styles from "./RecipesListGeneratedComponent.module.css";
import { PropTypes } from "prop-types";
import { useRecipe } from "../Context/RecipesContext";

function RecipesListGeneratedComponent() {
  const { linkConstruct, setClickedRecipe, setWrongSearch } = useRecipe();
  const [recipesObject, setRecipesObject] = useState([]);
  const [invalidSearch, setInvalidSearch] = useState(false);

  useEffect(
    function () {
      async function fetchRecipes() {
        try {
          const res = await fetch(`${linkConstruct}`);
          if (!res.ok) {
            throw new Error("Failed to fetch recipes");
          }
          const data = await res.json();
          if (data.results.length === 0) {
            setInvalidSearch(true);
            setWrongSearch(true);
          } else {
            setRecipesObject(data.results);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchRecipes();
    },
    [linkConstruct, setWrongSearch]
  );
  if (invalidSearch) {
    return (
      <div className={styles.containerNoRecipesDisplay}>
        <p>No recipes found. Please refine your search criteria!</p>
      </div>
    );
  }

  return (
    <div className={styles.containerRecipesDisplay}>
      <ul className={styles.listComponent}>
        {Object.values(recipesObject).map((recipe) => (
          <li key={recipe.id} onClick={() => setClickedRecipe(recipe.id)}>
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
RecipesListGeneratedComponent.propTypes = {
  linkState: PropTypes.string,
  setClickedRecipe: PropTypes.func,
  setWrongSearch: PropTypes.func,
};
export default RecipesListGeneratedComponent;
