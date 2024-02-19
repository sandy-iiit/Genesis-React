import NavBar from "../components/NavBar";
import Carousel from "../components/Home/Carousel";
import newpic from '../assets/images/healthinsu.jpg';
import newpic2 from '../assets/images/home-offers/offer-2@2x.jpg';
import newpic3 from '../assets/images/home-offers/offer-3@2x.jpg';
import newpic4 from '../assets/images/home-offers/images_pexels_com-pexels-photo-725255.png';
import newpic5 from '../assets/images/home-offers/images_pexels_com-pexels-photo-799443.png';
import newpic6 from '../assets/images/home-offers/images_pexels_com-pexels-photo-7163953.png';
import newpic8 from '../assets/images/home-offers/offer-wide@2x.jpg';
import newpic9 from '../assets/images/home-offers/carousel2.jpeg';
import newpic10 from '../assets/images/home-offers/carousel3.jpeg';
import Offers from "../components/Home/Offers";
import {useEffect, useState} from "react";
import Footer from "../components/Footer/Footer";
import FindAgent from "../components/Home/FindAgent";
import InsuranceCard from "../components/Home/InsuranceCard";
import LatestNews from "../components/Home/LatestNews";
<<<<<<< HEAD
=======
import LoadingPage from "../components/LoadingPage";
>>>>>>> 53f162f130205c3c9c8f4c5a73bddc3878930479


function Home(){
    const images=[newpic5,newpic6,newpic8,newpic2,newpic3,newpic4]

<<<<<<< HEAD
 return (
     <>
     <NavBar/>
         <Carousel img1={newpic}/>
         <Offers images={images}/>
         <FindAgent/>
         <InsuranceCard/>
         <LatestNews/>
         <Footer/>
     </>
 )
=======
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
                <Carousel img1={newpic} img2={newpic9} img3={newpic10}/>
                <Offers images={images}/>
                <FindAgent/>
                <InsuranceCard/>
                <LatestNews/>
                <Footer/>
                </>
            }
        </>
    )
>>>>>>> 53f162f130205c3c9c8f4c5a73bddc3878930479

}



export default Home
