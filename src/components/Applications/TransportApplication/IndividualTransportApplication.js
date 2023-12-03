import classes from "./TransportApplication.module.css";
import NavBar from "../../NavBar";
import Footer from "../../Footer/Footer";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosConfiguration from "../../../config/axiosConfiguration";


function IndividualTransportApplication(){

    const user=useSelector((state)=>state.auth)
    const {id}=useParams()
    const emptyObject = {
        appId: "",
        firstName: "",
        lastName: "",
        regNum: "",
        sex: "",
        aadhar: "",
        c_book: "",
        nomineeAadhar: "",
        nomineeAddressProof: "",
        vehicleCompany: "",
        model: "",
        yearOfMfg: "",
        vehicleType: "",
        engine: "",
        chassis: "",
        nominee: "",
        nomineeAge: "",
        nomineeRelation: "",
        policyId: "",
        policyName: "",
        policyType: "",
        policyTerm: "",
        amount: "",
        payType: "",
        applier: "",
        verificationStatus: "",
        userType: "",
    };
    const [data,setData]=useState(emptyObject)

    useEffect(()=>{
        async function f(){
            const b={
                appId:id
            }
            const res=await axiosConfiguration.post("/transport-individual-application",b)
            console.log(res.data)
            setData({...data,...res.data})
        }
        if(id){
            f().then(r => {});
        }

    },[id])

    async function handleSubmit(e) {
        e.preventDefault()
        const v = e.target.elements.verificationStatus

        const b = {
            appId:id,
            type: data.policyType,
            name: data.policyName,
            applier: data.applier,
            amount: data.amount,
            policyId: data.policyId,
            term: data.policyTerm,
            bname: data.nominee,
            bage: data.nomineeAge,
            brelation: data.nomineeRelation,

            verificationStatus: v
        }

        const res = await axiosConfiguration.post("/verifyTransport", b)
        console.log(res.data)
    }


    function openFile(id) {
       // axiosConfiguration.post("/files",{fileId:id}).then(r=>{
       //     console.log(r)
       // })
        axiosConfiguration.post("/files", { fileId: id })
            .then(response => {
                const fileURL = response.data.fileURL;

                // Open the file URL in a new tab
                window.open(fileURL, '_blank');
            })
            .catch(error => {
                console.error(error);
                // Handle errors as needed
            });
    }

    return(
        <>
            <NavBar/>
            <form onSubmit={handleSubmit} className={classes.form} >
                <div className={classes.row1}>
                    <p className={classes.label}>Name</p>
                    <input  id={"firstName"} name={"firstName"} value={data.firstName}  type="text" className={classes.row13} placeholder="FirstName"
                            required></input>
                    <input  id="lastName" name="lastName" value={data.lastName} type="text" className={classes.row13} placeholder="LastName" required></input></div>
                <div className={classes.row1}>
                    <p className={classes.label}>Sex</p> <input value={data.sex}  id="sex" name="sex" className={classes.innerRow1} placeholder="Sex" required></input>
                </div>
                <div className={classes.row2}>
                    <div className={classes.subrow}><p className={classes.label}>AADHAR</p> <button onClick={()=>{openFile(data.aadhar)}} type={"button"}  className={`${classes.innerRow2} ${classes.opener}`}
                                                                                                    id="aadhar" name="aadhar" >Open</button></div>
                    <div className={classes.subrow}><p className={classes.label}>C Book</p> <button onClick={()=>{openFile(data.c_book)}} type={"button"}   className={`${classes.innerRow2} ${classes.opener}`}
                                                                                                    id="c_book" name="c_book" >Open</button></div>
                </div>
                <div className={classes.row1}>
                    <p className={classes.label}>Vehicle Registration number</p> <input value={data.regNum}  id="regNum" name="regNum" className={classes.innerRow1}
                                                                                         placeholder="Registation number"
                                                                                         required></input>
                </div>

                <div className={classes.row2}>
                    <div className={classes.subrow}><p className={classes.label}>Vehicle company</p>
                        <input  className={classes.innerRow2} value={data.vehicleCompany} id="company" name="company" required></input>
                    </div>

                    <div className={classes.label}><p className={classes.label}>Vehicle model</p>
                        <input  className={classes.innerRow2} value={data.model} id="model" name="model" required></input></div>
                </div>

                <div className={classes.row2}>
                    <div className={classes.subrow}><p className={classes.label}>Vehicle type</p>
                        <input  className={classes.innerRow2} value={data.vehicleType} id="vehicleType" name="vehicleType" required></input>
                    </div>
                    <div className={classes.subrow}><p className={classes.label}>Year of manufacture</p>
                        <input  className={classes.innerRow1} value={data.yearOfMfg} id="yearOfMfg" name="yearOfMfg" type="number" required></input>
                    </div>
                </div>
                <div className={classes.row2}>
                    <div className={classes.subrow}><p className={classes.label}>Engine</p>
                        <input value={data.engine} id="enginee" name="enginee" className={classes.innerRow2}
                                required></input></div>
                    <div className={classes.label}><p className={classes.label}>Chassis</p>
                        <input value={data.chassis}  id="chassis" name="chassis" className={classes.innerRow2}
                                required></input></div>

                </div>

                <div className={classes.row1}>
                    <p className={classes.label}>Nominee Name</p>
                    <input value={data.nominee}  id="nominee" name="nominee" className={classes.innerRow1} required></input>

                </div>

                <div className={classes.row2}>
                    <div className={classes.subrow}>
                        <p className={classes.label}>Nominee Age</p>
                        <input  className={`${classes.innerRow2} ${classes.input}`} value={data.nomineeAge} id="nomineeAge" name="nomineeAge" required />
                    </div>
                    <div className={classes.subrow}>
                        <p className={classes.label}>Nominee Relation</p>
                        <input  className={`${classes.innerRow2} ${classes.input}`} value={data.nomineeRelation} id="nomineeRelation" id="nomineeRelation"  required />
                    </div>
                </div>

                <div className={classes.row2}>
                    <div className={classes.subrow}>
                        <p className={classes.label}>Nominee AADHAR</p>
                        <button onClick={()=>{openFile(data.nomineeAadhar)}}  className={`${classes.innerRow2} ${classes.opener}`} id="nomineeAadhar" name="nomineeAadhar" >Open</button>
                    </div>
                    <div className={classes.subrow}>
                        <p className={classes.label}>Nominee AddressProof</p>
                        <button onClick={()=>{openFile(data.nomineeAddressProof)}}  className={`${classes.innerRow2} ${classes.opener}`} id="nomineeAddressProof" name="nomineeAddressProof">Open</button>
                    </div>
                </div>

                <div className={classes.row1}>
                    <p className={classes.label}>Policy Id</p>
                    <input value={data.policyId}  className={`${classes.innerRow1} ${classes.input}`} id="policyId" name="policyId"   required />
                </div>

                <div className={classes.row1}>
                    <p className={classes.label}>Policy Name</p>
                    <input value={data.policyName}  className={`${classes.innerRow1} ${classes.input}`} id="policyName" name="policyName"   required />
                </div>

                <div className={classes.row2}>
                    <div className={classes.subrow}>
                        <p className={classes.label}>Amount</p>
                        <input

                            className={`${classes.innerRow2} ${classes.input}`}
                            value={data.amount}
                            type="number"
                            id="amount"
                            name="amount"
                            required
                        />
                    </div>
                    <div className={classes.subrow}>
                        <p className={classes.label}>Policy Term</p>
                        <input
                            value={data.policyTerm}
                            id="policyTerm"
                            name="policyTerm"
                            className={`${classes.innerRow2} ${classes.input}`}
                            required
                        />
                    </div>
                </div>

                {/*<input  value="sandy" id="applier"  style={{ display: 'none' }} required />*/}
                {/*<input   id="policyType"  style={{ display: 'none' }} required />*/}
               <input style={{display:"none"}} value={data.appId}/>
                {user.type==="Admin" ?<> <div className={classes.row1}>
                    <p className={classes.label}>Verification Status</p>
                    <input value={data.Status}  className={`${classes.innerRow1} ${classes.input}`}  name="verificationStatus"  />
                </div> <button className={classes.button} type="submit">
                    Verify
                </button></>:<button type={"submit"} style={{display:"none"}}></button>}
            </form>
            <Footer/>
            </>
    )
}

export default IndividualTransportApplication
