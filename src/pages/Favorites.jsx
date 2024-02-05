import { Outlet } from "react-router-dom";
import styles from "./Favorites.module.css";
import FavoritesNav from "../components/FavoritesNav";
function Favorites() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainLeft}>
        <FavoritesNav />
        <Outlet />
      </div>
      <div className={styles.mainRight}></div>
    </div>
  );
}

export default Favorites;
