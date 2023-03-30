import React, { useMemo, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography } from '@mui/material'
import { PaymentsOutlined } from '@mui/icons-material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import Card from '../../../components/Card/Card'
import BarChart from '../../../components/Chart/BarChart'
import PieChart from '../../../components/Chart/PieChart'
import { DynamicTable } from '../../../components/Table/DynamicTable'
import Widget from '../../../components/Widget/Widget'
import { columns } from '../../../columns/orders'
import SubHeading from '../../../components/SubHeading/SubHeading'
import { usersMockup } from '../../../_mockup/users'
import Protection from '../../../roles/protection/Protection'
import { AppDispatch } from '../../../redux/Store'
import { fetchPosts } from '../../../redux/slice/PostSlice'
import { RootState } from '../../../redux/slice/Reducers'
import { chartsData } from '../../../_mockup/chart'
import {
    IMessageContext,
    MessageContext,
} from '../../../context/MessageContext'

const Dashboard = (): ReactNode => {
    const dispatch: AppDispatch = useDispatch()
    const { data, loading } = useSelector((state: RootState) => state.posts)
    const { showSnackbar } = useContext(MessageContext) as IMessageContext

    const fetchPostsData = async (): Promise<void> => {
        try {
            await dispatch(fetchPosts()).unwrap()
        } catch (error) {
            showSnackbar('Failed to fetch posts: ', true)
        }
    }
    useEffect(() => {
        fetchPostsData()
    }, [dispatch])

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
                        <PieChart data={chartsData} />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={7} md={8}>
                    <Card sx={{ height: '100%' }}>
                        <SubHeading>Sale</SubHeading>
                        <BarChart data={chartsData} />
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
                            [data]
                        )}
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <SubHeading>Record</SubHeading>
                        {data.map((post) => (
                            <Typography variant="subtitle2" key={post.id}>
                                {post?.title}
                            </Typography>
                        ))}
                    </Card>
                </Grid>
            </Grid>
        </Protection>
    )
}

export default Dashboard
