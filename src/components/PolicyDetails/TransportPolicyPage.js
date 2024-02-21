import React, {useEffect, useState} from "react";
import Tab2 from "./Tabs2";
import './PolicyPage.css';
import {useParams} from "react-router-dom";
import axios from "axios";
import axiosConfiguration from "../../config/axiosConfiguration";


function TransportPolicyPage()
{
    const {id}=useParams()
    console.log(id)
    const [ob,setOb]=useState({})

    useEffect(()=>{

        axiosConfiguration.get("/buy-policy/"+id).then((p)=>{
            setOb(p.data)
            console.log(ob)
        })

    },[])

    const array ={
        id:id,
        name:ob.name,
        cover:ob.term,
        amount:ob.amount,
        details:ob.details,
        GE:ob.GE,
        Type:ob.type,
        KeyFeatures:ob.keyfeatures,
        TC:ob.TC,
        benefits:ob.benefits
    }


    return(<>


            <div className="heading">
                <h1>Our Transport Insurance Policies:</h1>
                <h2> Protecting Your Vehicle and Assets</h2>
            </div>


            <Tab2 data={array} type="transport" id={id} />

            <button href="/" className="backtohealth" id="backtohealth"> Back to view policies</button>


        </>
    )


}
export default TransportPolicyPage
