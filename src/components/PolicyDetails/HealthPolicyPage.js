/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import Tabs from "./Tabs";
import './PolicyPage.css';
import {useParams} from "react-router-dom";
import axios from "axios";
import axiosConfiguration from "../../config/axiosConfiguration";


function HealthPolicyPage ()
{
    const {id}=useParams()
    console.log(id)
    const [ob,setOb]=useState({})

    useEffect(()=>{

             axiosConfiguration.get("/policypage/"+id).then((p)=>{
                 setOb(p.data)
                 console.log(ob)



             })

    },[])

    const array =
        {
            id:id,
            Name:ob.Name,
            Cover:ob.Cover,
            Term:ob.Term,
            Type:ob.Type,
            KeyFeatures:ob.keyfeatures,




            keyterms:
                <div>
                    <h3>KEY TERMS:</h3>
                    <ul>
                        <li>The health premium is guaranteed for a period of 3 years, post which it may be reviewed.</li>
                        <li>Please know the associated risks and the applicable charges, from your Insurance agent or the Intermediary or policy document issued by insurance company</li>
                        <li>Tax Benefits are subject to change as per Income Tax Act, 1961. Please check with your financial advisor for more details</li>
                    </ul>
                </div>,
            conditionalhead:'CONDITIONS UNDER WHICH CLAIM IS NOT APPLICABLE',
            TC:"1. Pre-existing conditions: Health insurance policies may have a waiting period before covering pre-existing medical conditions. During this period, any medical expenses related to the pre-existing condition may not be covered. 2. Non-covered treatments: Some health insurance policies have limitations on certain treatments or procedures that are not covered. This may include cosmetic surgery, fertility treatments, or experimental treatments. 3. Exceeding policy limits: Health insurance policies often have limits on the amount of coverage they provide for a particular treatment or procedure. If the cost of treatment exceeds this limit, the policyholder may be responsible for paying the difference. 4. Failure to follow policy guidelines: Health insurance policies may have specific guidelines or requirements for accessing certain treatments or services. If the policyholder fails to follow these guidelines, the claim may not be covered. Non-payment of premiums: If the policyholder fails to pay the required premiums, the health insurance policy may be cancelled or suspended. Any claims made during the period when the premiums were not paid may not be covered Out-of-network providers: If the policyholder receives treatment from a healthcare provider who is not in the insurance companys network, the claim may not be covered or may be covered at a lower rate. Experimental treatments: If the policyholder receives an experimental or investigational treatment that has not been approved by the insurance company or the relevant regulatory bodies, the claim may not be covered. Intentional acts: Health insurance policies typically do not cover medical expenses resulting from intentional acts, such as self-harm or criminal activity. Substance abuse: Some health insurance policies have limitations on coverage for substance abuse treatment or may not cover it at all. Non-medical expenses: Health insurance policies generally only cover medical expenses. Any non-medical expenses, such as transportation or lodging, are typically not covered.",

            nrl:'NO ROOM RENT LIMIT ✅',
            rc:' 10 lakhs 5 times',
            ch:9400,
            copay:'100% PAID BY THE INSURER✅',
            mc:'YES✅',
            pre:90,
            post:200,
            eiwp:3.5,
            ncb:4,
            hh:'Upto 5 lakhs',
            ac:'Upto 15000',
            otb1:'30% Raise on Cover amount for Policy Holders Over 55 years and holding the policy for 75% of the duration of the policy',
            otb2:'25% discount on annual claims due to major chronic illness like cancer,diabetes etc.',


        }



    return(<>
            <div className="heading">  <h1>Our Health Insurance Policies:</h1>
                <h2> Protecting Your Health and Finances</h2>

            </div>

            <h2 className="subheads">WHAT IS HEALTH INSURANCE WHICH YOU WANTED TO VIEW?</h2>

            <div className="matterbox2">

                <div className="disclaimer">
                    <h2>       DISCLAIMER FOR CUSTOMERS
                    </h2>

                    The payable total amount, duration, and premium of a health insurance policy can vary widely depending on several factors, such as your age, health history, location, and the specific plan you choose.
                    You should carefully review the details of each plan you are considering to understand the costs and benefits, as well as any restrictions or limitations. Typically, premiums are paid monthly or annually, and the duration of the policy can range from one year to several years, depending on the plan. The payable total amount will also depend on the specific plan and the amount of coverage provided.
                </div>

                <div className="factors">
                    <h2>        FACTORS DETERMINING HEALTH INSURANCE PREMIUM CALCULATION
                    </h2>
                    <p>
                        Age: Generally, older individuals tend to have higher health insurance premiums than younger individuals because they are more likely to have health issues that require medical attention.
                        Gender: Women may have higher health insurance premiums than men because they tend to use medical services more frequently, especially during their reproductive years.
                        Medical history: If an individual has a pre-existing medical condition or has a history of serious health issues, they may have higher health insurance premiums.
                        Lifestyle factors: Health insurance companies may consider an individuals lifestyle factors, such as whether they smoke or drink alcohol, when determining their premiums. Individuals who engage in high-risk behaviors may have higher premiums.
                        Geographic location: The cost of healthcare can vary depending on the region or state, and health insurance premiums may reflect this.
                        Type of plan: Different types of health insurance plans, such as HMOs, PPOs, and high-deductible plans, have different premium costs.
                        Deductibles and copayments: Plans with higher deductibles and copayments typically have lower premiums, while plans with lower deductibles and copayments tend to have higher premiums.
                    </p>
                </div>


            </div>


            <Tabs dataarray={array} id={id}/>

            <a href="/"><button className="backtohealth" id="backtohealth"> Back to view policies</button></a>


        </>
    )


}

export default HealthPolicyPage
