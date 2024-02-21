import React, {useEffect, useState} from "react";
import Tab2 from "./Tabs2";
import './PolicyPage.css';
import {useParams} from "react-router-dom";
import axios from "axios";
import axiosConfiguration from "../../config/axiosConfiguration";


const LifePolicyPage = () => {

    const {id}=useParams()
    console.log(id)
    const [ob,setOb]=useState({})

    useEffect(()=>{
        axiosConfiguration.get("/buypolicy3/"+id).then((p)=>{
            setOb(p.data)
            console.log(ob)
        })

    },[])



    const array ={
        id:id,
        name:ob.name,
        cover:ob.term,
        IDV:ob.coverAmount,
        duration:ob.duration,
        Premium:ob.Premium,
        details:ob.details,
        TC:ob.TC,
        GE:ob.GE,
        benefits:ob.benefits,
    }

    return(<>


            <div className="heading">
                <h1>Our Life Insurance Policies:</h1>
                <h2> Protecting Your Life and Securities</h2>
            </div>
            <Tab2 data={array} type="life" id={id} />

            <a href="/"><button className="backtohealth" id="backtohealth"> Back to view policies</button></a>


        </>
    )


}
export default LifePolicyPage
