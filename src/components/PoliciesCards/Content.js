import React from "react";

export default function Content({subHeading, img, divContent, c1, c2}) {


    return (
        <section>
            <h2 style={{
                fontSize: "xx-large",
                margin: "auto 5% auto 10%"
            }}>
                {subHeading}
            </h2>
            <div style={{
                // fontSize:"medium",
                display: "flex",
                borderStyle: "solid",
                borderColor: c1,
                borderWidth: "2.5px",
                margin: "1% 10% 3% 10%",
                borderRadius: "40px",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
            }}>
                <p style={{

                    margin: "5% auto 5% 5%",
                    fontSize: "25px",
                    width: "90%",
                    lineHeight: "50px",
                    fontFamily: "Microsoft JhengHei UI",
                    backgroundColor: c2,
                    zIndex: "-1",
                    borderRadius: "20px",
                    padding: "2%"
                }}>
                    {divContent}
                </p>
                <img style={{

                    height: "25%",
                    width: "25%"
                }} src={img} alt={img}/>
            </div>
        </section>
    )
}
