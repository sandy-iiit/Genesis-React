// AgentDashboard.jsx
import React from 'react';
import styles from './AgentDashboard.module.css';
import AgentCard from '../AgentCards/AgentCards';
import AdminCard from '../AdminCards/AdminCard';
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar";
import {useSelector} from "react-redux";
import lifeDash from "../../../assets/images/dashboard_pics/life-insurance.png"
import agentpic from "../../../assets/images/dashboard_pics/agent application.png"
import annpic from "../../../assets/images/dashboard_pics/annocument.png"
import carpic from "../../../assets/images/dashboard_pics/car-insurance.png"
import compstatpic from "../../../assets/images/dashboard_pics/company-stats.png"
import healthpic from "../../../assets/images/dashboard_pics/healthcare.png"
import poldespic from "../../../assets/images/dashboard_pics/policy-designing.png"
import uerlistpic from "../../../assets/images/dashboard_pics/user-list.png"

const AgentDashboard = () => {
    // Array to store information for each card
    const user=useSelector((state)=>state.auth)
    const cardsData = [
        {
            type: 'Agent',
            iconSrc: poldespic,
            title: 'Policy Designing',
            description: 'Design and create new insurance policies for customers.',
            link: '/designPolicy',
        },

        {
            type: 'Agent',
            iconSrc: compstatpic,
            title: 'Company Stats',
            description: 'Keep an eye on the Company stats based on insurance.',
            link: '/companyStats',
        },

        {
            type: 'Agent',
            iconSrc:annpic,
            title: 'Announcement',
            description: 'Announcement to customers for insurance policy offers.',
            link: '/announcement',
        },
        {
            type: 'Agent',
            iconSrc: uerlistpic,
            title: 'Track Policies',
            description: 'View and track the status of customer insurance policies.',
            link: '/trackPolicy',
        },
        {
            type: 'Admin',
            iconSrc: lifeDash,
            title: 'View Life Applications',
            link: '/applications/life',
        },
        {
            type: 'Admin',
            iconSrc: carpic,
            title: 'View Motor Applications',
            link: '/applications/transport',
        },
        {
            type: 'Admin',
            iconSrc: healthpic,
            title: 'View Health Applications',
            link: '/applications/health',
        },
        {
            type: 'Admin',
            iconSrc: agentpic,
            title: 'View Agent Application',
            link: '/applications/agent',
        },
        {
            type: 'Admin',
            iconSrc: uerlistpic,
            title: 'View Users List',
            link: '/userpolicies',
        },
        {
            type: 'Admin',
            iconSrc: poldespic,
            title: 'Policy Designing',
            description: 'Design and create new insurance policies for customers.',
            link: '/designPolicy',
        },
        {
            type: 'Admin',
            iconSrc: compstatpic,
            title: 'Company Stats', 
            description: 'Keep an eye on the Company stats based on insurance.',
            link: '/companyStats',
        },
        {
            type: 'Admin',
            iconSrc: annpic,
            title: 'Announcement',
            description: 'Announcement to customers for insurance policy offers.',
            link: '/announcement',
        },
        {
            type: 'SuperAdmin',
            iconSrc: lifeDash,
            title: 'View Life Applications',
            link: '/applications/life',
        },
        {
            type: 'SuperAdmin',
            iconSrc: carpic,
            title: 'View Motor Applications',
            link: '/applications/transport',
        },
        {
            type: 'SuperAdmin',
            iconSrc: healthpic,
            title: 'View Health Applications',
            link: '/applications/health',
        },
        {
            type: 'SuperAdmin',
            iconSrc: agentpic,
            title: 'View Agent Application',
            link: '/applications/agent',
        },
        {
            type: 'SuperAdmin',
            iconSrc: uerlistpic,
            title: 'View Users List',
            link: '/userpolicies',
        },
        {
            type: 'SuperAdmin',
            iconSrc: poldespic,
            title: 'Policy Designing',
            description: 'Design and create new insurance policies for customers.',
            link: '/designPolicy',
        },
        {
            type: 'SuperAdmin',
            iconSrc: compstatpic,
            title: 'Company Stats',
            description: 'Keep an eye on the Company stats based on insurance.',
            link: '/companyStats',
        },
        {
            type: 'SuperAdmin',
            iconSrc: annpic,
            title: 'Announcement',
            description: 'Announcement to customers for insurance policy offers.',
            link: '/announcement',
        },
        {
            type: 'SuperAdmin',
            iconSrc: agentpic,
            title: 'Manage Admins',
            description: 'Manage the Admins',
            link: '/manageadmins',
        },
        {
            type: 'SuperAdmin',
            iconSrc:agentpic,
            title: 'Manage Agents',
            description: 'Manage the agents',
            link: '/manageagents',
        },
        {
            type: 'SuperAdmin',
            iconSrc: agentpic,
            title: 'Manage Users',
            description: 'Manage the Users',
            link: '/manageusers',
        },
        
        
    ];

    // Filter cards based on user type
    const filteredCards = cardsData.filter(card => card.type === user.type);
    console.log("user type in dashboard   " + user.type)
    // Render cards dynamically using map
    const renderedCards = filteredCards.map((card, index) => (
        user.type === 'Agent' ? (
            <AgentCard
                key={index}
                iconSrc={card.iconSrc}
                title={card.title}
                description={card.description}
                link={card.link}
            />
        ) : (
            <AdminCard
                key={index}
                iconSrc={card.iconSrc}
                title={card.title}
                link={card.link}
            />
        )
    ));

    return (
        <>
            <NavBar />
            <h1 style={{textAlign:'center'}}>Welcome {user.name}</h1>
            <div className={styles.container}>
                {renderedCards}
            </div>
            <Footer />
        </>
    );
};

export default AgentDashboard;
