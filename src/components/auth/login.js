import React, { useState } from "react";
import styles from "./login.module.css";
import logoimage from "../../assets/images/log.svg";
import registerlogo from "../../assets/images/register.svg";
import companylogo from "../../assets/images/okoklogo-transformed.ico"
import NavBar from "../NavBar";
import Footer from "../Assets/Footer/Footer";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const containerClass = isSignIn ? "" : styles["sign-up-mode"];

  const renderForm = isSignIn ? (
    <form action="#" className={styles["sign-in-form"]}>
      <h2 className={styles.title}>Sign in</h2>
      <div className={styles["input-field"]}>
        <i className={`fas fa-user ${styles.icon}`}></i>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
        />
      </div>
      <div className={styles["input-field"]}>
        <i className={`fas fa-lock ${styles.icon}`}></i>
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />
      </div>
      <input
        type="submit"
        value="Login"
        onClick={toggleForm}
        className={`${styles.btn} ${styles.solid}`}
      />
         <button className={styles.btn}>
                <a href='/employeesignup'>Wanna Join us</a>
              </button>
    </form>
  ) : (
    <form action="#" className={styles["sign-up-form"]}>
      <h2 className={styles.title}>Sign up</h2>
      <div className={styles["input-field"]}>
        <i className={`fas fa-user ${styles.icon}`}></i>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
        />
      </div>
      <div className={styles["input-field"]}>
        <i className={`fas fa-envelope ${styles.icon}`}></i>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
        />
      </div>
      <div className={styles["input-field"]}>
        <i className={`fas fa-lock ${styles.icon}`}></i>
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />
      </div>
      <div className={styles["input-field"]}>
        <i className={`fas fa-lock ${styles.icon}`}></i>
        <input
          type="password"
          placeholder="Confirm Password"
          className={styles.input}
        />
      </div>
      <input
        type="submit"
        className={styles.btn}
        value="Sign up"
        onClick={toggleForm}
      />
         <button className={styles.btn}>
                <a href='/employeesignup'>Wanna Join us</a>
              </button>
    </form>

  );

  return (
    <>
      <NavBar />

      <div className={`${containerClass} ${styles.container}`}>
        <div className={styles["forms-container"]}>
          <div className={`${styles["signin-signup"]} ${containerClass}`}>
            {renderForm}
            <p className={styles["social-text"]} style={{ textAlign: "center" }}>
              Or Sign {isSignIn ? "in" : "up"} with social platforms
            </p>
            <div className={styles["social-media"]}>
              <a href="facebook.com" className={`${styles["social-icon"]} ${styles.facebook}`}>
                <i className="fa fa-facebook"></i>
              </a>
              <a href="twitter.com" className={`${styles["social-icon"]} ${styles.twitter}`}>
                <i className="fa fa-twitter"></i>
              </a>
              <a href="google.com" className={`${styles["social-icon"]} ${styles.google}`}>
                <i className="fa fa-google"></i>
              </a>
              <a
                href="linked.in"
                className={`${styles["social-icon"]} ${styles.linkedin}`}
              >
                <i className="fa fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles["panels-container"]}>

          <div className={`${styles["panel"]} ${styles["left-panel"]}`}>
            <div className={styles["content"]}>
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className={`${styles.btn} ${styles.transparent}`}
                onClick={toggleForm}
              >
                Sign up
              </button>
              <button className={styles.btn} style={{zIndex:'3'}}>
                <a href='/employeesignup'>Wanna Join us</a>
              </button>
            </div>
            <img src={logoimage} className={styles.image} alt="" />
          </div>

          <div className={`${styles["panel"]} ${styles["right-panel"]}`}>
            <div className={styles["content"]}>
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className={`${styles.btn} ${styles.transparent}`}
                onClick={toggleForm}
              >
                Sign in
              </button>
            </div>
            <img src={registerlogo} className={styles.image} alt="" />
          </div>

        </div>
      </div>
      <Footer />
    </>
  );

};

export default Login;
