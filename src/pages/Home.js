import NavBar from "../components/NavBar";
import Carousel from "../components/Home/Carousel";
import newpic from '../assets/images/healthinsu.jpg';


function Home(){
 return (
     <>
     <NavBar/>
         <Carousel img1={newpic}/>
     </>
 )

}

export default Home
