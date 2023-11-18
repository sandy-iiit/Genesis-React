// AgentDashboard.jsx
import React from 'react';
import styles from './AgentDashboard.module.css';
import AgentCard from '../AgentCards/AgentCards';
import AdminCard from '../AdminCards/AdminCard';
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar";
import {useSelector} from "react-redux";


const AgentDashboard = () => {
    // Array to store information for each card
    const user=useSelector((state)=>state.auth)
    const cardsData = [
        {
            type: 'Agent',
            iconSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4Sjgy5RXwFCvajaFtKqrAsNuOeIrErpQoE1S2vDxgg&s',
            title: 'Policy Designing',
            description: 'Design and create new insurance policies for customers.',
            link: '/designform',
        },
        {
            type: 'Agent',
            iconSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRR6fXxIIt-3PRmJounn8Q7XuaxXbMRoLANEtyKiqUR8pqWMVv7',
            title: 'Company Stats',
            description: 'Keep an eye on the Company stats based on insurance.',
            link: '/companystats',
        },
        {
            type: 'Agent',
            iconSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMcj4N7wVZqdX8do9SUs8NlRgtBfOXeGDu0RJUVLwlMjYRp62b',
            title: 'Announcement',
            description: 'Announcement to customers for insurance policy offers.',
            link: '/sendemail',
        },
        {
            type: 'Agent',
            iconSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_asN96KdacwgEehT5hkWYUICzrHum3RnYQdMN1TnRl_4r3BSw',
            title: 'Track Policies',
            description: 'View and track the status of customer insurance policies.',
            link: '/tractpolicy',
        },
        {
            type: 'Admin',
            iconSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRR6fXxIIt-3PRmJounn8Q7XuaxXbMRoLANEtyKiqUR8pqWMVv7',
            title: 'View Life Applications',
            link: '/life-applications',
        },
        {
            type: 'Admin',
            iconSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRR6fXxIIt-3PRmJounn8Q7XuaxXbMRoLANEtyKiqUR8pqWMVv7',
            title: 'View Motor Applications',
            link: '/transport-applications',
        },
        {
            type: 'Admin',
            iconSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRR6fXxIIt-3PRmJounn8Q7XuaxXbMRoLANEtyKiqUR8pqWMVv7',
            title: 'View Health Applications',
            link: '/health-applications',
        },
        {
            type: 'Admin',
            iconSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRR6fXxIIt-3PRmJounn8Q7XuaxXbMRoLANEtyKiqUR8pqWMVv7',
            title: 'View Agent Application',
            link: '/agent-applications',
        },
        {
            type: 'Admin',
            iconSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRR6fXxIIt-3PRmJounn8Q7XuaxXbMRoLANEtyKiqUR8pqWMVv7',
            title: 'View Users List',
            link: '/usersList',
        },
        {
            type: 'Admin',
            iconSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRR6fXxIIt-3PRmJounn8Q7XuaxXbMRoLANEtyKiqUR8pqWMVv7',
            title: 'View Total List of Policies',
            link: '/policiesList',
        },
    ];

    // Filter cards based on user type
    const filteredCards = cardsData.filter(card => card.type === user.type);

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
            <h1>Welcome {user.type}</h1>
            <div className={styles.container}>
                {renderedCards}
            </div>
            <Footer />
        </>
    );
};

export default AgentDashboard;
