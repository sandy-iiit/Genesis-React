import classes from "./ViewQueries.module.css";
import {useEffect, useState} from "react";
import axiosConfiguration from "../../config/axiosConfiguration";
import {useSelector} from "react-redux";

function ViewAnsweredQueries(){

    const [queries,setQueries]=useState([])
    const userId=useSelector((state)=>state.auth.id)
    useEffect(()=>{
        const b={
            id:userId
        }
        axiosConfiguration.post("/answered-queries",b).then((q)=>{
            console.log(q)
            setQueries([...queries,...q.data])
        })


    },[])




    return(
        <>
            <div className={classes.container2}>
                <div className={classes.headingWrap}><p className={classes.heading}>Your Queries</p></div>

                {queries.map((query,index)=>(
                    <div className={classes.items2}>

                        <div className={`${classes.innerItem} ${classes.Q}`}>
                            {query.question}
                        </div>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', paddingTop: '7px' }}>
                            <p style={{ fontSize: '14px', color: '#3e54ac' }}>Asked on: {query.askDate}</p>
                            <p style={{ fontSize: '14px', color: '#3e54ac' }}>Answered on: {query.answerDate}</p>
                        </div>

                        <div className={`${classes.innerItem} ${classes.A}`}>
                            {query.answer}
                        </div>


                    </div>
                ))}

            </div>

        </>
    )

}

export default ViewAnsweredQueries
