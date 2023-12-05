import React, {useEffect, useState} from "react";
import Card from "./Card";
import Content from "./Content";
import axios from "axios";
import axiosConfiguration from "../../config/axiosConfiguration";

const LifePolicy = () => {

    const [dataArray,setArray] = useState([])
    useEffect(() => {
        axiosConfiguration.get("/lifepolicies").then(arr=>{
            console.log(arr.data)
            setArray(arr.data)
        })
    }, []);
    return (
        <>
            <h1 className="heading" style={{
                fontFamily: "Apple Chancery",
                backgroundColor: "lightcoral",
                color: "white",
                borderRadius: "100px",
                textAlign: "center",
                margin: "3% 5% 3% 5%",
                zIndex: "-1",
                fontSize: "xxx-large"
            }}>Life Insurance</h1>
            <Content
                img="/life-insurance-word.jpg"
                divContent={"Life insurance is a type of insurance policy that pays out a lump sum of money to your beneficiaries upon your death.\n" +
                    "            The purpose of life insurance is to provide financial protection to your loved ones and dependents in case you pass away unexpectedly.\n" +
                    "        "}
                subHeading={"What is Life Insurance ?"}
                c1={"#5AA469"}
                c2={"#00FF00"}
            />
            <h2 className="subheading" style={{
                textAlign: "center",
                fontSize: "xx-large"
            }}
            >Types of LIFE Insurances We Offer :</h2>
            <Content
                img="/Public health-rafiki.png"
                subHeading={"Whole Life Insurance"}
                divContent={"Whole life insurance is a type of permanent life insurance that provides coverage for the lifetime of the policyholder,\n" +
                    "        as long as the premiums are paid. This policy provides coverage for the entire life of the policyholder and includes\n" +
                    "        an investment component,known as the cash value. The cash value of the policy grows tax-deferred and can be accessed\n" +
                    "        by the policyholder in various ways, such as borrowing against it or surrendering the policy for its cash value.\n" +
                    "    "}
                c1={"#0000FF"}
                c2={"#6495ED"}
            />
            <Content
                img="/Public health-pana.png"
                subHeading={"Whole Life Insurance"}
                divContent={"Whole life insurance is a type of permanent life insurance that provides coverage for the lifetime of the policyholder,\n" +
                    "        as long as the premiums are paid. This policy provides coverage for the entire life of the policyholder and includes\n" +
                    "        an investment component,known as the cash value. The cash value of the policy grows tax-deferred and can be accessed\n" +
                    "        by the policyholder in various ways, such as borrowing against it or surrendering the policy for its cash value.\n" +
                    "    "}
                c1={"#f44336"}
                c2={"lightcoral"}
            />

            <div >
                <Card data={dataArray} type={"life"}/>
            </div>
        </>
    )
}
export default LifePolicy;
