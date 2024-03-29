import { NavLink } from "react-router-dom";
import styles from "./Pagelist.module.css";
function Pagelist() {
  return (
    <nav className={styles.secondnav}>
      <ul>
        <li>
          <NavLink to="/recipes" className="navlink">
            recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/wines" className="navlink">
            wines
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Pagelist;
