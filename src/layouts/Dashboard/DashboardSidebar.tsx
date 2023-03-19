/* eslint-disable prettier/prettier */
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Theme as MuiTheme } from '@mui/material/styles'
import { Box, Drawer, Link, useMediaQuery } from '@mui/material'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { NavItem } from './NavItem'
import { LogoutItem } from './LogoutItem'
import { Logo } from '../../components/Logo/Logo'

interface IDashboardSidebar {
    open: boolean
    onClose?: () => void
}

interface IDashboardSidebarItem {
    href: string | undefined
    icon: ReactNode | null
    title: string
    childs: null
    protection: string[]
}

export const DashboardSidebar = (props: IDashboardSidebar): ReactNode => {
    const { open, onClose } = props
    const router = useLocation()
    const lgUp = useMediaQuery(
        (theme: MuiTheme) => theme.breakpoints.up('lg'),
        {
            defaultMatches: true,
            noSsr: false,
        }
    )

    const baseUrl = '/dashboard'
    const items = [
        {
            href: `${baseUrl}/dashboard`,
            icon: null,
            title: 'Dashboard',
            childs: null,
            protection: ['admin'],
        },
        {
            href: `${baseUrl}/user-management`,
            icon: null,
            title: 'User Management',
            childs: null,
            protection: ['admin'],
        },
        {
            href: `${baseUrl}/profile`,
            icon: null,
            title: 'Profile',
            childs: null,
            protection: ['admin'],
        },
    ]

    useEffect(() => {
        if (open) {
            onClose?.()
        }
    }, [router.pathname])

    const content = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <div>
                <Box sx={{ p: 3 }}>
                    <Link component={RouterLink} to="/">
                        <Logo width={100} variant="light" align="horizontal" />
                    </Link>
                </Box>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                {items.map((item: IDashboardSidebarItem): ReactNode => {
                    return (
                        <NavItem
                            key={item.title}
                            icon={item.icon}
                            href={item.href}
                            title={item.title}
                            childs={item.childs}
                        />
                    )
                })}
            </Box>
            <LogoutItem />
        </Box>
    )

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        background: (theme) => theme.palette.gradient[100],
                        color: '#FFFFFF',
                        width: 280,
                        borderRight: 'none !important',
                    },
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        )
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    background: (theme) => theme.palette.gradient[100],
                    color: '#FFFFFF',
                    width: 280,
                    borderRight: 'none !important',
                },
            }}
            sx={{
                zIndex: (theme) => theme.zIndex.appBar + 100,
            }}
            variant="temporary"
        >
            {content}
        </Drawer>
    )
}

DashboardSidebar.defaultProps = {
    onClose: undefined,
    open: false,
}

DashboardSidebar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
}
