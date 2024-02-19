import React from "react";
import "./Card.css"
import {Link} from "react-router-dom";

const Card = ({data,type}) => {
    return (
        <div className="container12">
            {data.map((item, index) => {
                const {_id,details,benefits,TC,GE,__v,Premium,keyfeatures, ...rest} = item;
                console.log(rest)
                const link="/PolicyDetails/"+type+"/"+_id
                // const link="/PolicyDetails/"+type+"/"+rest.Name+"/"+_id+"/"+rest.Cover+"/"+rest.Term
                console.log(link)
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
                       <Link to={link}> <button className="button">Select</button></Link>
                    </div>
                );
            })}
        </div>
    );
};
export default Card;
