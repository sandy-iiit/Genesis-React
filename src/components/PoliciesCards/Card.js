import React from "react";
import "./Card.css"
import {Link} from "react-router-dom";

const Card = ({data,type}) => {
    return (
        <div className="container12">
            {data.map((item, index) => {
                const link="/PolicyDetails/"+type
                const {_id,details,benefits,TC,GE,__v,Premium,keyfeatures, ...rest} = item;
                return (
                    <div key={index} className="card12">
                        {Object.entries(rest).map(([key, value]) => (
                            <div key={key}>
                                {value && (
                                    <div>
                                        <h3>{key.toUpperCase()}: {value}</h3>
                                    </div>
                                )}
                            </div>
                        ))}
                        <button className="button"><Link to={link}>Select</Link></button>
                    </div>
                );
            })}
        </div>
    );
};
export default Card;
