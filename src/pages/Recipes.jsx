import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagelist from "../components/Pagelist";
import styles from "./Recipes.module.css";

function Recipes() {
  return (
    <div className={styles.recipesBody}>
      <Navbar />
      <Pagelist />
      <h1>Find the perfect meal to cook</h1>
      <h2>
        You can search by cuisine, ingredients, nutrients... or find your new
        favourite dish by getting a random recipe
      </h2>

      <Footer />
    </div>
  );
}

export default Recipes;
