// import React, {useEffect, useState} from "react";
import Tab2 from "./Tabs2";
import './PolicyPage.css';

const array =
    {
        id:"6443dae2bea161fe9f043ae5",
        Name:'WHOLE LIFE INSURANCE',
        IDV : 8000000,
        Term :'Lifetime',

        KeyFeatures:"Whole life insurance,refers to an insurance plan which covers you for a lifetime. The maturity age for a whole life plan is about 100 years and it also comes with a maturity benefit.This is to imply that whole life insurance will give you the sum assured at either the time of death (death benefit) or it will give you the promised maturity benefit if you live up to 100 years.Whole life insurance is a great way to leave a legacy while ensuring financial safety for your family throughout life.Whole life policies generally continue until you reach 100 years of age, making them benefit your family even in the case of natural death.",
        TC:"1. The Accident shall result in bodily injury or injuries to the Life Assured independently of any other means. Such injury or injuries shall, within 180 days of the occurrence of the Accident, directly and independently of any other means cause the death of the Life Assured. In the event of the death of the Life Assured after 180 days of the occurrence of the Accident,the Company shall not be liable to pay the Accidental Death Benefit."+
            "a. The Policy must be in full force at the time of Accident."+
            "b. The Company shall not be liable to pay this benefit in case the death of the Life Assured occurs after the date of termination of the Policy."+
            "c. Accidental Death Benefit cannot be changed during the Policy Term.Upon payment of the Accidental Death Benefit, the Policy will terminate and all"+
            "rights, benefits and interests under the Policy will stand extinguished."+

            "2. Premium payment:"+
            "i. You are required to pay Premiums on the due dates and for the amount mentioned in the Policy Schedule."+
            "ii. The grace period for payment of premium is 15 days for monthly frequency of premium payment and 30 days for other frequencies of premium payment. In case of occurrence of the covered events during the grace period,"+
            "We will pay the benefits as per the terms and conditions of the Policy."+
            "iii.If any premium instalment is not paid within the grace period then the Policy shall lapse and all cover under the Policy will cease."+
            "iv. You are required to pay Premiums for the entire Premium Payment Term."+

            "3. A Policy which has lapsed for non-payment of premium within the grace period may be revived subject to underwriting and the following conditions:"+
            "a) The application for revival is made within 2 years from the due date of the first unpaid premium and before the termination date of the Policy. Revival will be based on the"+
            "prevailing Board approved underwriting policy."+
            "b) You furnish, at your own expense, satisfactory evidence of health as required by Us."+
            "c) The arrears of Premiums together with interest at such rate as We may charge for late payment of premiums are paid."+
            "d) The revival of the Policy may be on terms different from those applicable to the Policy before it lapsed for example, extra mortality"+
            "premiums or charges may be applicable subject to our Board approved underwriting policy."+
            "e) We reserve the right to refuse to re-instate the Policy. In that case, only the premiums paid towards the re-instatement of the policy shall be refunded without any interest."+
            "f) The revival will take effect only if it is specifically communicated by Us to You"+

            "4.Surrender Value"+
            "i. Surrender means voluntary termination of the Policy by you. ii. For Limited Pay and Regular Pay surrender is not allowed and hence no benefit shall become payable on surrender of the Policy."+
            "ii. The Policy will terminate on surrender and all the rights / title and interest under the Policy shall stand extinguished."+
            "iii.Surrender value may be taxable as per the prevailing tax laws."+
            "iv. The bases for computing Surrender Value factors will be reviewed from time to time and the factors applicable to existing business may be revised subject to the prior approval of the IRDAI.",

        ge:"1.We will not be liable to pay the Accidental Death Benefit if the Accident is directly or indirectly due to or caused, occasioned, accelerated or aggravated by, any one of the following:"+
            "a) Attempted suicide or self-inflicted injuries while sane or insane, or whilst the Life Assured is under the influence of any narcotic substance or drug or intoxicating liquor;"+
            "b) Engaging in aerial flights (including parachuting and skydiving) other than as a fare paying passenger or cre won a licensed passenger-carrying"+
            "commercial aircraft operating on a regular scheduled route;"+
            "c) The Life Assured with criminal intent, committing any breach of law;"+
            "d) Due to war, whether declared or not or civil commotion;"+
            "e) Engaging in hazardous sports orpastimes, e.g. taking part in (or practising for) boxing, caving, climbing, horse racing, jet skiing, martial arts, mountaineering, off piste skiing, pot holing, power boat racing,"+
            "underwater diving, yacht racing or any race, trial or timed motor sport."+

            "2.Loan"+
            "We will not provide loans under this Policy"+
            "3.Riders"+
            "No riders are available under this Policy"+
            "4.Paid-up Value"+
            "There is no paid-up value under this Policy.",

        benefits:"1. Death Benefit:- We shall pay the Death Benefit as per the Death Benefit PayoutOption stated on Your Policy Schedule upon diagnosis of Terminal Illness or death"+
            "of the Life Assured whichever is earlier provided the Policy in force as on the date ofdiagnosis of Terminal Illness or the date of death of the Life Assured. A Life Assured"+
            "shall be regarded as Terminally Ill only if that Life Assured is diagnosed assuffering from a condition which, in the opinion of two appropriate independent"+
            "Medical Practitioners, is highly likely to lead to death within 6 months. The terminal illness must be diagnosed and confirmed by Medical Practitioners registered with"+
            "Indian Medical Association and approved by Us. We reserve the right for independent assessment of the Terminal Illness. Terminal illness due to AIDS is"+
            "excluded. For Limited Pay and Regular Pay policies the Death Benefit payable by Us is equal to the higher of A, B or C depending on the age at entry of the Life Assured"+
            "as specified in the table below :"+
            "a. The Policy shall terminate on payment of the benefit and all rights, benefits and interests under the Policy shall stand extinguished."+
            "b. The benefit amount may be taxable as per the prevailing tax laws."+

            "Accidental Death Benefit"+
            "a. In the event of the Life Assureds death due to an Accident, where both Accident and death occur during the Policy Term, the"+
            "Accidental Death Benefit as mentioned on the Policy Schedule will be payable by Us forthwith as a lump sum subject to the terms and conditions below."+
            "This is an additional benefit and will be paid in addition to the Death Benefit.",
    }

const LifePolicyPage = () => {


    return(<>


            <div className="heading">
                <h1>Our Life Insurance Policies:</h1>
                <h2> Protecting Your Life and Securities</h2>
            </div>
            <Tab2 props={array} type="life"/>

            <a href="/"><button className="backtohealth" id="backtohealth"> Back to view policies</button></a>


        </>
    )


}
export default LifePolicyPage
