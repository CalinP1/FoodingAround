import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

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
              <sp className={styles.brandname}>FoodingAround</sp>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
