import { PaymentsOutlined } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import Card from '../../../components/Card/Card'
import BarChart from '../../../components/Chart/BarChart'
import LineChart from '../../../components/Chart/LineChart'
import PieChart from '../../../components/Chart/PieChart'
import Widget from '../../../components/Widget/Widget'

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
            <Grid item xs={12} sm={6} md={3}>
                <Widget
                    title="TOTAL COD COLLECTION"
                    value={25000}
                    Icon={PaymentsOutlined}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Widget
                    title="TOTAL COD COLLECTION"
                    value={0}
                    Icon={PaymentsOutlined}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Widget
                    title="TOTAL COD COLLECTION"
                    value={25000}
                    Icon={PaymentsOutlined}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Widget
                    title="TOTAL COD COLLECTION"
                    value={25100}
                    Icon={PaymentsOutlined}
                />
            </Grid>
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
            <Grid item xs={12} md={6}>
                <Card>
                    <PieChart />
                </Card>
            </Grid>
        </Grid>
    )
}

export default Dashboard
