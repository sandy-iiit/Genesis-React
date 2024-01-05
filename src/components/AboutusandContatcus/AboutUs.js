// AboutUs.js
import React, {useEffect, useState} from 'react';
import AboutUsImgSec from "./AboutUsImgSec"
import NavBar from '../NavBar';
import Footer from '../Footer/Footer';
import LoadingPage from "../LoadingPage";

const AboutUs = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an asynchronous operation (e.g., fetching data) that takes 2 seconds
        const fetchData = async () => {
            // Your asynchronous operation here...

            // Simulate a delay
            await new Promise(resolve => setTimeout(resolve, 500));

            // Set isLoading to false when the operation is complete
            setIsLoading(false);
        };
        fetchData().then(r => {})
    }, []); // Empty dependency array ensures that the effect runs once after the initial render

    return (


                <div>
        <NavBar/>
        <div className="fullwidth-block" data-bg-color="#f1f1f1">
            <div className="container">
                <h2 className="section-title">The history</h2>
                <p style={{fontSize: '1.5rem'}}>
                    We started this company in 2023. Our insurance company has a rich history that spans over several
                    decades...
                    It all began with a vision to provide top-quality insurance products and services to our community.
                    Our founders recognized the need for affordable insurance solutions that could protect individuals
                    and businesses from unforeseen risks and losses.
                    Over the years, we have grown and expanded our offerings to meet the evolving needs of our clients.
                    We have built a reputation for excellence in the insurance industry, thanks to our commitment to
                    providing exceptional customer service and innovative insurance products.
                    Today, we continue to uphold our founding principles of integrity, reliability, and trust. We are
                    proud to serve our clients with the same dedication and passion that our founders had when they
                    started this company. As we look to the future, we are excited to continue to grow and evolve,
                    always striving to exceed our clients' expectations and provide them with the best insurance
                    solutions possible.
                </p>
            </div>
        </div>

        <div className="page">
            <div className="fullwidth-block">
                <div className="container">
                    <h1 className="entry-title">Why you should choose us?</h1>
                    <p style={{fontSize: '1.5rem'}}>Welcome to Genesis Insurers! We warmly welcome you to our website
                        where the whole importance is about your wellbeing.
                        At our insurance company, we are committed to providing our clients with the best possible
                        coverage for their unique needs. Our team of experienced professionals is dedicated to
                        delivering exceptional customer service and support every step of the way. We understand that
                        insurance can be complicated, which is why we strive to make the process as easy and stress-free
                        as possible for our clients. Whether you are looking for home, auto, or life insurance, we have
                        a wide range of policies to choose from, all of which are designed to provide you with peace of
                        mind and protection. Contact us today to learn more about how we can help you safeguard your
                        future. We are dedicated to providing our clients with the best insurance solutions to protect
                        their valuable assets. We understand that insurance can be a complex and confusing topic, which
                        is why we strive to make the process as simple and straightforward as possible. Our team of
                        experienced professionals is committed to helping you find the right coverage to meet your
                        unique needs and budget. Whether you are looking for home, auto, life, or business insurance, we
                        have the expertise to guide you through the process and ensure that you are adequately
                        protected. Trust us to be your insurance partner and provide you with peace of mind knowing that
                        your insurance needs are in good hands.
                    </p>
                </div>
            </div>
        </div>

        <AboutUsImgSec/>
        <Footer/>
    </div>


  );
};

export default AboutUs;
