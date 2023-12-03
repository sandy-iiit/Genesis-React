import classes from './Details.module.css';
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useFormik} from "formik";
import axiosConfiguration from "../../config/axiosConfiguration";
import {useNavigate} from "react-router-dom";

function Details(){
    const user=useSelector((state)=>state.auth)
    console.log(user)
    const navigate=useNavigate()
    async function onSubmit() {
        const res =  axiosConfiguration.post("/updateDetails", values)
        console.log(res.data)
        window.location.reload()

    }

    const {values,errors,touched,handleBlur,handleChange,handleSubmit,getFieldProps,setValues}=useFormik({
        initialValues:{
            type:user.type,
            email:user.email,
            name:user.name,
            address:user.address,
            phone:user.phone,
            age:user.age,
            id:user.id

        },
        onSubmit
    })
    useEffect(() => {
        document.body.classList.add(classes.specialPageBody);

        return () => {
            document.body.classList.remove(classes.specialPageBody);
        };
    }, []);

    useEffect(() => {
        // Check if user data is available and values have changed
        if (user && values) {
            const newVals = {
                type: user.type,
                email: user.email,
                name: user.name,
                address: user.address,
                phone: user.phone,
                age: user.age,
                id:user.id
            };

            // Check if values are different to avoid triggering an infinite loop
            if (
                values.type !== newVals.type ||
                values.email !== newVals.email ||
                values.name !== newVals.name ||
                values.address !== newVals.address ||
                values.phone !== newVals.phone ||
                values.age !== newVals.age
            ) {
                // Use setValues from the useFormik hook
                setValues(newVals);
            }
        }
    }, [setValues, user]);



    return (<>

        <div className={classes.resdivv}>


            <div className={classes.divdetailbox}>
                <form onSubmit={handleSubmit}  className={classes.detailBox} >
                    <p style={{textAlign:"center"}}></p>

                        <div className={classes.detailItem}>
                            <p className={classes.label}>Name</p>  <input onChange={handleChange} id={"name"} value={values.name} className={classes.input}
                                                                  ></input>
                        </div>
                    <div className={classes.detailItem}>
                            <p className={classes.label}>Email</p>   <input onChange={handleChange} id={"email"} value={values.email} className={classes.input}
                                                                    ></input>
                        </div>
                    <div className={classes.detailItem}>
                            <p className={classes.label}>Age</p>   <input onChange={handleChange} id={"age"} value={values.age} className={classes.input} type="number"
                                                                  ></input>
                        </div>
                    <div className={classes.detailItem}>
                            <p className={classes.label}>Sex</p>  <input className={classes.input} value={user.sex} disabled/>
                        </div>
                    <div className={classes.detailItem}>
                            <p className={classes.label}>Address</p>   <input onChange={handleChange} id={"address"} value={values.address} className={`${classes.input} ${classes.address}`}
                                                                      ></input>
                        </div>
                    <div className={classes.detailItem}>
                            <p className={classes.label}>Phone</p>   <input onChange={handleChange} id={"phone"} value={values.phone} className={classes.input} type="number"
                                                                    ></input>
                        </div>
                    <div className={`${classes.detailItem} ${classes.buttons}`}>
                            <button type={"submit"} className={classes.btn1}>
                                Save
                            </button>

                          <a href="/change-password"> <div className={classes.btn2}>Change Password</div></a>


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
