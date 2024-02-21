import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styles from './InsurancePolicyChart.module.css';
import axiosConfiguration from '../../../config/axiosConfiguration';
import NavBar from '../../NavBar';
import Footer from '../../Footer/Footer';

const InsurancePolicyChart = () => {
    const chartRef = useRef(null);
    const pieChartRef = useRef(null);
    const lineChartRef = useRef(null);
    const [chartData, setChartData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getChartData();
    }, []);

    const getChartData = async () => {
        try {
            const res = await axiosConfiguration.get('/data');
            const data = res.data;

            setChartData({
                barChartData: {
                    labels: ['Total Users', 'Transport Policy', 'Life Policy', 'Health Policy'],
                    datasets: [
                        {
                            label: 'Policy Users',
                            backgroundColor: ['#3E54AC', '#45b6fe', '#f39c12', '#27ae60'],
                            borderColor: 'rgba(0,0,0,0)',
                            borderWidth: 1,
                            hoverBackgroundColor: ['#525252', '#45b6fe', '#f39c12', '#27ae60'],
                            hoverBorderColor: 'rgba(0,0,0,0)',
                            data: [data.total_users, data.transport_policy_users, data.life_policy_users, data.health_policy_users]
                        }
                    ]
                },
                pieChartData: {
                    labels: ['Total Users', 'Transport Policy', 'Life Policy', 'Health Policy'],
                    datasets: [
                        {
                            label: 'Policy Users',
                            backgroundColor: ['#3E54AC', '#45b6fe', '#f39c12', '#27ae60'],
                            borderColor: 'rgba(0,0,0,0)',
                            borderWidth: 1,
                            hoverBackgroundColor: ['#525252', '#45b6fe', '#f39c12', '#27ae60'],
                            hoverBorderColor: 'rgba(0,0,0,0)',
                            data: [data.total_users, data.transport_policy_users, data.life_policy_users, data.health_policy_users]
                        }
                    ]
                },
                lineChartData: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: 'Total Users',
                            fill: false,
                            borderColor: '#3E54AC',
                            borderWidth: 2,
                            data: [50, 75, 100, 200, 150, 300, 250]
                        }
                    ]
                }
            });

            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching chart data:', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (chartData) {
            const chartOptions = {
                responsive: true,
                maintainAspectRatio: false
                // Add other chart options as needed
            };

            const ctx = chartRef.current;
            const pieCtx = pieChartRef.current;
            const lineCtx = lineChartRef.current;

            // Destroy existing Chart instances if they exist
            if (ctx.chart) {
                ctx.chart.destroy();
            }
            if (pieCtx.chart) {
                pieCtx.chart.destroy();
            }
            if (lineCtx.chart) {
                lineCtx.chart.destroy();
            }
            // Create Bar Chart
            if (ctx) {
                ctx.chart = new Chart(ctx, {
                    type: 'bar',
                    data: chartData.barChartData,
                    options: chartOptions
                });
            }
            // Create Pie Chart
            if (pieCtx) {
                pieCtx.chart = new Chart(pieCtx, {
                    type: 'pie',
                    data: chartData.pieChartData,
                    options: chartOptions
                });
            }
            // Create Line Chart
            if (lineCtx) {
                lineCtx.chart = new Chart(lineCtx, {
                    type: 'line',
                    data: chartData.lineChartData,
                    options: chartOptions
                });
            }
        }
    }, [chartData]);
    return (
        <>
            <NavBar />
            <div className={styles.cardHeader}>
                <div>
                    <h1>Insurance Policies Overview</h1>
                </div>
            </div>
            <div className={styles.chartContainer}>
                {isLoading ? (
                    <div className={`${styles.loading} ${styles.center}`}>

                        <svg
                            class="loading-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            width="50"
                            height="50"
                        >
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#007bff"
                                stroke-width="5"
                                stroke-dasharray="200"
                                stroke-dashoffset="0"
                                transform="rotate(90 50 50)"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="rotate"
                                    from="0 50 50"
                                    to="360 50 50"
                                    dur="1.5s"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="stroke-dashoffset"
                                    values="0; 628.32"
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                        </svg>

                    </div>
                ) : (
                    <>

                        <div className={`${styles.chart} ${styles.barChart}`}>
                            <canvas ref={chartRef}></canvas>
                        </div>
                        <div className={`${styles.chart} ${styles.pieChart}`}>
                            <canvas ref={pieChartRef}></canvas>
                        </div>
                        <div className={`${styles.chart} ${styles.lineChart}`}>
                            <canvas ref={lineChartRef}></canvas>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default InsurancePolicyChart;
