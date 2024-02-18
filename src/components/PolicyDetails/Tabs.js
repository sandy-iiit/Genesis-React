/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Accordion from "./Accordion"
import KeyTerms from "./KeyTerms";
import "./PolicyPage.css"
import {Link} from "react-router-dom";
function openInfo(info) {
    var i;
    var x = document.getElementsByClassName("info");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    var element = document.getElementById(info);
    if (element) {
        element.style.display = "block";
    }
}
function Tabs({dataarray,id}) {

    const array= dataarray

    return(
        <>

            <div className="scroll-mobile">
                <ul className="">
                    <button  className="buttono button1" onClick={()=>openInfo('Details')}>Policy Details</button>
                    <button  className="buttono button2" onClick={()=>openInfo('T&C')}>Policy Terms and Conditions</button>
                    <button  className="buttono button3" onClick={()=>openInfo('Benefits')}>Benefits</button>
                    <button className="buttono button5" onClick={()=>openInfo('buyPolicy')}>Buy Policy</button>
                </ul>
            </div>
            <div className="Details info" id="Details">
                <div className="detailmatter" id="detailmatter">
                    <h2><strong>Policy Name:</strong>{dataarray.Name}</h2>
                    <h2><strong>Cover Amount:</strong>{dataarray.Cover} /-</h2>
                    <h2><strong>Term:</strong>{dataarray.Term} Years</h2>
                    <h2><strong>Type of plan:</strong>{dataarray.Type}</h2>
                </div>
                <div className="keyfeatures" id="keyfeatures">
                    <h3> KEY FEATURES 🩺🛡️</h3>
                    <p style={{ whiteSpace: 'pre-line' }}>{dataarray.KeyFeatures}</p>
                </div>

            </div>
            <div className="T&C info" id="T&C" style={{display:'none'}}>
                <KeyTerms
                    Keyterms={dataarray.keyterms}
                    conditionalhead={dataarray.conditionalhead}
                    TC={dataarray.TC}
                />
            </div>
            <Accordion dataarray={array} />
            <div className="buyPolicy info" id="buyPolicy" style={{display:"none"}}>
                <Link to={"/healthApplication/"+dataarray.Name+"/"+dataarray.id+"/"+dataarray.Cover+"/"+dataarray.Term} style={{textAlign:'center'}} > <h3>Go to application</h3></Link>
            </div>
        </>

    )
}

export default Tabs;
