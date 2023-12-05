import React, {useEffect, useState} from "react";
import Card from "./Card";
import Content from "./Content";
import axios from "axios";
import axiosConfiguration from "../../config/axiosConfiguration";


function TransportPolicy() {

    const [dataArray,setArray] = useState([])
    useEffect(() => {
        // const res = axios.get("http://localhost:3000/transportpolicies")
        axiosConfiguration.get("/transportpolicies").then(arr=>{
            console.log(arr.data)
            setArray(arr.data)
        })
    }, []);


    return (
        <>
            <h1 className="heading" style={{
                fontFamily: "Apple Chancery",
                backgroundColor: "#3e54ac",
                color: "white",
                borderRadius: "100px",
                textAlign: "center",
                margin: "2% 5% auto 5%",
                zIndex: "-1",
                fontSize: "xxx-large"

            }}>Motor Insurance</h1>

            <h2 style={{
                textAlign: "center",
                fontSize: "xx-large"

            }}>Buy/Renew Motor Insurance Policy Online Instantly
            </h2>
            <Content
                img="/Vehicle Sale-cuate.png"
                divContent={" Motor Insurance, also known as auto insurance, is a type of vehicle insurance policy that protects you and your car / bike from any risks and damages caused\n" +
                    "            from accidents, thefts or natural disasters. So, you will be financially secure in case of any losses that may be incurred because of any such unforeseen\n" +
                    "            circumstances. In addition to that, you will also be protected from third-party liabilities."}
                subHeading={"What is Motor Insurance ?"}
                c1='#3E54AC'
                c2='#D3E1FB'
            />
            <Content
                img="/tpl.png"
                divContent={[<strong>Third-party Car
                    Insurance</strong>, "in motor insurance refers to the legal and financial responsibility of the policyholder for any damage, injury or loss caused to a third-party in an\n" +
                "        accident involving the policyholder's vehicle. In other words, if you are at fault in an accident, your insurance policy will cover the damages and compensation\n" +
                "        to the other party involved in the accident.", <br/>,
                    <i><strong>Mandatory for every vehicle by law of Govt</strong></i>]}
                subHeading={"Third-Party Liability"}
                c1="crimson"
                c2={"rgba(255,0,0,0.5)"}
            />
            <Content
                img="/care-got-fire.png"
                divContent={[<strong> Own Damage Stand-Alone
                    Cover</strong>, "is a type of motor insurance policy that covers the damage to your own vehicle, regardless of who is at fault for the accident. With an Own Damage Stand Alone Cover, you can purchase coverage that specifically\n" +
                "    protects your vehicle from damages caused by",
                    <i><strong> accidents, natural disasters, theft, fire </strong></i>, "and other perils.\n" +
                    "    This policy can be beneficial for those who own an old or used vehicle or who have a low-value car,as it may be less expensive than other policies."]}
                subHeading={"Own Damage Stand Alone Cover"}
                c1="orange"
                c2="peachpuff"
            />
            <Content
                img="/injured-man.png"
                divContent={[
                    <strong>Personal Injury Protection
                        (PIP)</strong>, " is a type of car insurance coverage that pays for medical expenses, lost wages, and other expenses related to injuries sustained in a car accident."
                    , <br/>, "1)", <strong> Medical
                        expenses</strong>, ": PIP can pay for medical expenses related to injuries sustained in a car accident, including hospitalization, surgery, rehabilitation, and other medical treatments."
                    , <br/>, "2)", <strong>Lost
                        wages</strong>, " : PIP can provide compensation for lost wages if you are unable to work due to injuries sustained in a car accident."
                    , <br/>, "3)", <strong>Funeral
                        expenses</strong>, ": PIP may cover the cost of funeral expenses if someone is killed in a car accident."
                    , <br/>, <strong>Other
                        benefits</strong>, " : PIP may cover other expenses related to injuries sustained in a car accident, such as childcare or housekeeping services."
                ]}
                subHeading={"Personal Injury Protection (PIP)"}
                c1={"#FF4081"}
                c2={"#FFB6C1"}
            />
            <Content
                img="/compinc.png"
                divContent={[<strong>Comprehensive motor
                    insurance</strong>, " also known as fully-Comprehensive-Insurance is a type of car insurance policy that provides the widest range of coverage for your vehicle. This policy not only covers third-party liabilities but also covers damage to your own vehicle from various causes." +
                "Comprehensive motor insurance typically covers:", <br/>,

                    , <strong>1) Third-party
                        liabilities: </strong>, "  This includes damage to other vehicles, property, or injuries to other people in an accident caused by you."
                    , <br/>, <strong>2)Own
                        damage: </strong>, "This includes damage to your own vehicle, whether it's caused by an accident, theft, fire, natural disasters, or other perils."
                    , <br/>, <strong>3)Personal accident
                        cover:</strong>, " This includes coverage for injuries sustained by you or your passengers in an accident."
                    , <br/>, <strong>4)Add-on
                        covers:</strong>, "You can purchase additional coverage such as engine protection, zero depreciation cover, roadside assistance, and more."
                    , <i> Comprehensive motor insurance provides the most extensive protection for your vehicle and can
                        give you peace of mind while driving.</i>,
                ]}
                subHeading={"Comprehensive Motor Insurance"}
                c1={"#008000"}
                c2={"#99FF99"}
            />
            <div >
                <Card data={dataArray} type={"transport"}/>
            </div>

        </>
    );
}

export default TransportPolicy;
