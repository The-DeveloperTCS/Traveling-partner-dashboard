import { PaymentsOutlined } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React, { useMemo, useState } from 'react'
import Card from '../../../components/Card/Card'
import BarChart from '../../../components/Chart/BarChart'
import LineChart from '../../../components/Chart/LineChart'
import PieChart from '../../../components/Chart/PieChart'
import { DynamicTable } from '../../../components/Table/DynamicTable'
import Widget from '../../../components/Widget/Widget'
import { usersMockup } from '../../../_mockup/users'
import { columns } from '../../../columns/orders'
import SubHeading from '../../../components/SubHeading/SubHeading'

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
    const [loading, setLoading] = useState<boolean>(false)

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
                    <SubHeading>Stats</SubHeading>
                    <LineChart height={100} />
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <SubHeading>History</SubHeading>
                    <BarChart data={data} />
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <SubHeading>Users</SubHeading>
                    {useMemo(
                        () => (
                            <DynamicTable
                                isLoading={loading}
                                columns={columns()}
                                data={usersMockup}
                                total={10}
                            />
                        ),
                        [data, loading]
                    )}
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <SubHeading>Record</SubHeading>
                    <PieChart />
                </Card>
            </Grid>
        </Grid>
    )
}

export default Dashboard
