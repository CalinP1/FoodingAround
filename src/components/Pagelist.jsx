import { NavLink } from "react-router-dom";
import styles from "./Pagelist.module.css";
function Pagelist() {
  return (
    <nav className={styles.secondnav}>
      <ul>
        <li>
          <NavLink to="/restaurants" className="navlink">
            restaurants
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipes" className="navlink">
            recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navlink">
            about
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Pagelist;
