import classes from './Details.module.css';
import {useEffect} from "react";
import {useSelector} from "react-redux";

function Details(){
    const user=useSelector((state)=>state.auth)
    useEffect(() => {
        document.body.classList.add(classes.specialPageBody);

        return () => {
            document.body.classList.remove(classes.specialPageBody);
        };
    }, []);
    return (<>

        <div className={classes.resdivv}>


            <div className={classes.divdetailbox}>
                <form  className={classes.detailBox} action="/updatedetails" method="post">
                    <p style={{textAlign:"center"}}></p>

                        <div className={classes.detailItem}>
                            <p className={classes.label}>Name</p>  <input value={user.name} className={classes.input} name="name"
                                                                  ></input>
                        </div>
                    <div className={classes.detailItem}>
                            <p className={classes.label}>Email</p>   <input value={user.email} className={classes.input} name="email"
                                                                    ></input>
                        </div>
                    <div className={classes.detailItem}>
                            <p className={classes.label}>Age</p>   <input value={user.age} className={classes.input} type="number" name="age"
                                                                  ></input>
                        </div>
                    <div className={classes.detailItem}>
                            <p className={classes.label}>Sex</p>  <input className={classes.input} value={user.sex} disabled/>
                        </div>
                    <div className={classes.detailItem}>
                            <p className={classes.label}>Address</p>   <input value={user.address} className={`${classes.input} ${classes.address}`} name="address"
                                                                      ></input>
                        </div>
                    <div className={classes.detailItem}>
                            <p className={classes.label}>Phone</p>   <input value={user.phone} className={classes.input} type="number" name="phone"
                                                                    ></input>
                        </div>
                    <div className={`${classes.detailItem} ${classes.buttons}`}>
                            <button className={classes.btn1}>
                                Save
                            </button>

                          <a href="/change-password"> <button className={classes.btn2}>Change Password</button></a>


                        </div>
                </form>
            </div>
        </div>
        <div className={classes.heading}>
            <p style={{padding:'5px'}}>Your Profile</p>

        </div>
        <div style={{marginTop:"80%"}}></div>

    </>
    )
}

export default Details
