import classes from './Details.module.css'
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
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
                <NavLink to={"/askQuery"}>
                    <button className={classes.det}>Ask Query</button>
                </NavLink>
            </div>}
            {(type==="User") && <div className={classes.sideItem}>
                <NavLink to={"/viewQueries"}>
                    <button className={classes.det}>My Queries</button>
                </NavLink>
            </div>}
            {(type==="User") && <div className={classes.sideItem}>
                <NavLink to={"/dropReview"}>
                    <button className={classes.det}>Write Review</button>
                </NavLink>
            </div>}
            {(type==="User") && <div className={classes.sideItem}>
                <NavLink to={"/userApplications"}>
                    <button className={classes.det}>My Applications</button>
                </NavLink>
            </div>}

            {(type==="Admin" || type==="Agent") && <div className={classes.sideItem}>
                <NavLink to={"/answerQueries"}>
                    <button className={classes.det}>Answer Queries</button>
                </NavLink>
            </div> }
            {(type==="Admin" || type==="Agent") &&<div className={classes.sideItem}>
                <NavLink to={"/answeredQueries"}>
                    <button className={classes.det}>Your Answers</button>
                </NavLink>
            </div>
            }
            {(type==="Admin" || type==="Agent") && <div className={classes.sideItem}>
                <NavLink to={"/viewReviews"}>
                    <button className={classes.det}>View Reviews</button>
                </NavLink>
            </div>}
            {(type==="Admin" || type==="Agent") &&<div className={classes.sideItem}>
                <NavLink to="/dashBoard">
                    <button className={classes.det}> --> More</button>
                </NavLink>
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
