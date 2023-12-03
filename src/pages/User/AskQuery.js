import NavBar from "../../components/NavBar";
import Query from "../../components/Queries/Query";
import image from "../../assets/images/askQuery/query.svg"

function AskQuery(){

    return(
        <>
            <NavBar/>
            <Query image={image}/>
        </>
    )
}

export default AskQuery
