import { Grid } from '@mui/material'
import React from 'react'
import Card from '../../../components/Card/Card'
import BarChart from '../../../components/Chart/BarChart'
import LineChart from '../../../components/Chart/LineChart'

const data = [
    {
        value: 'low',
        month: 1,
    },
    {
        value: 'medium',
        month: 2,
    },
    {
        value: 'high',
        month: 3,
    },
    {
        value: 'medium',
        month: 4,
    },
]

const Dashboard = (): ReactNode => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Card>
                    <LineChart height={100} />
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <BarChart data={data} />
                </Card>
            </Grid>
        </Grid>
    )
}

export default Dashboard
