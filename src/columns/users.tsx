/* eslint-disable import/no-extraneous-dependencies */
import { Stack, Box, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'
import moment from 'moment'
import UserAvatar from '../components/Avatar/Avatar'

const columns = (
    openPopconfirm: (
        e: React.MouseEvent<HTMLElement>,
        item: IUserManagementData
    ) => void
): IColumn[] => {
    return [
        {
            name: 'Name',
            key: 'name',
            component: (item: IUserManagementData): ReactNode => {
                return (
                    <Stack direction="row" alignItems="center">
                        <Box sx={{ mr: 1 }}>
                            <UserAvatar
                                url={item?.avatarUrl}
                                width={35}
                                height={35}
                            />
                        </Box>
                        {item.name}
                    </Stack>
                )
            },
        },
        { name: 'Email', key: 'email' },
        {
            name: 'Joined Date',
            key: 'createdAt',
            component: (item: IUserManagementData): ReactNode => {
                return <Box>{moment(item.createdAt).format('DD-MM-YYYY')}</Box>
            },
        },
        { name: 'Role', key: 'role' },
        {
            name: 'Active',
            key: 'isActive',
            component: (item: IUserManagementData): ReactNode => {
                return (
                    <Box>
                        {item.isActive ? (
                            <CheckIcon color="success" />
                        ) : (
                            <ClearIcon color="error" />
                        )}
                    </Box>
                )
            },
        },
        { name: 'Phone Number', key: 'phoneNumber' },
        {
            name: 'Status',
            key: 'isBlocked',
            component: (item: IUserManagementData): ReactNode => {
                return (
                    <Box>
                        <Button
                            color={item.isBlocked ? 'error' : 'warning'}
                            variant="contained"
                            sx={{ minWidth: 120 }}
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                openPopconfirm(e, item)
                            }
                        >
                            {item.isBlocked ? 'Unblock' : 'Block'}
                        </Button>
                    </Box>
                )
            },
        },
    ]
}

export { columns }
