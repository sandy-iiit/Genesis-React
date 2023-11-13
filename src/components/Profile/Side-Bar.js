import classes from './Details.module.css'
import {useSelector} from "react-redux";
function SideBar(){
    const type=useSelector((state)=>state.auth.type)
    return <>
        <div className={classes.sideContainer}>
            <div className={classes.sideItem}>
                <a href="/my-details">
                    <button className={classes.det}>Details</button>
                </a>
            </div>
            {(type==="User") && <div className={classes.sideItem}>
                <a href="/my-details">
                    <button className={classes.det}>Ask Query</button>
                </a>
            </div>}
            {(type==="User") && <div className={classes.sideItem}>
                <a href="/my-details">
                    <button className={classes.det}>Write Review</button>
                </a>
            </div>}
            {(type==="User") && <div className={classes.sideItem}>
                <a href="/my-details">
                    <button className={classes.det}>Go To DashBoard</button>
                </a>
            </div>}

            {(type==="Admin" || type==="Agent") && <div className={classes.sideItem}>
                <a href="/answer-queries">
                    <button className={classes.det}>Answer Queries</button>
                </a>
            </div> }
            {(type==="Admin" || type==="Agent") &&<div className={classes.sideItem}>
                <a href="/answered-queries">
                    <button className={classes.det}>Your Answers</button>
                </a>
            </div>
            }
            {(type==="Admin" || type==="Agent") && <div className={classes.sideItem}>
                <a href="/reviews">
                    <button className={classes.det}>View Reviews</button>
                </a>
            </div>}
            {(type==="Admin" || type==="Agent") &&<div className={classes.sideItem}>
                <a href="/agentboard">
                    <button className={classes.det}> --> More</button>
                </a>
            </div>}


            <div className={classes.sideItem}>
                <a href="/settings">
                    <button className={classes.det}>Settings</button>
                </a>
            </div>
        </div>
    </>
}

export default SideBar
