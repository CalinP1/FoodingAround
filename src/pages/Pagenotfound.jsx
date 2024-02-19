import styles from "./Pagenotfound.module.css";
import { NavLink } from "react-router-dom";
function Pagenotfound() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <p>404! PAGE NOT FOUND 😟</p>
        <NavLink to="/" className="navlink">
          <button>Go back to the main page!</button>
        </NavLink>
      </div>
    </div>
  );
}
export default Pagenotfound;
