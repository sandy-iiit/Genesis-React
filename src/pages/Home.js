import NavBar from "../components/NavBar";
import Carousel from "../components/Home/Carousel";
import newpic from '../assets/images/healthinsu.jpg';
import newpic2 from '../assets/images/home-offers/offer-2@2x.jpg';
import newpic3 from '../assets/images/home-offers/offer-3@2x.jpg';
import newpic4 from '../assets/images/home-offers/images_pexels_com-pexels-photo-725255.png';
import newpic5 from '../assets/images/home-offers/images_pexels_com-pexels-photo-799443.png';
import newpic6 from '../assets/images/home-offers/images_pexels_com-pexels-photo-7163953.png';
import newpic7 from '../assets/images/home-offers/images_pexels_com-pexels-photo-7688374.png';
import newpic8 from '../assets/images/home-offers/offer-wide@2x.jpg';
import Offers from "../components/Home/Offers";
import {useEffect} from "react";
import Footer from "../components/Footer/Footer";


function Home(){
    const images=[newpic5,newpic6,newpic8,newpic2,newpic3,newpic4]

 return (
     <>
     <NavBar/>
         <Carousel img1={newpic}/>
         <Offers images={images}/>
         <Footer/>
     </>
 )

}

export default Home
