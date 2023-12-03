import classes from "./ViewQueries.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axiosConfiguration from "../../config/axiosConfiguration";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";

function AnswerQueries() {
    const user = useSelector((state) => state.auth);
    const [queries, setQueries] = useState([]);
    const navigate=useNavigate();
    const [ans,setAnswer]=useState("")
    useEffect(() => {
        async function getQueries() {
            const res = await axiosConfiguration.get("/answer-queries");
            const qs = res.data;
            console.log("Queries array:");
            console.log(res);
            setQueries([...queries, ...qs]);
        }

        getQueries().then((r) => {
            console.log(r);
        });
    }, []);

     function postAnswer(id) {
         console.log(id)
         const link = `queries/${id}`;
         const values={
                     answer:ans,
                     name:user.name,
                     queryId:id,
                     userId:user.id,
                 }
         console.log(values)
        const res = axiosConfiguration.post(link,values)
        console.log(res)
        // navigate("/answerQueries")
        window.location.reload()
    }

    // const {values,errors,touched,handleBlur,handleChange,handleSubmit,getFieldProps}=useFormik({
    //     initialValues:{
    //         answer:"",
    //         userId:user._id,
    //         queryId:""
    //     },
    //     onSubmit
    // })

    function handleChange(A) {
         setAnswer(A)
    }

    function handleClick(id) {
        const b={id:id}
        const del=axiosConfiguration.post("/deleteQuery",b)
        console.log(del)
        // navigate("/answerQueries")
        window.location.reload()
    }

    return (
        <>


            <div className={classes.container2}>
                <div className={classes.headingWrap}>
                    <p className={classes.heading}>Your Queries</p>
                </div>
                {queries.map((query, index) => (
                    <div className={classes.items2} key={index}>
                        <div className={`${classes.innerItem} ${classes.Q}`}>{query.question}</div>

                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                            <p style={{ fontSize: '15px', color: '#3e54ac' }}>Asked on: {query.askDate}</p>
                            <p style={{ fontSize: '15px', color: '#3e54ac' }}>Answered on: {query.answerDate}</p>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
                            <div className={classes.ansblock}>
                                <input id={"queryId"} style={{ display: 'none' }} value={query._id}></input>

                                {query.status === 'Answered' ? (
                                    <span className={`${classes.innerItem} ${classes.A}`}>{query.answer}</span>
                                ) : (
                                    <>
                                        <textarea onChange={(e)=>handleChange(e.target.value)} id={"answer"} className={classes.ansss} name="answer"></textarea>
                                        <button value={query._id} className={classes.submitterrr} onClick={()=>postAnswer(query._id)}>
                                            Answer
                                        </button>
                                    </>
                                )}
                            </div>
                            <div>
                                <button onClick={()=>{handleClick(query._id)}} className={classes.submitterrr}>
                                    Delete
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
}

export default AnswerQueries;
