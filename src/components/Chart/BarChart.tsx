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
import { useTheme } from '@mui/material'
import { getMonthName } from '../../utils/DateTime'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const BarChart = ({ data }: { data: any }): ReactNode => {
    const theme = useTheme()
    const options = {
        responsive: true,
        borderRadius: 5,
        categoryPercentage: 1,
        barPercentage: 1,
        plugins: {
            // tooltip: {
            //     callbacks: {
            //         label: (yDatapoint) => {
            //             const grade =
            //                 (yDatapoint.raw === 2500 && 'needs to improve') ||
            //                 (yDatapoint.raw === 5000 && 'average') ||
            //                 'strong'
            //             return ` ${grade}`
            //         },
            //     },
            // },
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
    const success = theme.palette.success.main
    const warning = theme.palette.warning.main
    const danger = theme.palette.error.main
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
    ]

    const chartData = {
        labels,
        datasets: [
            {
                label: 'sale',
                data: data.map((item) => item.sale),
                backgroundColor: data?.map(
                    (item) =>
                        (item.value === 'low' && danger) ||
                        (item.value === 'medium' && warning) ||
                        (item.value === 'high' && success)
                ),
                borderColor: '#fff',
                borderWidth: 3,
                tension: 1.5,
                title: {
                    display: false,
                },
            },
        ],
    }
    return <Bar options={options} data={chartData} />
}

export default BarChart
