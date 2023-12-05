/* eslint-disable react/prop-types */
// import React from "react"
// import { useEffect } from "react";
// import Accordion from "./accordion"
import KeyTerms from "./KeyTerms";
import "./PolicyPage.css"
import {Link} from "react-router-dom";
function openInfo(info)
{
    console.log(info)
    var i;
    var x = document.getElementsByClassName("info");
    for(i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    document.getElementById(info).style.display="block";
    console.log(document.getElementById(info));

}

function Tab2({props}) {
    let link=""
    if(props.type==="life"){
        link="/lifeApplication"
    }
    else if(props.type==="/transportApplication"){
        link="/transportApplication"
    }

    console.log(link)

    return(
        <>

            <div className="scroll-mobile">
                <ul className="">
                    <button className="buttono button1" onClick={() => openInfo('Details')}>Policy Details</button>
                    <button className="buttono button2" onClick={() => openInfo('T&C')}>Policy Terms and Conditions</button>
                    <button className="buttono button3" onClick={() => openInfo('GeneralException')}>General Exceptions</button>
                    <button className="buttono button4" onClick={() => openInfo('Benefits')}>Benefits</button>
                    <button className="buttono button5" onClick={() => openInfo('buyPolicy')}>Buy Policy</button>
                </ul>
            </div>    <div className="Details info" id="Details">
            <div className="detailmatter" id="detailmatter">
                <h2>Name of policy:{props.Name}</h2>
                <h2>IDV:{props.IDV} /-</h2>
                <h2>Term:{props.Term} Years</h2>

            </div>
            <div className="keyfeatures" id="keyfeatures">
                <h3> KEY FEATURES </h3>
                <p style={{ whiteSpace: 'pre-line' }}>{props.KeyFeatures}</p>
            </div>

        </div>
            <div className="T&C info" id="T&C" style={{display:'none'}}>
                <KeyTerms
                    TC={props.TC}
                />
            </div>
            <div className="GeneralException info" id="GeneralException" style={{display: 'none'}}>
                <h2 style={{textAlign: "center"}}>General Exceptions</h2>
                <p style={{whiteSpace: 'pre-line'}}> {props.ge}</p>

            </div>

            <div id="Benefits" className="Benefits info" style={{display:'none'}}>
                <h2 style={{textAlign: "center"}}>Benefits</h2>

                <p style={{whiteSpace: 'pre-line'}}>{props.benefits}</p>

            </div>


            <div className="buyPolicy info" id="buyPolicy" style={{display:"none"}}>
                <Link to={props.type==="life"?"/lifeApplication":"/transportApplication"} style={{textAlign:'center'}} > <h3>Go to application</h3></Link>
            </div>

        </>

    )
}

export default Tab2;
