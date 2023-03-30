import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import UserAvatar from '../../../components/Avatar/Avatar'
import Card from '../../../components/Card/Card'
import userImg from '../../../assets/images/images/profile.png'
import Button from '../../../components/Buttons/Button'
import TextInput from '../../../components/Input/TextInput'
import SubHeading from '../../../components/SubHeading/SubHeading'
import BarChart from '../../../components/Chart/BarChart'
import { chartsData } from '../../../_mockup/chart'
import LineChart from '../../../components/Chart/LineChart'
import Protection from '../../../roles/protection/Protection'

const Profile = (): ReactNode => {
    return (
        <Protection protection={['admin']}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <SubHeading>States</SubHeading>
                        <BarChart data={chartsData} />
                        <Box mt={2} />
                        <SubHeading>History</SubHeading>
                        <LineChart height={200} />
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card sx={{ p: 4, height: '100%' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Stack
                                    direction="row"
                                    gap={2}
                                    justifyContent="flex-start"
                                    alignItems="flex-end"
                                >
                                    <UserAvatar
                                        url={userImg}
                                        width={100}
                                        height={100}
                                    />
                                    <Button>Change Picture</Button>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextInput
                                    label="First Name"
                                    placeholder="john"
                                    name="firstName"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextInput
                                    label="Last Name"
                                    placeholder="Doe"
                                    name="lastName"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextInput
                                    label="Email"
                                    type="email"
                                    placeholder="jhon@example.com"
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextInput
                                    label="Phone Number"
                                    type="number"
                                    placeholder="12345678901"
                                    name="phoneNumber"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Stack
                                    direction="row"
                                    justifyContent="flex-end"
                                    gap={2}
                                >
                                    {/* <Button variant="outlined">Change Password</Button> */}
                                    <Button variant="gradient">Update</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Protection>
    )
}

export default Profile
