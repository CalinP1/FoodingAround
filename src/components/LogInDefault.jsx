import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import PersonIcon from "@mui/icons-material/Person";
function LogInDefault() {
  return (
    <NavLink to="/login" className="navlink">
      <div className={styles.accounticon}>
        <span>Log in</span>
        <PersonIcon fontSize="large" />
      </div>
    </NavLink>
  );
}

export default LogInDefault;
