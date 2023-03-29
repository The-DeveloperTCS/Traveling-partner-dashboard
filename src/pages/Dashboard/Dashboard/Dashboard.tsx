import { PaymentsOutlined } from '@mui/icons-material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import { Grid } from '@mui/material'
import React, { useMemo, useState } from 'react'
import Card from '../../../components/Card/Card'
import BarChart from '../../../components/Chart/BarChart'
import PieChart from '../../../components/Chart/PieChart'
import { DynamicTable } from '../../../components/Table/DynamicTable'
import Widget from '../../../components/Widget/Widget'
import { usersMockup } from '../../../_mockup/users'
import { columns } from '../../../columns/orders'
import SubHeading from '../../../components/SubHeading/SubHeading'
import { data } from '../../../_mockup/chart'
import Protection from '../../../roles/protection/Protection'

const Dashboard = (): ReactNode => {
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <Protection protection={['admin']}>
            <Grid
                container
                spacing={2}
                alignItems="stretch"
                justifyContent="stretch"
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Widget
                        title="Daily Views"
                        value={25000}
                        Icon={VisibilityOutlinedIcon}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Widget
                        title="Sales"
                        value={0}
                        Icon={ShoppingCartOutlinedIcon}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Widget
                        title="Comments"
                        value={25000}
                        Icon={CommentOutlinedIcon}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Widget
                        title="Earnings"
                        value={25100}
                        Icon={PaymentsOutlined}
                    />
                </Grid>
                <Grid item xs={12} sm={5} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <SubHeading>Stats</SubHeading>
                        <PieChart data={data} />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={7} md={8}>
                    <Card sx={{ height: '100%' }}>
                        <SubHeading>Sale</SubHeading>
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
                    </Card>
                </Grid>
            </Grid>
        </Protection>
    )
}

export default Dashboard
