import { useEffect, useState } from "react";
import styles from "./RecipesListGeneratedComponent.module.css";
import { PropTypes } from "prop-types";
import Spinner from "./Spinner";

function RecipesListGeneratedComponent({ linkState, setClickedRecipe }) {
  const [recipesObject, setRecipesObject] = useState([]);
  const [invalidSearch, setInvalidSearch] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      async function fetchRecipes() {
        try {
          const res = await fetch(`${linkState}`);
          if (!res.ok) {
            throw new Error("Failed to fetch recipes");
          }
          const data = await res.json();
          if (data.results.length === 0) {
            setInvalidSearch(true);
          } else {
            setRecipesObject(data.results);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      }
      fetchRecipes();
    },
    [linkState]
  );
  if (invalidSearch) {
    return (
      <div className={styles.containerNoRecipesDisplay}>
        <p>No recipes found. Please refine your search criteria!</p>
      </div>
    );
  }
  if (loading) {
    return <Spinner />;
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
};
export default RecipesListGeneratedComponent;
