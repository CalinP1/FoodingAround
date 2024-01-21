import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "./Login.module.css";
function Login() {
  return (
    <div>
      <Navbar />
      <div className={styles.logInContainer}>
        <h1 className={styles.logInHeading}>Sign in</h1>
        <form className={styles.formContainer}>
          <input
            type="email"
            placeholder="Email"
            className={styles.inputLogin}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.inputLogin}
          />
          <button className={styles.logInButton}>Log In</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
