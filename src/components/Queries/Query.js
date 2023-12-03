import {useFormik} from "formik";
import classes from "./Query.module.css"
import {useSelector} from "react-redux";
import axiosConfiguration from "../../config/axiosConfiguration";
import {useNavigate} from "react-router-dom";
function Query(props){
    const user=useSelector((state)=>state.auth)
    const navigate=useNavigate()
    function onSubmit(values,actions) {
        const res=axiosConfiguration.post("/write-query",values)
        navigate("/profile")
    }

    const {values,errors,touched,handleBlur,handleChange,handleSubmit,getFieldProps}=useFormik({
        initialValues:{
            question:"",
            userId:user.id
        },
        onSubmit
    })

    return(
        <>
            <img className={classes.wrap} src={props.image} alt={'img'}></img>
                <form onSubmit={handleSubmit} className={classes.form}>

                    <div className={classes.text}>
                        Write your query in the given text box.
                    </div>
                    <textarea id={"question"} onChange={handleChange} name="question" className={classes.query}></textarea>
                    <button className={classes.btn} type="submit">Post Query</button>
                </form>
        </>
    )
}

export default Query
