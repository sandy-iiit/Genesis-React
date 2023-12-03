
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styles from './InsurancePolicyChart.module.css';
import NavBar from '../../NavBar';
import Footer from '../../Footer/Footer';

const InsurancePolicyChart = () => {
    const chartRef = useRef(null);
    const pieChartRef = useRef(null);
    const lineChartRef = useRef(null);

    useEffect(() => {
        const chartData = {
            labels: ['Total Users', 'Transport Policy', 'Life Policy', 'Health Policy'],
            datasets: [
                {
                    label: 'Policy Users',
                    backgroundColor: ['#3E54AC', '#45b6fe', '#f39c12', '#27ae60'],
                    borderColor: 'rgba(0,0,0,0)',
                    borderWidth: 1,
                    hoverBackgroundColor: ['#525252', '#45b6fe', '#f39c12', '#27ae60'],
                    hoverBorderColor: 'rgba(0,0,0,0)',
                    data: [500, 250, 150, 100] // Sample data for testing
                }
            ]
        };

        const pieChartData = {
            labels: ['Total Users', 'Transport Policy', 'Life Policy', 'Health Policy'],
            datasets: [
                {
                    label: 'Policy Users',
                    backgroundColor: ['#3E54AC', '#45b6fe', '#f39c12', '#27ae60'],
                    borderColor: 'rgba(0,0,0,0)',
                    borderWidth: 1,
                    hoverBackgroundColor: ['#525252', '#45b6fe', '#f39c12', '#27ae60'],
                    hoverBorderColor: 'rgba(0,0,0,0)',
                    data: [500, 250, 150, 100] // Sample data for testing
                }
            ]
        };

        const lineChartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Total Users',
                    fill: false,
                    borderColor: '#3E54AC',
                    borderWidth: 2,
                    data: [50, 75, 100, 200, 150, 300, 250] // Sample data for testing
                }
            ]
        };

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false
            // Add other chart options as needed
        };

        const ctx = chartRef.current;
        const pieCtx = pieChartRef.current;
        const lineCtx = lineChartRef.current;

        // Create Bar Chart
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: chartOptions
            });
        }

        // Create Pie Chart
        if (pieCtx) {
            new Chart(pieCtx, {
                type: 'pie',
                data: pieChartData,
                options: chartOptions
            });
        }

        // Create Line Chart
        if (lineCtx) {
            new Chart(lineCtx, {
                type: 'line',
                data: lineChartData,
                options: chartOptions
            });
        }
    }, []);

    return (
        <>
            <NavBar/>
            <div className={styles.cardHeader}>
                <div>
                    <h1>Insurance Policies Overview</h1>
                </div>
            </div>
            <div className={styles.chartContainer}>

                <div className={`${styles.chart} ${styles.barChart}`}>
                    <canvas ref={chartRef}></canvas>
                </div>
                <div className={`${styles.chart} ${styles.pieChart}`}>
                    <canvas ref={pieChartRef}></canvas>
                </div>
                <div className={`${styles.chart} ${styles.lineChart}`}>
                    <canvas ref={lineChartRef}></canvas>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default InsurancePolicyChart;

