import NavBar from "../components/NavBar";
import Carousel from "../components/Home/Carousel";
import newpic from '../assets/images/healthinsu.jpg';
import newpic2 from '../assets/images/home-offers/offer-2@2x.jpg';
import newpic3 from '../assets/images/home-offers/offer-3@2x.jpg';
import newpic4 from '../assets/images/home-offers/images_pexels_com-pexels-photo-725255.png';
import newpic5 from '../assets/images/home-offers/images_pexels_com-pexels-photo-799443.png';
import newpic6 from '../assets/images/home-offers/images_pexels_com-pexels-photo-7163953.png';
import newpic8 from '../assets/images/home-offers/offer-wide@2x.jpg';
import Offers from "../components/Home/Offers";
import {useEffect, useState} from "react";
import Footer from "../components/Footer/Footer";
import FindAgent from "../components/Home/FindAgent";
import InsuranceCard from "../components/Home/InsuranceCard";
import LatestNews from "../components/Home/LatestNews";
import LoadingPage from "../components/LoadingPage";


function Home(){
    const images=[newpic5,newpic6,newpic8,newpic2,newpic3,newpic4]

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an asynchronous operation (e.g., fetching data) that takes 2 seconds
        const fetchData = async () => {
            // Your asynchronous operation here...

            // Simulate a delay
            await new Promise(resolve => setTimeout(resolve, 1300));

            // Set isLoading to false when the operation is complete
            setIsLoading(false);
        };
        fetchData().then(r => {})
        }, []); // Empty dependency array ensures that the effect runs once after the initial render


    return (
        <>
            {isLoading && <LoadingPage/>}
            {!isLoading && <>
                <NavBar/>
                <Carousel img1={newpic}/>
                <Offers images={images}/>
                <FindAgent/>
                <InsuranceCard/>
                <LatestNews/>
                <Footer/>
                </>
            }
        </>
    )

}



export default Home
