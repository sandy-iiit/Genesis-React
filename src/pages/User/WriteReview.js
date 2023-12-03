import NavBar from "../../components/NavBar";
import Review from "../../components/Reviews/Review";
import image from "../../assets/images/Online Review-rafiki.svg"
function WriteReview(){

    return(
        <>
        <NavBar/>
        <Review image={image}/>
        </>
    )
}

export default WriteReview
