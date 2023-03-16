import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export const options = {
    responsive: true,
    tension: 0.3,
    radius: 8,
    hoverRadius: 12,
    plugins: {
        tooltip: {
            callbacks: {
                label: (value) => {
                    const val =
                        (value.raw === 5 && 'Deep') ||
                        (value.raw === 10 && 'Core') ||
                        (value.raw === 15 && 'REM') ||
                        (value.raw === 20 && 'Awake')
                    return val
                },
            },
        },
        legend: {
            position: 'top' as const,
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
                display: true,
            },
            ticks: {
                callback(value) {
                    const val =
                        (value === 5 && 'Deep') ||
                        (value === 10 && 'Core') ||
                        (value === 15 && 'REM') ||
                        (value === 20 && 'Awake') ||
                        ''
                    return val
                },
            },
        },
    },
}

const labels = ['10:30pm', '12am', '2am', '4am', '6am', '8am', '10am']
const arr = [5, 10, 15, 20, 5, 5, 10]
export const data = {
    labels,
    datasets: [
        {
            label: 'Progress',
            data: arr,
            borderColor: '#A8E3FF',
            backgroundColor: arr.map(
                (value) =>
                    (value === 5 && '#4E4CAE') ||
                    (value === 10 && '#0179FF') ||
                    (value === 15 && '#31ADE7') ||
                    (value === 20 && '#A8E3FF')
            ),
        },
    ],
}

const LineChart = ({ height }): ReactNode => {
    return <Line options={options} data={data} height={height || 50} />
}

export default LineChart
