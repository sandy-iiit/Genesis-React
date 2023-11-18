import {useFormik} from "formik";
import classes from "./Review.module.css"
import {useSelector} from "react-redux";
import axiosConfiguration from "../../config/axiosConfiguration";
import {useNavigate} from "react-router-dom";
function Review(props){
    const user=useSelector((state)=>state.auth)
    const navigate=useNavigate()
    function onSubmit(values,actions) {
        const res=axiosConfiguration.post("/drop-review",values)
        navigate("/profile")
    }

    const {values,errors,touched,handleBlur,handleChange,handleSubmit,getFieldProps}=useFormik({
        initialValues:{
            review:"",
            email:user.email,
            name:user.name
        },
        onSubmit
    })

    return(
        <>
            <img className={classes.wrap} src={props.image} alt={'img'}></img>
            <form onSubmit={handleSubmit} className={classes.form}>

                <div className={classes.text}>
                    Write your Review.
                </div>
                <textarea id={"review"} onChange={handleChange}  className={classes.query}></textarea>
                <button className={classes.btn} type="submit">Drop Review</button>
            </form>
        </>
    )
}

export default Review
