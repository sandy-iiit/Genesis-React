/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './PolicyPage.css';

const KeyTerms = ({ Keyterms, conditionalhead, TC }) => {
    return (
        <>


            <div className="keyterms" id="keyterms">
                <div>{Keyterms}</div>
                <div>

                </div>

                <p style={{ textAlign: 'center' }}>**REFER THE BROCHURE FOR ALL TERMS AND CONDITIONS</p>
                <div className="conditionhead" id="conditionhead">
                    {conditionalhead}
                </div>
                <div className="conditionbody" id="conditionbody">
                    {TC}
                </div>
            </div>
        </>
    );
};

export default KeyTerms;
