import classes from "../TransportApplication/TransportApplication.module.css"

import axios from "axios";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import axiosConfiguration from "../../../config/axiosConfiguration";
import {useEffect} from "react";
function LifeApplication(){
    const navigate=useNavigate()

    const {id,name,cover,term}=useParams()
    useEffect(()=>{
        const getCSRFToken = async () => {
            // const response = await axiosConfiguration.get('/getCSRFToken');
            // axiosConfiguration.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;
            // Also set the token in a hidden form field if using forms
        };
        // getCSRFToken();
    },[])
    const user=useSelector((state)=>state.auth)
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object to store the form data
        const formData = new FormData();

        // Append data to the FormData object
        formData.append('firstName', e.target.elements.firstName.value);
        formData.append('lastName', e.target.elements.lastName.value);
        formData.append('nominee', e.target.elements.nominee.value);
        formData.append('nomineeAge', e.target.elements.nomineeAge.value);
        formData.append('nomineeRelation', e.target.elements.nomineeRelation.value);
        formData.append('policyId', e.target.elements.policyId.value);
        formData.append('policyName', e.target.elements.policyName.value);
        formData.append('amount', e.target.elements.amount.value);
        formData.append('applier', user.id);
        formData.append('policyTerm', e.target.elements.policyTerm.value);
        formData.append('policyType', "LIFE");
        formData.append('sex', e.target.elements.sex.value);

        formData.append('healthCondition', e.target.elements.healthCondition.value);
        // ... append other form fields

        // Append files to the FormData object
        formData.append('aadhar', e.target.elements.aadhar.files[0]);
        formData.append('pan', e.target.elements.pan.files[0]);
        formData.append('dobProof', e.target.elements.dobProof.files[0]);
        formData.append('healthCertificate', e.target.elements.healthCertificate.files[0]);
        formData.append('nomineeAadhar', e.target.elements.nomineeAadhar.files[0]);
        formData.append('nomineeAddressProof', e.target.elements.nomineeAddressProof.files[0]);
        // ... append other file fields

        try {
            // Make a POST request using Axios
            const response = await axiosConfiguration.post('/life-form', formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })

            // Handle the response (you can log it or update the UI accordingly)
            console.log(response.data);
            alert(response.data.msg)
            navigate("/profile")
        } catch (error) {
            // Handle errors
            console.error('Error submitting form:', error);
        }
    };


    return(
        <>

            <form onSubmit={handleSubmit} className={classes.form} encType="multipart/form-data">
                <div className={classes.row1}>
                    <p className={classes.label}>Name</p>
                    <input  id={"firstName"} name={"firstName"}   type="text" className={classes.row13} placeholder="FirstName"
                            required></input>
                    <input  id="lastName" name="lastName" type="text" className={classes.row13} placeholder="LastName" required></input></div>
                <div className={classes.row1}>
                    <p className={classes.label}>Sex</p> <input  id="sex" name="sex" className={classes.innerRow1} placeholder="Sex" required></input>
                </div>
                <div className={classes.row2}>
                    <div className={classes.subrow}><p className={classes.label}>AADHAR</p> <input  type="file" className={`${classes.innerRow2} ${classes.file}`}
                                                                                                    id="aadhar" name="aadhar" required></input></div>
                    <div className={classes.subrow}><p className={classes.label}>PAN</p> <input  type="file" className={`${classes.innerRow2} ${classes.file}`}
                                                                                                    id="pan" name="pan" required></input></div>
                </div>
                <div className={classes.row2}>
                    <div className={classes.subrow}><p className={classes.label}>DOB Proof</p> <input  type="file" className={`${classes.innerRow2} ${classes.file}`}
                                                                                                    id="dobProof" name="dobProof" required></input></div>
                    <div className={classes.subrow}><p className={classes.label}>Health Certificate</p> <input  type="file" className={`${classes.innerRow2} ${classes.file}`}
                                                                                                    id="healthCertificate" name="healthCertificate" required></input></div>
                </div>
                <div className={classes.row1}>
                    <p className={classes.label}>Health Condition</p> <input  id="healthCondition" name="healthCondition" className={classes.innerRow1}
                                                                                         placeholder="Health condition"
                                                                                         required></input>
                </div>

                <div className={classes.row1}>
                    <p className={classes.label}>Nominee Name</p>
                    <input  id="nominee" name="nominee" className={classes.innerRow1} required></input>

                </div>

                <div className={classes.row2}>
                    <div className={classes.subrow}>
                        <p className={classes.label}>Nominee Age</p>
                        <input  className={`${classes.innerRow2} ${classes.input}`} id="nomineeAge" name="nomineeAge" required />
                    </div>
                    <div className={classes.subrow}>
                        <p className={classes.label}>Nominee Relation</p>
                        <input  className={`${classes.innerRow2} ${classes.input}`} id="nomineeRelation" id="nomineeRelation"  required />
                    </div>
                </div>

                <div className={classes.row2}>
                    <div className={classes.subrow}>
                        <p className={classes.label}>Nominee AADHAR</p>
                        <input  type="file" className={`${classes.innerRow2} ${classes.file}`} id="nomineeAadhar" name="nomineeAadhar" required />
                    </div>
                    <div className={classes.subrow}>
                        <p className={classes.label}>Nominee AddressProof</p>
                        <input  type="file" className={`${classes.innerRow2} ${classes.file}`} id="nomineeAddressProof" name="nomineeAddressProof" required />
                    </div>
                </div>

                <div className={classes.row1}>
                    <p className={classes.label}>Policy Id</p>
                    <input  className={`${classes.innerRow1} ${classes.input}`} id="policyId" value={id} name="policyId"   required />
                </div>

                <div className={classes.row1}>
                    <p className={classes.label}>Policy Name</p>
                    <input  className={`${classes.innerRow1} ${classes.input}`} id="policyName" value={name} name="policyName"   required />
                </div>

                <div className={classes.row2}>
                    <div className={classes.subrow}>
                        <p className={classes.label}>Amount</p>
                        <input

                            className={`${classes.innerRow2} ${classes.input}`}
                            type="number"
                            id="amount"
                            value={cover}
                            name="amount"
                            required
                        />
                    </div>
                    <div className={classes.subrow}>
                        <p className={classes.label}>Policy Term</p>
                        <input

                            id="policyTerm"
                            name="policyTerm"
                            value={term}
                            className={`${classes.innerRow2} ${classes.input}`}
                            required
                        />
                    </div>
                </div>

                {/*<input  value="sandy" id="applier"  style={{ display: 'none' }} required />*/}
                {/*<input   id="policyType"  style={{ display: 'none' }} required />*/}
                <button className={classes.button} type="submit">
                    Submit
                </button>

            </form>



        </>
    )

}

export default LifeApplication

