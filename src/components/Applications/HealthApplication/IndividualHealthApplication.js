import classes from "./TransportApplication.module.css";
import NavBar from "../../NavBar";
import Footer from "../../Footer/Footer";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosConfiguration from "../../../config/axiosConfiguration";


function IndividualHealthApplication(){

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
        healthCondition:"",
        healthCertificate:"",
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
            const res=await axiosConfiguration.post("/health-individual-application",b)
            console.log(res.data)
            console.log(user.type)
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

        const res = await axiosConfiguration.post("/verifyHealth", b)
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
                    <div className={classes.subrow}><p className={classes.label}>C Book</p> <button onClick={()=>{openFile(data.pan)}} type={"button"}   className={`${classes.innerRow2} ${classes.opener}`}
                                                                                                    id="pan" name="pan" >Open</button></div>
                </div>
                <div className={classes.row2}>
                    <div className={classes.subrow}><p className={classes.label}>DOB Proof</p> <button onClick={()=>{openFile(data.dobProof)}} type={"button"}  className={`${classes.innerRow2} ${classes.opener}`}
                                                                                                    id="dobProof" name="dobProof" >Open</button></div>
                    <div className={classes.subrow}><p className={classes.label}>Health Certificate</p> <button onClick={()=>{openFile(data.healthCertificate)}} type={"button"}   className={`${classes.innerRow2} ${classes.opener}`}
                                                                                                    id="healthCertificate" name="healthCertificate" >Open</button></div>
                </div>

                <div className={classes.row1}>
                    <p className={classes.label}>Health Conditions</p> <input value={data.healthCondition}  id="healthCondition" name="healthCondition" className={classes.innerRow1}
                                                                              placeholder="healthCondition"
                                                                              required></input>
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

export default IndividualHealthApplication
