import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import PersonIcon from "@mui/icons-material/Person";
function Navbar() {
  return (
    <div className={styles.navcontainer}>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.logo}>
            <NavLink to="/" className="navlink">
              <img src="../../images/logo-no-background - just-logo.png" />
            </NavLink>
          </li>
          <li>
            <p>FoodingAround</p>
          </li>
          <li className={styles.account}>
            <NavLink to="/login" className="navlink">
              <div className={styles.accounticon}>
                <span>Log in</span>
                <PersonIcon fontSize="large" />
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
