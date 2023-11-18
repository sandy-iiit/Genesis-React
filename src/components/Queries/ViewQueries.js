import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axiosConfiguration from "../../config/axiosConfiguration";
import classes from "./ViewQueries.module.css"
function ViewQueries(){

    const userId=useSelector((state)=>state.auth.id)
    const [queries,setQueries]=useState([])
    useEffect(()=>{
        async function getQueries() {
            const b={userId:userId}
            const res = await axiosConfiguration.post("/my-queries",b)
            const qs=res.data
            console.log("Queries array:")
            console.log(res)
            setQueries([...queries,...qs])
        }

        getQueries().then(r => {
            console.log(r)})
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

export default ViewQueries

