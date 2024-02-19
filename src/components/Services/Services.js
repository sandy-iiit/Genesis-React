import React from 'react'
import styles from './Services.module.css'
import QueryGenerator from './QueryGenerator'
import NavBar from '../NavBar'
import Footer from '../Footer/Footer'
import WriteQuery from './WriteQuery'
import FAQS from './FAQS'


function Services(props) {
    return (
        <>
            <NavBar/>
            <QueryGenerator/>
            <WriteQuery/>
            <FAQS/>
            <Footer/>
        </>
    )
}


export default Services
