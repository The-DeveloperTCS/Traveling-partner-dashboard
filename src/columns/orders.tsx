/* eslint-disable import/no-extraneous-dependencies */
import { Box } from '@mui/material'
import moment from 'moment'

const columns = (): IColumn[] => {
    return [
        {
            name: 'Name',
            key: 'name',
        },
        { name: 'Email', key: 'email' },
        {
            name: 'Joined Date',
            key: 'createdAt',
            component: (item: IUserManagementData): ReactNode => {
                return <Box>{moment(item.createdAt).format('DD-MM-YYYY')}</Box>
            },
        },
    ]
}

export { columns }
