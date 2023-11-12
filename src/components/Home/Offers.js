import {useSelector} from "react-redux";

const offers=(props)=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const user=useSelector((state)=>state.auth)
    console.log(user)
    return(
        <>
            <div className="fullwidth-block" data-bg-color="#f1f1f1">
                <div className="container">
                    <h2 className="section-title"><b>GENESIS OFFERS</b></h2>
                    <small className="section-subtitle"><b>Enjoy the Safety and Happiness</b></small>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="offer caption-top">
                                <img style={{width:'100%'}} src={props.images[0]} alt="offer 1"/>
                                    <div style={{width:'100%'}} className={"caption"}>
                                        <h3 className="offer-title">Happy Life</h3>
                                        <small>Insurance make you beautiful</small>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="offer caption-bottom">
                                        <img style={{width:'100%'}} src={props.images[1]} alt="offer 2"/>
                                            <div className="caption">
                                                <h3 className="offer-title">Be Happy</h3>
                                                <small>life is beautiful</small>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="offer caption-bottom">
                                        <img style={{width:'100%'}} src={props.images[2]}
                                             alt="offer 3"/>
                                            <div className="caption">
                                                <h3 className="offer-title">Claim life insurance</h3>
                                                <small> make yourself beautiful and better</small>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="offer caption-bottom">
                                        <img style={{width:'100%'}} src={props.images[3]}
                                             alt="offer 2"/>
                                            <div className="caption">
                                                <h3 className="offer-title">Happy Future</h3>
                                                <small>protect your dears one's</small>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="offer caption-bottom">
                                        <img style={{width:'100%'}} src={props.images[4]}
                                             alt="offer 2"/>
                                            <div className="caption">
                                                <h3 className="offer-title">Curabitur vehicula</h3>
                                                <small>Conubia nostra per inceptos</small>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="offer caption-bottom">
                                        <img style={{width:'100%'}} src={props.images[5]}
                                             alt="offer 2"/>
                                            <div className="caption">
                                                <h3 className="offer-title">Curabitur vehicula</h3>
                                                <small>Conubia nostra per inceptos</small>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>)
}

export default offers
