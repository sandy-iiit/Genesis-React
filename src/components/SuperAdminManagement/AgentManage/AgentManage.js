import React, { useState, useEffect } from 'react';
import axiosConfiguration from '../../../config/axiosConfiguration';
import styles from './AgentManage.module.css';
import { toast } from 'react-toastify';
import { colors } from '@mui/material';

function AgentManage() {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        fetchAgents();
    }, []);

    const fetchAgents = async () => {
        try {
            const response = await axiosConfiguration.get('/getallagents');
            setAgents(response.data);
        } catch (error) {
            console.error('Error fetching agents:', error);
        }
    };

    const handleVerify = async (email) => {
        try {
            await axiosConfiguration.post('/verifyAgent', { email });
            toast.success("Agent is verified!!!");
            fetchAgents(); // Fetch agents again to update the list after verifying
        } catch (error) {
            console.error('Error verifying agent:', error);
        }
    };

    const handleDelete = async (email) => {
        try {
            await axiosConfiguration.post('/deleteagent', { email });
            toast.success("L'administrateur a été supprimé avec succès!");
            fetchAgents(); // Fetch agents again to update the list after deleting
        } catch (error) {
            console.error('Error deleting agent:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h2>Agent Management</h2>
            <div className={styles.agentsContainer}>
                {agents.map((agent) => (
                    <div key={agent._id} className={styles.card}>
                        <h3>{agent.name}</h3>
                        <h6><p>Email: {agent.email}</p></h6>
                        <p>Age: {agent.age}</p>
                        <p>Address: {agent.address}</p>
                        <p>Phone: {agent.phone}</p>
                        <p>Aadhar : {agent.aadhar}</p>
                        {agent.isActive ? (
                            <button onClick={() => handleDelete(agent.email)} className={styles.deleteButton}>
                                Delete
                            </button>
                        ) : (
                            <button onClick={() => handleVerify(agent.email)} className={styles.verifyButton}>
                                Verify
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AgentManage;
