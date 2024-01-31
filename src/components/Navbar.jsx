import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

import LogInDefault from "./LogInDefault";
function Navbar() {
  return (
    <div className={styles.navcontainer}>
      <nav className={styles.nav}>
        <ul>
          <div className={styles.logoTitleContainer}>
            <li className={styles.logo}>
              <NavLink to="/" className="navlink">
                <img
                  src="../../images/foodingaround-high-resolution-logo-white-transparent.png"
                  alt="logo-site"
                />
              </NavLink>
            </li>
            <li>
              <h1 className={styles.brandname}>FoodingAround</h1>
            </li>
          </div>
          <li className={styles.account}>
            <LogInDefault />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
