/* eslint-disable import/no-extraneous-dependencies */
import { Box } from '@mui/material'
import moment from 'moment'

const columns = (): IColumn[] => {
    return [
        {
            name: 'ID',
            key: 'id',
        },
        {
            name: 'Booking Date',
            key: 'createdAt',
            component: (item): ReactNode => {
                return <Box>{moment(item.createdAt).format('DD-MM-YYYY')}</Box>
            },
        },
        { name: 'Pickup Rides', key: 'completed' },
        { name: 'Pending Rides', key: 'pending' },
        { name: 'Cancel Rides', key: 'cancel' },
    ]
}

export { columns }
