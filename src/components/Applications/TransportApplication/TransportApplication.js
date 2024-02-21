import classes from "./TransportApplication.module.css"
import {useFormik} from "formik";
import axiosConfiguration from "../../../config/axiosConfiguration";
import axios from "axios";
import {useSelector} from "react-redux";
function TransportApplication(){

    const userId=useSelector((state)=>state.auth.id)
    console.log(userId)
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object to store the form data
        const formData = new FormData();

        // Append data to the FormData object
        formData.append('firstName', e.target.elements.firstName.value);
        formData.append('lastName', e.target.elements.lastName.value);
        formData.append('regNum', e.target.elements.regNum.value);
        formData.append('company', e.target.elements.company.value);
        formData.append('model', e.target.elements.model.value);
        formData.append('sex', e.target.elements.sex.value);
        formData.append('vehicleType', e.target.elements.vehicleType.value);
        formData.append('yearOfMfg', e.target.elements.yearOfMfg.value);
        formData.append('enginee', e.target.elements.enginee.value);
        formData.append('chassis', e.target.elements.chassis.value);
        formData.append('nominee', e.target.elements.nominee.value);
        formData.append('nomineeAge', e.target.elements.nomineeAge.value);
        formData.append('nomineeRelation', e.target.elements.nomineeRelation.value);
        formData.append('policyId', e.target.elements.policyId.value);
        formData.append('policyName', e.target.elements.policyName.value);
        formData.append('amount', e.target.elements.amount.value);
        formData.append('policyTerm', e.target.elements.policyTerm.value);
        formData.append('policyType', "TRANSPORT");
        formData.append('applier', userId);
        // ... append other form fields

        // Append files to the FormData object
        formData.append('aadhar', e.target.elements.aadhar.files[0]);
        formData.append('c_book', e.target.elements.c_book.files[0]);
        formData.append('nomineeAadhar', e.target.elements.nomineeAadhar.files[0]);
        formData.append('nomineeAddressProof', e.target.elements.nomineeAddressProof.files[0]);
        // ... append other file fields

        try {
            // Make a POST request using Axios
            const response = await axios.post('http://localhost:4000/transport-form', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Handle the response (you can log it or update the UI accordingly)
            console.log(response.data);
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
                    <div className={classes.subrow}><p className={classes.label}>C Book</p> <input  type="file" className={`${classes.innerRow2} ${classes.file}`}
                                                                                   id="c_book" name="c_book" required></input></div>
                </div>
                <div className={classes.row1}>
                    <p className={classes.label}>Vehicle Registration number</p> <input  id="regNum" name="regNum" className={classes.innerRow1}
                                                                                placeholder="Registation number"
                                                                                required></input>
                </div>

                <div className={classes.row2}>
                    <div className={classes.subrow}><p className={classes.label}>Vehicle company</p>
                        <input  className={classes.innerRow2} id="company" name="company" required></input>
                    </div>

                    <div className={classes.label}><p className={classes.label}>Vehicle model</p>
                        <input  className={classes.innerRow2} id="model" name="model" required></input></div>
                </div>

                <div className={classes.row2}>
                    <div className={classes.subrow}><p className={classes.label}>Vehicle type</p>
                        <input  className={classes.innerRow2} id="vehicleType" name="vehicleType" required></input>
                    </div>
                    <div className={classes.subrow}><p className={classes.label}>Year of manufacture</p>
                        <input  className={classes.innerRow1} id="yearOfMfg" name="yearOfMfg" type="number" required></input>
                    </div>
                </div>
                <div className={classes.row2}>
                    <div className={classes.subrow}><p className={classes.label}>Engine</p>
                        <input  id="enginee" name="enginee" className={classes.innerRow2}
                                                                                  required></input></div>
                    <div className={classes.label}><p className={classes.label}>Chassis</p>
                        <input  id="chassis" name="chassis" className={classes.innerRow2}
                                                                                   required></input></div>

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
                        <input  className={`${classes.innerRow2} ${classes.input}`} id="nomineeRelation"  required />
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
                    <input  className={`${classes.innerRow1} ${classes.input}`} id="policyId" name="policyId"   required />
                </div>

                <div className={classes.row1}>
                    <p className={classes.label}>Policy Name</p>
                    <input  className={`${classes.innerRow1} ${classes.input}`} id="policyName" name="policyName"   required />
                </div>

                <div className={classes.row2}>
                    <div className={classes.subrow}>
                        <p className={classes.label}>Amount</p>
                        <input

                            className={`${classes.innerRow2} ${classes.input}`}
                            type="number"
                            id="amount"
                            name="amount"
                            required
                        />
                    </div>
                    <div className={classes.subrow}>
                        <p className={classes.label}>Policy Term</p>
                        <input

                            id="policyTerm"
                            name="policyTerm"
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

export default TransportApplication
