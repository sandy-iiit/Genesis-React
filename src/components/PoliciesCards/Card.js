import React from "react";
import "./Card.css"
import _ from "lodash"
import { Link } from "react-router-dom";

const Card = ({ data, type }) => {
    return (
        <div className="container12">
            {data.map((item, index) => {
                const { _id, details, benefits, TC, GE, __v, Premium, keyfeatures, ...rest } = item;
                console.log(rest)
                const link = "/PolicyDetails/" + type + "/" + _id
                // const link="/PolicyDetails/"+type+"/"+rest.Name+"/"+_id+"/"+rest.Cover+"/"+rest.Term
                console.log(link)
                return (
                    <div key={index} className="card12">
                        <div className="card13">
                            {Object.entries(rest).map(([key, value]) => (
                                <div key={key} className="content">
                                    {value && (

                                        <p className='p'>{_.capitalize(key)} : {_.capitalize(value)}</p>

                                    )}
                                </div>
                            ))}

                        </div>
                        <Link to={link}> <button className="button">Select</button></Link>
                    </div>
                );
            })}
        </div>
    );
};
export default Card;
