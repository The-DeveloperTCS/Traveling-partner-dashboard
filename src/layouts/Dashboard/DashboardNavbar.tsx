import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import {
    AppBar,
    // Badge,
    Box,
    IconButton,
    Stack,
    Toolbar,
    // Tooltip,
    Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useLocation } from 'react-router-dom'
import AccountPopover from './AccountPopover'
// import BellIcon from '../../assets/images/icons/bell.png'
import { FormatRouteTitle } from '../../utils/CommonFunction'

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
}))

interface IDashboardNavbar {
    onSidebarOpen?: () => void
}

export const DashboardNavbar = (props: IDashboardNavbar): ReactNode => {
    const { onSidebarOpen, ...rest } = props
    const location = useLocation()

    return (
        <DashboardNavbarRoot
            sx={{
                left: {
                    lg: 280,
                },
                width: {
                    lg: 'calc(100% - 280px)',
                },
            }}
            {...rest}
        >
            <Toolbar
                disableGutters
                sx={{
                    minHeight: 64,
                    left: 0,
                    px: 2,
                }}
            >
                <IconButton
                    onClick={onSidebarOpen}
                    sx={{
                        display: {
                            xs: 'inline-flex',
                            lg: 'none',
                        },
                    }}
                >
                    <MenuIcon fontSize="small" />
                </IconButton>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{ xs: 0.5, sm: 1.5 }}
                >
                    <Typography
                        variant="h4"
                        color="text.primary"
                        fontFamily="Fredoka"
                        sx={{ textTransform: 'capitalize', ml: 2 }}
                    >
                        {FormatRouteTitle(location?.pathname)}
                    </Typography>
                </Stack>
                <Box sx={{ flexGrow: 1 }} />
                {/* <Tooltip title="Notifications">
                    <IconButton>
                        <Badge color="primary" variant="dot">
                            <img src={BellIcon} alt="" width={24} />
                        </Badge>
                    </IconButton>
                </Tooltip> */}
                <AccountPopover />
            </Toolbar>
        </DashboardNavbarRoot>
    )
}

DashboardNavbar.defaultProps = {
    onSidebarOpen: undefined,
}
DashboardNavbar.propTypes = {
    onSidebarOpen: PropTypes.func,
}
