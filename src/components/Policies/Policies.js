import React from 'react'
import NavBar from '../NavBar'
import PolicyCard from './PolicyCard'
import HealthInsurancePhoto from '../../../src/assets/images/Policiesphotos/Insurancehealth.mp4'
import ProtectYourCar from '../../../src/assets/images/Policiesphotos/Coronavirus Border Closure.gif'
import LifeInsurancePhoto from '../../../src/assets/images/Policiesphotos/Insurance.mp4'
import Footer from "../Footer/Footer";
const Policies = () => {
    const isAuthenticated = true;
    return (
        <>
            <NavBar/>
            <PolicyCard
                title="CLAIM HEALTH INSURANCE"
                videoSrc={HealthInsurancePhoto}
                description="Our goal is to provide you with valuable information
        and resources on health insurance to help you make
        informed decisions about your healthcare needs.
        We understand that choosing the right health insurance
        plan can be overwhelming, which is why we've created
        a user-friendly platform that provides you with
        easy-to-understand information and expert guidance.
        We're here to support you every step of the way in
        finding the right health insurance plan that fits your
        needs and budget. Explore our website to learn more and
        don't hesitate to contact us if you have any questions or concerns. Your health and well-being ar
        e our top priorities."
                link="/healthpolicies"
                isAuthenticated={isAuthenticated}
            />
            <PolicyCard
                title="PROTECT YOUR CAR"
                videoSrc={ProtectYourCar}
                description="insurance policy that protects you financially in case of accidents or other incidents involving your
        car. In exchange for a regular premium payment, your insurance company will cover the cost of damages,
        injuries, or other losses that result from such incidents.which is why we've created a user-friendly
        platform that provides you with easy-to-understand information and expert guidance. We're here to
        support you every step of the way in finding the right health insurance plan that fits your needs and
        budget. Explore our website to learn more and don't hesitate to contact us if you have any questions or
        concerns. Your health and well-being ar e our top priorities."
                link="/transportpolicies"
                isAuthenticated={isAuthenticated}
            />
            <PolicyCard
                title="CLAIM LIFE INSURANCE"
                videoSrc={LifeInsurancePhoto}
                description="Our goal is to provide you with valuable information
        and resources on life insurance to help you make
        informed decisions about your healthcare needs.
        We understand that choosing the right life insurance
        plan can be overwhelming, which is why we've created
        a user-friendly platform that provides you with
        easy-to-understand information and expert guidance.
        We're here to support you every step of the way in
        finding the right health insurance plan that fits your
        needs and budget. Explore our website to learn more and
        don't hesitate to contact us if you have any questions or concerns. Your health and well-being ar
        e our top priorities."
                link="/lifepolicies"
                isAuthenticated={isAuthenticated}
            />
            <Footer/>
        </>

    )
}

export default Policies
