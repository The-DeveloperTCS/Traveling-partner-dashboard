import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { useTheme } from '@mui/material'

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = ({ data }): ReactNode => {
    const theme = useTheme()

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
                label: '# of Votes',
                data: data.map((item) => item.sale),
                backgroundColor: data?.map(
                    (item) =>
                        (item.value === 'low' && danger) ||
                        (item.value === 'medium' && warning) ||
                        (item.value === 'high' && success)
                ),
                borderColor: data?.map(
                    (item) =>
                        (item.value === 'low' && danger) ||
                        (item.value === 'medium' && warning) ||
                        (item.value === 'high' && success)
                ),
                borderWidth: 1,
            },
        ],
    }

    return <Pie data={chartData} height={20} />
}

export default PieChart
