import { Grid, Typography } from '@mui/material'
import { useEffect, useMemo, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
// import { AxiosResponse } from 'axios'
import Protection from '../../../roles/protection/Protection'
import Button from '../../../components/Buttons/Button'
import { DynamicTable } from '../../../components/Table/DynamicTable'
// import { applySortFilter } from '../../../utils/searchHelper'
import AddUser from './addUser'
import EditUser from './editUser'
import { usersMockup } from '../../../_mockup/users'
import { columns } from '../../../columns/users'
// import { getAllUsers, updateUser } from '../../../services/user.services'
import {
    IMessageContext,
    MessageContext,
} from '../../../context/MessageContext'
import MessageModal from '../../../components/Modal/MessageModal'

const UserManagement = (): ReactNode => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false)
    const [editUser, setEditUser] = useState<IUserManagementData>(null)
    const [data, setData] = useState<IUserManagementData[]>([])
    const { showSnackbar } = useContext(MessageContext) as IMessageContext
    const [userToBlockUnblock, setUserToBlockUnblock] =
        useState<IUserManagementData | null>(null)
    const [isLoadingUserBlockUnblock, setIsLoadingUserBlockUnblock] =
        useState<boolean>(false)
    const [total, setTotal] = useState<number>(0)
    const [pagination, setPagination] = useState<{
        page: number
        limit: number
    }>({
        page: 0,
        limit: 10,
    })
    const handleLimitChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        setPagination({
            ...pagination,
            limit: parseInt(event.target.value, 10),
        })
    }

    const handlePageChange = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ): void => {
        setPagination({
            ...pagination,
            page: newPage,
        })
    }

    // const getData = (): void => {
    //     setLoading(true)
    //     getAllUsers(pagination)
    //         .then((res: AxiosResponse): void => {
    //             setData(res.data.users)
    //             setTotal(res.data.meta.totalCount)
    //             setLoading(false)
    //         })
    //         .catch((): void => {
    //             setLoading(false)
    //         })
    // }

    // useEffect(() => {
    //     getData()
    // }, [pagination])

    const handleBlockUnblock = (item: IUserManagementData): void => {
        setIsLoadingUserBlockUnblock(true)
        // updateUser({ ...item, isBlocked: !item.isBlocked })
        //     .then(() => {
        //         setData((prevState) => {
        //             const newState = prevState.map((obj) => {
        //                 if (obj.id === item.id) {
        //                     return {
        //                         ...obj,
        //                         isBlocked: !item.isBlocked,
        //                     }
        //                 }
        //                 return obj
        //             })
        //             return newState
        //         })
        //         setIsLoadingUserBlockUnblock(false)
        //         setUserToBlockUnblock(null)
        //         showSnackbar(
        //             `Successfully ${
        //                 !item.isBlocked ? 'Blocked' : 'Unblocked'
        //             } the user!`,
        //             false
        //         )
        //     })
        //     .catch((err) => {
        //         showSnackbar(`${err?.response?.data?.message}`, true)
        //     })

        setData((prevState) => {
            const newState = prevState.map((obj) => {
                if (obj.id === item.id) {
                    return {
                        ...obj,
                        isBlocked: !item.isBlocked,
                    }
                }
                return obj
            })
            return newState
        })
    }

    const handleRowClick = (item: IUserManagementData): void => {
        setEditUser(item)
        setEditModalOpen(true)
    }

    const handleAddUser = (): void => {
        setOpen(true)
    }
    const handleClose = (): void => {
        setOpen(false)
        setEditModalOpen(false)
    }

    return (
        <Protection protection={['admin']}>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{ textAlign: 'right' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<PersonAddIcon />}
                        sx={{ minWidth: 150 }}
                        size="large"
                        onClick={handleAddUser}
                    >
                        Add User
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    {useMemo(
                        () => (
                            <DynamicTable
                                isLoading={loading}
                                columns={columns(
                                    (
                                        e: React.MouseEvent<HTMLElement>,
                                        item: IUserManagementData
                                    ) => {
                                        e.stopPropagation()
                                        setUserToBlockUnblock(item)
                                    }
                                )}
                                data={usersMockup}
                                onRowClick={(item: IUserManagementData) => {
                                    handleRowClick(item)
                                }}
                                limit={pagination.limit}
                                page={pagination.page}
                                total={total}
                                handlePageChange={handlePageChange}
                                handleLimitChange={handleLimitChange}
                            />
                        ),
                        [data, loading, navigate]
                    )}
                </Grid>
            </Grid>

            <AddUser
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
                // onSuccess={getData}
            />

            {editUser !== null && (
                <EditUser
                    open={editModalOpen}
                    setOpen={setEditModalOpen}
                    handleClose={handleClose}
                    item={editUser}
                    // onSuccess={getData}
                />
            )}
            <MessageModal
                open={!!userToBlockUnblock}
                title={`${
                    userToBlockUnblock?.isBlocked ? ' Unblock' : ' Block'
                } User?`}
                handleClose={() => setUserToBlockUnblock(null)}
                handleSubmit={() => handleBlockUnblock(userToBlockUnblock)}
                loading={isLoadingUserBlockUnblock}
            >
                <Typography>
                    Are you sure you want to
                    {userToBlockUnblock?.isBlocked ? ' Unblock' : ' Block'} this
                    user.
                </Typography>
            </MessageModal>
        </Protection>
    )
}

export default UserManagement
