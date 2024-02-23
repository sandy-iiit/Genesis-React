import React, { useEffect, useState } from 'react';
import styles from './PolicyForm.module.css';
import NavBar from '../../NavBar';
import Footer from '../../Footer/Footer';
import { FaTrash } from 'react-icons/fa';
import axiosConfiguration from '../../../config/axiosConfiguration'
import { toast } from 'react-toastify';

//PHASE 2
const PolicyForm = () => {
    const [isLifeInsurance, setIsLifeInsurance] = useState(true);
    const [isTransportInsurance, setIsTransportInsurance] = useState(false);
    const [isHealthInsurance, setIsHealthInsurance] = useState(false);
    const [insuranceType, setInsuranceType] = useState('');


    const [keyDetails, setKeyDetails] = useState(['']);
    const [otherBenefits, setOtherBenefits] = useState(['']);
    const [benefit, setBenefit] = useState([{ label: '', value: '' }]);


    const [formData, setFormData] = useState({
        policytype: '',
        name: '',
        amount: 0,
        Premiums: '',
        Premium: {
            Monthly: 0,
            Annual: 0

        },
        term:'',
        type: '',
        duration:0,
        details: '',
        TC: '',
        GE: '',
        benefit: '',
            nrl: '',
            rc: '',
            ch:'',
            copay: '',
            mc: 'yes',
            pre: '',
            post: '',
            eiwp: '',
            ncb: '',
            hh: '',
            ac: '',
    
        otherben: [],
        },
    );

    const handleChange = (field, value) => {
    
        setFormData({ ...formData, [field]: value });
    };



    const handleInsuranceChange = (e) => {
        setIsLifeInsurance(e.target.value === 'life');
        setIsHealthInsurance(e.target.value === 'health');
        setIsTransportInsurance(e.target.value === 'transport');
        setInsuranceType(e.target.value);
        console.log(e.target.value)
        setFormData({...formData,policytype:e.target.value})
    };

    

    //PHASE3
    const handlePremiumChange = (field, value) => {
        setFormData((prevData)=>({
            ...prevData,
            Premium: {
                ...prevData.Premium,
                [field]: value,
            },
        }));
    };


    const handleCoveragesChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            coverages: {
                ...prevData.coverages,
                    [field]: value,

            },
        }));
    };


    const handleBenChange = (field, value) => {
        setFormData({
            ...formData,
                ben: {
                    ...formData.ben,
                    [field]: value,
                },
            },
        );
    };

    const handleOtherBenChange = (index, value) => {
        const updatedOtherBenefits = [...otherBenefits];
        updatedOtherBenefits[index] = value;
        setOtherBenefits(updatedOtherBenefits);
    
        // Concatenate the array of sentences and update formData
        const concatenatedOtherBen = updatedOtherBenefits.join('<--\n-->'); // Adjust as per your requirement
        setFormData((prevData) => ({
            ...prevData,
            otherben: concatenatedOtherBen,
        }));
    };
       
    const addOtherBenefit = () => {
        setOtherBenefits((prevOtherBenefits) => [...prevOtherBenefits, '']);
    };
    
    
    const removeOtherBenefit = (index) => {
        const updatedOtherBenefits = [...otherBenefits];
        updatedOtherBenefits.splice(index, 1);
        setOtherBenefits(updatedOtherBenefits);
        setFormData({
            ...formData,
          
                otherben: updatedOtherBenefits,
            },
        );
    };

    //PHASE 4
    
const handleKeyDetailsChange = (index, value) => {
    const updatedKeyDetails = [...keyDetails];
    updatedKeyDetails[index] = value;
    setKeyDetails(updatedKeyDetails);
    const concatenatedKeydetails = updatedKeyDetails.join('<--\n-->'); 
    setFormData({
        ...formData,
        details: concatenatedKeydetails[0],
    });
};

const addKeyDetail = () => {
    setKeyDetails([...keyDetails, '']);
};

const removeKeyDetail = (index) => {
    const updatedKeyDetails = [...keyDetails];
    updatedKeyDetails.splice(index, 1);
    setKeyDetails(updatedKeyDetails);
    setFormData({
        ...formData,
        keyDetails: updatedKeyDetails,
    });
};

const handleBenefitChange = (index, field, inputValue) => {
    const updatedBenefit = [...benefit];
    updatedBenefit[index][field] = inputValue;
    setBenefit(updatedBenefit);
    setFormData({
        ...formData,
        benefit: updatedBenefit,
    });
};

const addBenefitModule = () => {
    setBenefit([...benefit, { label: '', value: '' }]);
};

const removeBenefitModule = (index) => {
    const updatedBenefit = [...benefit];
    updatedBenefit.splice(index, 1);
    setBenefit(updatedBenefit);
    setFormData({
        ...formData,
        benefit: updatedBenefit,
    });
};

//PHASE 5

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log('Before Submission:', formData);
       
        // Send form data to the backend
        const response = await axiosConfiguration.post('/policies_design', formData);
        console.log(response)
        toast.success("Policy created successfully")
        console.log('Response from server:', response.data);

        // Reset form data after successful submission
        setFormData({
            policytype: '',
            name: '',
            type: '',
            amount: 0,
            term: '',
            duration: '',
            Premiums:0,
            Premium: {
                Annual: 0,
                Monthly: 0,
            },
            details: '',
            benefits: '',
                    nrl: '',
                    rc: '',
                    ch: '',
                    copay: '',
                    mc: '',
                    pre: '',
                    post: '',
                    eiwp: '',
                    ncb: '',
                    hh: '',
                    ac: '',
                otherben: [],
            },
        );

        console.log('After Submission:', formData);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};


//PHASE 6
    return (
        <>
            <NavBar />
            <div className={styles.body}>
                <div className={styles.cardHeader}>
                    <div>
                        <h1>Insurance Reinvented: Designing Beyond the Norm</h1>
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4Sjgy5RXwFCvajaFtKqrAsNuOeIrErpQoE1S2vDxgg&s'
                            alt="Policy Design Tool"
                            className={styles.cardImage}
                        />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Policy Design Tool</h2>
                            <p className={styles.cardDescription}>
                                Use our advanced policy design tool to create a customized
                                insurance policy that fits your needs.
                            </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img
                            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRR6fXxIIt-3PRmJounn8Q7XuaxXbMRoLANEtyKiqUR8pqWMVv7"
                            alt="Expert Assistance"
                            className={styles.cardImage}
                        />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Expert Assistance</h2>
                            <p className={styles.cardDescription}>
                                Our experienced advisors are ready to guide you through the
                                process and answer all your policy-related queries.
                            </p>
                        </div>
                    </div>

                </div>
                <form  className={styles.formm} onSubmit={handleSubmit}>
                <div className={styles['form-group']}>
                <label htmlFor="insurance" className={styles['label']}>
                    Insurance:
                </label>
                <select
                    id="insurance"
                    name="insurance"
                    onChange={handleInsuranceChange}
                    className={styles['select']}
                    placeholder="Select the type of insurance">
                    <option value="life">Life Insurance</option>
                    <option value="transport">Transport Insurance</option>
                    <option value="health">Health Insurance</option>
                    </select>
                    </div>           
                     <div className={styles['form-group']}>
                        <label htmlFor="name" className={styles['label']}>Name of Policy:</label>
                        <input type="text" id="name" name="name" 
                         value={formData.name}
                         onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Enter the Name of Policy" className={styles['input']} />
                    </div>


                    <div className={styles['form-group']}>
                        <label htmlFor="typeofpolicy" className={styles['label']}>Type of Policy:</label>
                        <input type="text" id="typeofpolicy" name="typeofpolicy"
                         value={formData.type}
                         onChange={(e) => handleChange('type', e.target.value)}
                        required placeholder="What Category of Policy it belongs to" className={styles['input']} />
                    </div>
                    {isHealthInsurance && (
                        <>
                        <div className={styles['form-group']}>
                            <label htmlFor="Premium-monthly" className={styles['label']}>Monthly Premium:</label>
                            <input type="number" id="premium-monthly" name="premium-monthly"
                           value={formData.Premium && formData.Premium.Monthly ? formData.Premium.Monthly : 0}
                            onChange={(e) => handlePremiumChange('Monthly', e.target.value)}
                            placeholder="Enter the designated Monthly Premium"
                            required className={styles['input']} />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="Premium-annual" className={styles['label']}>Annual Premium:</label>
                            <input type="number" id="premium-annual" name="premium-annual" 
                                value={formData.Premium && formData.Premium.Annual ? formData.Premium.Annual : 0}
                                onChange={(e) => handlePremiumChange('Annual', e.target.value)}
                                placeholder="Enter the designated Annual Premium" required className={styles['input']} />
                        </div>
                            
                        </>
                    )}
                    {
                        !isHealthInsurance && (
                            <>
                            <div className={styles['form-group']}>
                                <label htmlFor="term" className={styles['label']}>Term:</label>
                                <input type="text" id="term"  value={formData.term}
                                onChange={(e) => handleChange('term', e.target.value)}
                                name="term" placeholder="annual/monthly/quarterly/Lifetime" required className={styles['input']} />
                            </div>
                            

                            </>
                        )
                    }
                    {isLifeInsurance &&
                    (
                        <>
                        <div className={styles['form-group']}>
                                <label htmlFor="premiums" className={styles['label']}>Premium:</label>
                                <input type="number" id="premiums"  value={formData.Premiums}
                                onChange={(e) => handleChange('Premiums', e.target.value)}
                                name="premiums" placeholder="Enter the designated Premium" required className={styles['input']} />
                            </div>

                        </>
                    )

                    }
                    {!isTransportInsurance &&

                    (
                        <>
                            <div className={styles['form-group']}>
                                <label htmlFor="duration" className={styles['label']}>Duration:</label>
                                <input type="number" id="duration" name="duration"
                                 value={formData.duration}
                                 onChange={(e) => handleChange('duration', e.target.value)} 
                                placeholder="enter in years" required className={styles['input']} />
                            </div>

                        </>
                    )                
                   }

                    {isTransportInsurance && (
                        <>     
                            <div className={styles['form-group']}>
                                <label htmlFor="idv" className={styles['label']}>IDV:</label>
                                <input type="number" id="idv" name="idv"
                                 value={formData.amount}
                                 onChange={(e) => handleChange('amount', e.target.value)}
                                placeholder="enter IDV amuont" required className={styles['input']} />
                            </div>

                        </>
                    )}
                    {
                        !isTransportInsurance && (
                            <>
                                <div className={styles['form-group']}>
                                    <label htmlFor="cover" className={styles['label']}>Cover:</label>
                                    <input type="number" id="cover" name="cover" 
                                     value={formData.amount}
                                     onChange={(e) => handleChange('amount', e.target.value)}
                                    placeholder="enter Cover amuont" required className={styles['input']} />
                                </div>
                            </>
                        )
                    }
                    <div className={styles['form-group']}>
                        <label htmlFor="details" className={styles['label']}>Key Details:</label>
                        {keyDetails.map((sentence, index) => (
                            <div key={index} className={styles['key-details-container']}>
                                <input
                                    type="text"
                                    value={sentence}
                                    onChange={(e) => handleKeyDetailsChange(index, e.target.value)}
                                    className={styles['key-details-input']}
                                />
                                <FaTrash onClick={() => removeKeyDetail(index)} className={styles['delete-icon']} />
                            </div>
                        ))}
                        <button type="button" onClick={addKeyDetail} className={styles['add-key-details-button']}>Add Key Detail</button>
                    </div>
                    
                    
                    <div className={styles['form-group']}>
                        <label htmlFor="tc" className={styles['label']}>Terms and Conditions:</label>
                        <textarea id="tc" name="tc" value={formData.TC} onChange={(e)=>handleChange('TC',e.target.value)} required className={styles['textarea']}></textarea>
                    </div>
                    
                    {
                        !isHealthInsurance && (
                            <>
                                <div className={styles['form-group']}>
                                    <label htmlFor="ge" className={styles['label']}>GE:</label>
                                    <textarea type="text" id="ge" name="ge" value={formData.GE} onChange={(e)=>handleChange('GE',e.target.value)} className={styles['textarea']}></textarea>
                                </div>
                               
                            </>
                        )
                    }
                    

{
    !isHealthInsurance &&

    (
        <>
         <div className={styles['form-group']}>
                <label htmlFor="benefits" className={styles['label']}>Benefits:</label>
                <div className={styles['benefits-container']}>
                    {benefit.map((module, index) => (
                        <div key={index} className={styles['benefit-module']}>
                            <div className={styles['benefit-inputs']}>
                                <input
                                    type="text"
                                    value={module.label}
                                    name='benefitlabel'
                                    onChange={(e) => handleBenefitChange(index, 'label', e.target.value)}
                                    className={styles['benefit-label']}
                                    placeholder="Label"
                                    
                                />
                                <textarea
                                    value={module.value}
                                    onChange={(e) => handleBenefitChange(index, 'value', e.target.value)}
                                    name='benefitvalue'
                                    className={styles['benefit-value']}
                                    placeholder="Value"
                                />
                            </div>
                            <FaTrash onClick={() => removeBenefitModule(index)} className={styles['delete-icon']} />
                        </div>
                    ))}
                    <button type="button" onClick={addBenefitModule} className={styles['add-key-details-button']}>
                        Add Benefit Module
                    </button>
                </div>
            </div>
        </>
    )
}


{
   isHealthInsurance &&
   (
    <>
    <div className={styles['form-group']}>
                <div className={styles['benefit-health-field']}>
                    <label>Coverages:</label>
                </div>
                <div className={styles['benefit-health-field']}>
                    <label>Room Rent Limit:</label>
                    <input id="nrl" name="nrl" value={formData.nrl}
                        onChange={(e) => handleChange('nrl', e.target.value)} 
                        type="text" required placeholder="Room Rent Limit Details" />
                </div>
                <div className={styles['benefit-health-field']}>
                    <label>Restoration Cover:</label>
                    <input id="rc" name="rc" value={formData.rc}
                        onChange={(e) => handleChange('rc', e.target.value)}
                        type="text" required placeholder="Enter Restoration Cover:# Lakhs for # times" />
                </div>
                <div className={styles['benefit-health-field']}>
                    <label>CashLess Hospitals:</label>
                    <input id="ch" name="ch" value={formData.ch}
                        onChange={(e) => handleChange('ch', e.target.value)}
                        type="number" required placeholder="Enter Number of Cashless hospitals under your cover across India" />
                </div>
                <div className={styles['benefit-health-field']}>
                    <label>Copay:</label>
                    <input id="copay" name="copay" value={formData.copay}
                        onChange={(e) => handleChange('copay', e.target.value)}
                        type="text" required placeholder="Enter Copay % you Provide" />
                </div>
                <div className={styles['form-group']}>
                    <label>Maternity Cover:</label>
                    <select id="mc" name="mc" value={formData.mc}
                        onChange={(e) => handleChange('mc', e.target.value)}
                        className={styles['select']}>
                            <option value="Yes">Yes ✅</option>
                            <option value="No">No ❌</option>
                     </select>
                </div>
                <div className={styles['benefit-health-field']}>
                    <label>Pre Hospitalization Cover:</label>
                    <input id="pre" name="pre" value={formData.pre}
                        onChange={(e) => handleChange('pre', e.target.value)}
                        type="number" required placeholder="Enter number of days of pre-Hospitalisation support" />
                </div>
                <div className={styles['benefit-health-field']}>
                    <label>Post Hospitalization Cover:</label>
                    <input id="post" name="post" value={formData.post}
                        onChange={(e) => handleChange('post', e.target.value)}
                        type="number" required placeholder="Enter number of days of post-Hospitalisation support" />
                </div>
                <div className={styles['benefit-health-field']}>
                    <label>Existing Illness Waiting Period:</label>
                    <input id="eiwp" name="eiwp" value={formData.eiwp}
                        onChange={(e) => handleChange('eiwp', e.target.value)}
                        type="number" required placeholder="Enter in Years" />
                </div>


                <label>Benefits:</label>
                <div className={styles['benefit-health-field']}>
                    <label>No Claim Bonus:</label>
                    <input id="ncb" name="ncb" value={formData.ncb}
                        onChange={(e) => handleChange('ben', e.target.value)}
                        type="number" required placeholder="Enter the Bonus in Lakhs on Annual Basis" />
                </div>
                <div className={styles['benefit-health-field']}>
                    <label>Home Hospitalisation:</label>
                    <input id="hh" name="hh" value={formData.hh}
                        onChange={(e) => handleChange('hh', e.target.value)}
                        type="number" required placeholder="Support upto(in Lakhs)" />
                </div>
                <div className={styles['benefit-health-field']}>
                    <label>Ambulance Charges:</label>
                    <input id="ac" name="ac" value={formData.ac}
                        onChange={(e) => handleChange('ac', e.target.value)}
                        type="number" required placeholder="Support upto(in Lakhs)" />
                </div>

            <div className={styles['benefit-health-fields']}>
                



            {otherBenefits.map((sentence, index) => (
                   <div key={index} className={styles['benefit-health-field']}>
                    <label>Other Benefits:</label>
            <textarea
                type="text"
                value={sentence}
                onChange={(e) => handleOtherBenChange(index, e.target.value)} 
                id="oben" name="oben"
                className={styles['benefit-health-input']}
            />
            <FaTrash onClick={() => removeOtherBenefit(index)} className={styles['delete-icon']} />
        </div>
))}
<button type="button" onClick={addOtherBenefit} className={styles['add-key-details-button']}>
    Add Other Benefit
</button>
            </div>
            </div>
    
    </>
   )
}
                   
                    <br />
                    <button type="submit" className={styles.butr}>Submit</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default PolicyForm;
