import classes from './Details.module.css'
function SideBar(){
    return <>
        <div className={classes.sideContainer}>
            <div className={classes.sideItem}>
                <a href="/my-details">
                    <button className={classes.det}>Details</button>
                </a>
            </div>

            <div className={classes.sideItem}>
                <a href="/answer-queries">
                    <button className={classes.det}>Answer Queries</button>
                </a>
            </div>
            <div className={classes.sideItem}>
                <a href="/answered-queries">
                    <button className={classes.det}>Your Answers</button>
                </a>
            </div>

            <div className={classes.sideItem}>
                <a href="/reviews">
                    <button className={classes.det}>View Reviews</button>
                </a>
            </div>
            <div className={classes.sideItem}>
                <a href="/agentboard">
                    <button className={classes.det}> --> More</button>
                </a>
            </div>


            <div className={classes.sideItem}>
                <a href="/settings">
                    <button className={classes.det}>Settings</button>
                </a>
            </div>
        </div>
    </>
}

export default SideBar
