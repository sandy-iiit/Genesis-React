import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer/Footer";
import HealthApplication from "../../../components/Applications/HealthApplication/HealthApplication";
import {useParams} from "react-router-dom";


function HealthForm(){
    const {name,id,cover,term}=useParams()
    return(
        <>
        <NavBar/>
            <HealthApplication name={name} id={id} cover={cover} term={term} type={"Health"}/>
            <Footer/>
        </>
    )
}
export default HealthForm
