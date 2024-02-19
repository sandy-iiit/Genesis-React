/* eslint-disable react/prop-types */

import { useState } from 'react';
import "./PolicyPage.css";

const AccordionSection = ({ id, title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
        // if (isOpen) {
        //   document.getElementById(content).style.display = "block";
        // }
    };


    return (
        <>
            <input type="radio" name="accordion" id={id} checked={isOpen} onChange={handleToggle} />
            <section className="box">
                <label className="box-title" htmlFor={id}>
                    <span className="coveragetitle">{title}</span>
                </label>
                <label className="box-close" htmlFor="acc-close"></label>
                <div id="content" className="box-content">{content}</div>
            </section>
        </>
    );


};

const Accordion = ({dataarray}) => {


    return (
        <div id="Benefits" className="Benefits info" style={{ display: 'none' }}>
            {/* Coverages */}
            <nav className="accordion arrows">
                <header className="box1">
                    <label className="box-title">Coverages:</label>
                </header>
                <AccordionSection
                    id='cb1'
                    title={dataarray.nrl}
                    content="Room rent limit is the maximum amount per day cost allowed by the insurer. Related expenses, such as doctor consultation etc. are paid in proportion to the room rent limit. Look out for plans with No Room Rent limit"
                />
                <AccordionSection
                    id='cb2'title={`RESTORATION COVER: ${dataarray.rc}`}
                    content="Very useful feature, in case the sum Insured gets exhausted in a year due to multiple claims or a large claim. Insurer restores the sum insured to provide continued coverage to policyholders."
                />
                <AccordionSection
                    id='cb3'
                    title={`CASHLESS HOSPITALS:${dataarray.ch}`}
                    content="Hospitals that have a direct tie-up with the insurance company, where insured can avail cashless treatment. Larger the network in your area, better it is."
                />
                <AccordionSection
                    id='cb4'
                    title={`COPAY :${dataarray.copay}`}
                    content="Co-pay is the share of claim to be paid by the policyholder, while the rest is paid by the insurer. Always look out for plan with 0% co-pay or minimum co-payment."
                />
                <AccordionSection
                    id='cb5'
                    title={`MATERNITY COVER: ${dataarray.mc}`}
                    content="Maternity insurance covers the expenses for normal and caesarean deliveries up to the sum insured under a policy term"
                />
                <AccordionSection
                    id='cb6'
                    title={`PRE-HOSPITALISATION COVERAGE✅:${dataarray.pre}  DAYS`}
                    content="Expenses incurred AFTER hospitalization, such as doctor visits, diagnostic tests etc. Insurance company pays for such expenses upto a certain number of days prior to hospitalization."
                />
                <AccordionSection
                    id='cb7'
                    title={`POST-HOSPITALISATION COVERAGE DAYS✅:${dataarray.post}`}
                    content="Expenses incurred AFTER hospitalization, such as doctor visits, diagnostic tests etc. Insurance company pays for such expenses upto a certain number of days prior to hospitalization."
                />
                <AccordionSection
                    id='cb8'
                    title={`EXISTING-ILLNESS WAITING PERIOD :${dataarray.eiwp} YEARS`}
                    content="The minimum period policyholder needs to wait before filing a claim. In case of pre-exisitng illnesses such as diabetes, thyroid etc., look for plans with less waiting periods."
                />
            </nav>

            {/* Benefits */}
            <nav className="accordion arrows">
                <header className="box2">
                    <label className="box-title">Benefits</label>
                </header>
                <AccordionSection
                    id='cb9'
                    title={`NO CLAIM BONUS: ${dataarray.ncb} Lakh Annually`}
                    content='No Claim Bonus is the reward for not making a claim. Depending on plan, Insurer adds a 5%-100% bonus to the Sum Insured at no extra premium..'
                />
                <AccordionSection
                    id='cb10'
                    title={`HOME HOSPITALISATION: ${dataarray.hh}`}
                    content='This feature covers for scenarios where hospital bed is not available AND the doctor has recommended treatment at home.'
                />
                <AccordionSection
                    id='cb11'
                    title={`AMBULANCE CHARGES:${dataarray.ac}`}
                    content='Covers for ambulance charges before or after the hospitalization.'
                />
            </nav>

            {/* Other Benefits */}
            <div className="otherben" id="otherben">
                <header className="box3">
                    <label className="box-title">Other Benefits</label>
                </header>
                <section className="box">
                    <ul style={{ padding: '2vh' }}>
                        <li style={{ padding: '2vh' }}>{dataarray.otb1}</li>
                    </ul>
                </section>
                <section className="box">
                    <ul style={{ padding: '2vh' }}>
                        <li style={{ padding: '2vh' }}>{dataarray.otb2}</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Accordion;
