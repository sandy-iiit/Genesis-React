import classes from "../Reviews/ViewReviews.module.css";
import {useEffect, useState} from "react";
import axiosConfiguration from "../../config/axiosConfiguration";
import {useNavigate} from "react-router-dom";

function ViewReviews(){

    const [reviews,setReviews]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axiosConfiguration.get("/reviews").then((revs)=>{
            console.log(revs.data)
            setReviews([...reviews,...revs.data])

        })

    }, [])


    function handleClick(id,email) {
        const b={
            id:id,
            email:email
        }
        const del=axiosConfiguration.post("/deleteReview",b)
        console.log(del.data)
window.location.reload()
    }

    return(
        <>
            <div className={classes.container2}>
                { reviews.map((review,index)=>(
                    <div className={classes.items2}>

                        <div className={`${classes.innerItem} ${classes.Q}`}>
                            <div>Name: {review.name} </div>
                            <div> Email: {review.email}</div>
                        </div>
                        <div className={`${classes.innerItem} ${classes.A}`}>
                            Review: {review.review}
                        </div>

                    <div>
                    <button onClick={()=>{handleClick(review._id,review.email)}} className={classes.submitterrr}>
                    Delete
                    </button>
                    </div>
                    </div>
                    ))

                }
            </div>
        </>
    )
}

export default ViewReviews
