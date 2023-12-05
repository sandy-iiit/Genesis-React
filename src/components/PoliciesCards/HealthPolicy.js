import React, {useEffect, useState} from "react";
import Card from "./Card";
import Content from "./Content";
import axios from "axios";
import axiosConfiguration from "../../config/axiosConfiguration";


function HealthPolicy () {

    const [dataArray,setArray] = useState([])
    useEffect(() => {
        axiosConfiguration.get("/healthpolicies").then(arr=>{
            console.log(arr.data)
            setArray(arr.data)
        })
    }, []);

    return(<>

        <div style={{
            backgroundColor: "dodgerblue",
            color: "white",
            borderRadius: "20px",
            textAlign: "center",
            margin: "auto 5% auto 5%",
            zIndex: "-1",
            fontSize:"1.5em",
            minHeight:"20px",

        }}>
            <h1>Our Health Insurance Policies:</h1>
            <h2> Protecting Your Health and Finances</h2>
        </div>

        < Content
            divContent={"Health insurance is a type of insurance that helps individuals and families pay for medical expenses. This provides Financial protection against the cost of medical and surgical expenses .Health insurance policies can cover a wide range of medical expenses, including hospitalization, doctor visits, prescription drugs, and medical procedures. There are several types of health insurance plans, including HMOs, PPOs, and high-deductible health plans (HDHPs)."}
            subHeading={"WHY YOU NEED IT?"}
            img={"/Insurance-pana.png"}
            c2={"#F8ABAB"}
            c1={"#800000"}
        />

        <Content
            divContent={["↪   Medical expenses when required which quickly becomes expensive.Health insurance can \n" +
            "    help to protect you from financial hardship providing you expenses\n" , <br/>,
                "↪   Covers preventive care services like annual check-ups, vaccinations, and screenings, \n" +
                "    which can help detect and prevent health problems early on.\n" ,<br/>,
                "↪   Having health insurance can give you access to high-quality healthcare providers, \n" +
                "    hospitals, and medical facilities, which may not be available to those without insurance.\n",<br/>,
                "↪   Having health insurance can provide peace of mind covered under unexpected medical expenses.\n" +
                "    It can also help to reduce stress and anxiety related to medical issues."]}
            subHeading={"WHY YOU NEED IT?"}
            img={"Doctor-rafiki.png"}
            c1={"#00008B"}
            c2={"#C0DAFF"}
        />

        <div style={{
            borderRadius: "40px",
            borderStyle:" solid",
            borderColor: "rgb(143, 83, 0)",
            margin:" 50px 100px 50px 100px"
        }}>
            <div className="prereq" id="Prereq">
                <div className="prereqhead" id="prereqhead" style={{
                    color:"white",
                    border:"2px",
                    borderRadius: "1000px",
                    backgroundColor:"dodgerblue",
                    borderStyle: "ridge",
                    textAlign: "center",
                    margin: "15px 10px 25px 25px"
                }}>
                    <h3>TYPES OF INSURANCE HEALTH POLICIES THAT WE PROVIDE</h3>
                </div>

                <div className="prereqbodyleft">
                    <strong>
                        <h1 style={{ textAlign: 'center' }}>Indemnity Plans</h1>
                    </strong>
                    <p>
                        These plans allow you to choose any doctor or hospital, and they will
                        reimburse a portion of the cost of the medical services you receive
                    </p>
                </div>

                <div className="prereqbodyright">
                    <strong>
                        <h1 style={{ textAlign: 'center' }}>Health Maintenance Org.</h1>
                    </strong>
                    <p>
                        These plans require you to choose a primary care physician and receive
                        all of your medical care through the HMO's network of doctors and
                        hospitals.
                    </p>
                </div>

                <div className="prereqbodyleft">
                    <strong>
                        <h1 style={{ textAlign: 'center' }}>Preferred Provider Org.</h1>
                    </strong>
                    <p>
                        These plans allow you to see any doctor or hospital, but you will pay
                        less if you choose a provider within the PPO's network.
                    </p>
                </div>

                <div className="prereqbodyright">
                    <strong>
                        <h1 style={{ textAlign: 'center' }}>Point of Service</h1>
                    </strong>
                    <p>
                        These plans combine elements of both HMOs and PPOs, giving you more
                        flexibility in choosing doctors and hospitals while still providing
                        cost savings for using providers within the network.
                    </p>
                </div>
            </div>
        </div>

        <Card data={dataArray} type={"health"}/>

    </>)
}

export default HealthPolicy
