import React, { useState } from "react";
import styles from "./Login.module.css";
import logoimage from "../../assets/images/log.svg";
import registerlogo from "../../assets/images/register.svg";
import axiosConfiguration from "../../config/axiosConfiguration";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authActions} from "../../store/authSlice";
// import companylogo from "../../assets/images/okoklogo-transformed.ico"
const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const navigate = useNavigate();
    const dispatch=useDispatch();
    async function onSubmit(values, actions) {
        console.log(values);
        try {
            const res = isSignIn ? await axiosConfiguration.post("/login", values)
                : await axiosConfiguration.post("/signup", values);
            console.log(res.data);
            if (res.data.msg) {
                alert(res.data.msg)
                // navigate('/')
            } else {

                const authUser = {
                    name: res.data.name,
                    email: res.data.email,
                    password: "",
                    age: res.data.age,
                    sex: res.data.sex,
                    address: res.data.address,
                    phone: res.data.phone,
                    id: res.data._id,
                    type: isSignIn ? values.type : res.data.type
                }
                dispatch(authActions.login(authUser))
                
                navigate("/");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, show error message, etc.
        }

    }


        const {values,errors,touched,handleBlur,handleChange,handleSubmit,getFieldProps}=useFormik({
            initialValues:{
                type:"",
                email:"",
                name:"",
                password:"",
                address:"",
                phone:"",
                age:"",
                sex:"",
            },
            onSubmit
        })


    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    const containerClass = isSignIn ? "" : styles["sign-up-mode"];



    const renderForm = isSignIn ? (
        <form onSubmit={handleSubmit} className={styles["sign-in-form"]}>
            <h2 className={styles.title}>Sign in</h2>
            <select
                id="type"
                {...getFieldProps('type')}
            >
                <option value="" disabled>
                    Select a role
                </option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Agent">Agent</option>
            </select>
            <div className={styles["input-field"]}>
                <i className={`fas fa-user ${styles.icon}`}></i>


                <input
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    id="email"
                    onChange={handleChange}
                    className={styles.input}
                />
            </div>
            <div className={styles["input-field"]}>
                <i className={`fas fa-lock ${styles.icon}`}></i>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    className={styles.input}
                />
            </div>
            <input
                type="submit"
                value="Login"
                className={`${styles.btn} ${styles.solid}`}
            />
        </form>
    ) : (
        <form onSubmit={handleSubmit}  className={styles["sign-up-form"]}>
            <h2 className={styles.title}>Sign up</h2>
            <div className={styles["input-field"]}>
                <i className={`fas fa-user ${styles.icon}`}></i>
                <input
                    type="text"
                    id={"name"}
                    onChange={handleChange}

                    placeholder="Username"
                    className={styles.input}
                />
            </div>
            <div className={styles["input-field"]}>
                <i className={`fas fa-envelope ${styles.icon}`}></i>
                <input
                    type="email"
                    id={"email"}
                    onChange={handleChange}
                    placeholder="Email"
                    className={styles.input}
                />
            </div>
            <div className={styles["input-field"]}>
                <i className={`fas fa-lock ${styles.icon}`}></i>
                <input
                    type="number"
                    min="5"
                    max="70"
                    onChange={handleChange}
                    id={"age"}
                    placeholder="Age"
                    className={styles.input}
                />
            </div>
            <div className={styles["input-field"]}>
                <i className={`fas fa-lock ${styles.icon}`}></i>
                <input
                    type="text"
                    id={"sex"}
                    onChange={handleChange}
                    placeholder="Sex"
                    className={styles.input}
                />
            </div>
            <div className={styles["input-field"]}>
                <i className={`fas fa-lock ${styles.icon}`}></i>
                <input
                    type="text"
                    id={"address"}
                    onChange={handleChange}
                    placeholder="Address"
                    className={styles.input}
                />
            </div>
            <div className={styles["input-field"]}>
                <i className={`fas fa-lock ${styles.icon}`}></i>
                <input
                    type="text"
                    id={"phone"}
                    onChange={handleChange}
                    placeholder="Phone"
                    className={styles.input}
                />
            </div>
            <div className={styles["input-field"]}>
                <i className={`fas fa-lock ${styles.icon}`}></i>
                <input
                    type="password"
                    id={"password"}
                    onChange={handleChange}
                    placeholder="Password"
                    className={styles.input}
                />
            </div>

            <input
                type="submit"
                onChange={handleChange}
                className={styles.btn}
                value="Sign up"

            />

        </form>

    );

    return (
        <div className={`${containerClass} ${styles.container}`}>
            <div className={styles["forms-container"]}>
                <div className={`${styles["signin-signup"]} ${containerClass}`}>
                    {renderForm}
                    {/*<p className={styles["social-text"]}>*/}
                    {/*    Or Sign {isSignIn ? "in" : "up"} with social platforms*/}
                    {/*</p>*/}
                    {/*<div className={styles["social-media"]}>*/}
                    {/*    <a href="#" className={`${styles["social-icon"]} ${styles.facebook}`}>*/}
                    {/*        <i className="fab fa-facebook-f"></i>*/}
                    {/*    </a>*/}
                    {/*    <a href="#" className={`${styles["social-icon"]} ${styles.twitter}`}>*/}
                    {/*        <i className="fab fa-twitter"></i>*/}
                    {/*    </a>*/}
                    {/*    <a href="#" className={`${styles["social-icon"]} ${styles.google}`}>*/}
                    {/*        <i className="fab fa-google"></i>*/}
                    {/*    </a>*/}
                    {/*    <a*/}
                    {/*        href="#"*/}
                    {/*        className={`${styles["social-icon"]} ${styles.linkedin}`}*/}
                    {/*    >*/}
                    {/*        <i className="fab fa-linkedin-in"></i>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
            </div>

            <div className={styles["panels-container"]}>

                <div className={`${styles["panel"]} ${styles["left-panel"]}`}>
                    <div className={styles["content"]}>
                        <h3>New here ?</h3>
                        <p>
                           Sign up to our website to explore the various range of insurances that suit your needs.
                        </p>
                        <button
                            className={`${styles.btn} ${styles.transparent}`}
                            onClick={toggleForm}
                        >
                            Sign up
                        </button>
                        <button
                            className={`${styles.btn} ${styles.transparent}`}
                            onClick={()=>{navigate("/agentSignUp")}}
                        >
                             Wanna Join Us
                        </button>

                    </div>
                    <img src={logoimage} className={styles.image} alt="" />
                </div>

                <div className={`${styles["panel"]} ${styles["right-panel"]}`}>
                    <div className={styles["content"]}>
                        <h3>One of us ?</h3>
                        <p>
                            Sign In and enjoy our insurance services.
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
    );
};

export default Login;
