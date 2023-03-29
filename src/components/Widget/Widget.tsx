import { Card, Typography, Stack } from '@mui/material'
import { nFormatter } from '../../utils/NumberFormatter'

interface IProps {
    title: string
    value: string | number | null
    Icon?: ReactNode
}

const Widget = ({ title, value, Icon }: IProps): ReactNode => {
    return (
        <Card sx={{ p: 4 }}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                color="primary.main"
            >
                <Typography variant="h3" pt={2}>
                    {`${value < 0 ? '-' : ''}${nFormatter(
                        Math.abs(Number(value))
                    )}`}
                </Typography>
                <Icon sx={{ fontSize: '60px' }} color="success" />
            </Stack>
            <Typography variant="body2" color="neutral.400" fontWeight={500}>
                {title}
            </Typography>
        </Card>
    )
}

export default Widget
