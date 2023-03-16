import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { getMonthName } from '../../utils/DateTime'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const BarChart = ({ data }: { data: any }): ReactNode => {
    const options = {
        responsive: true,
        borderRadius: 5,
        categoryPercentage: 1,
        barPercentage: 1,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (yDatapoint) => {
                        const grade =
                            (yDatapoint.raw === 2500 && 'needs to improve') ||
                            (yDatapoint.raw === 5000 && 'average') ||
                            'strong'
                        return ` ${grade}`
                    },
                },
            },
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
    }
    const success = '#E4F4E9'
    const warning = '#FFF6E4'
    const danger = '#F8E5E5'
    const chartData = {
        labels: data?.map((item) => getMonthName(item.month - 1)),
        datasets: [
            {
                label: 'grade',
                data: data?.map(
                    (item) =>
                        (item.value === 'low' && 2500) ||
                        (item.value === 'medium' && 5000) ||
                        (item.value === 'high' && 7500)
                ),
                backgroundColor: data?.map(
                    (item) =>
                        (item.value === 'low' && danger) ||
                        (item.value === 'medium' && warning) ||
                        (item.value === 'high' && success)
                ),
                borderColor: '#fff',
                borderWidth: 1.5,
                tension: 0.4,
                title: {
                    display: false,
                },
            },
        ],
    }
    return <Bar height={50} options={options} data={chartData} />
}

export default BarChart
