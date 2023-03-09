import PropTypes from 'prop-types'
import {
    Box,
    Button,
    ListItem,
    Typography,
    Collapse,
    List,
    ListItemButton,
} from '@mui/material'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { useState } from 'react'
import ArrowIcon from '../../assets/images/icons/arrow.png'

interface INavItemChildren {
    title: string
    path: string
}
interface INavItem {
    href: string
    icon: ReactNode
    title: string
    childs: INavItemChildren[] | null
}

export const NavItem = (props: INavItem): ReactNode => {
    const { href, icon, title, childs, ...others } = props
    const router = useLocation()
    const active = href ? router.pathname === href : false
    const [open, setOpen] = useState<boolean>(true)
    if (childs) {
        return (
            <>
                <ListItem
                    disableGutters
                    sx={{
                        display: 'flex',
                        mb: 1,
                        py: 0,
                    }}
                    {...others}
                >
                    <Button
                        component={RouterLink}
                        to={href}
                        startIcon={icon}
                        endIcon={
                            <Box
                                sx={{
                                    width: 25,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    src={ArrowIcon}
                                    alt=""
                                    style={{
                                        transform: open
                                            ? 'rotate(0deg)'
                                            : 'rotate(180deg)',
                                    }}
                                />
                            </Box>
                        }
                        disableRipple
                        sx={{
                            backgroundColor: open
                                ? 'transparent'
                                : 'neutral.800',
                            borderRadius: 0,
                            color: 'text.secondary',
                            fontWeight: 'fontWeightBold',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            px: 3,
                            py: 1.2,
                            textAlign: 'left',
                            textTransform: 'none',
                            width: '100%',
                            '& .MuiButton-startIcon': {
                                color: active
                                    ? 'secondary.main'
                                    : 'neutral.400',
                            },
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255, 0.08)',
                            },
                        }}
                        onClick={() => setOpen(!open)}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="subtitle2">{title}</Typography>
                        </Box>
                    </Button>
                </ListItem>
                <Collapse
                    in={open}
                    timeout="auto"
                    unmountOnExit
                    sx={{
                        backgroundColor: 'neutral.700',
                        mb: 2,
                    }}
                >
                    <List component="div" disablePadding>
                        {childs.map((item) => {
                            return (
                                <ListItemButton
                                    key={item.title}
                                    component={RouterLink}
                                    to={item.path}
                                    sx={{
                                        my: 1,
                                        ml: 7,
                                        width: 'max-content',
                                    }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        color={
                                            router.pathname === item.path
                                                ? 'action.selected'
                                                : 'neutral.darkGrey'
                                        }
                                    >
                                        {item.title}
                                    </Typography>
                                </ListItemButton>
                            )
                        })}
                    </List>
                </Collapse>
            </>
        )
    }
    return (
        <ListItem
            disableGutters
            sx={{
                display: 'flex',
                mb: 1,
                py: 0,
            }}
            {...others}
        >
            <Button
                component={RouterLink}
                to={href}
                startIcon={icon}
                disableRipple
                sx={{
                    backgroundColor: active ? 'action.selected' : 'neutral.700',
                    borderRadius: 0,
                    color: active ? 'neutral.900' : 'neutral.400',
                    fontWeight: 'fontWeightBold',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    px: 3,
                    py: 1.2,
                    textAlign: 'left',
                    textTransform: 'none',
                    width: '100%',
                    '& .MuiButton-startIcon': {
                        color: active ? 'neutral.100' : 'neutral.300',
                    },
                    '&:hover': {
                        backgroundColor: 'rgba(255,255,255, 0.08)',
                        color: 'neutral.400',
                    },
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2">{title}</Typography>
                </Box>
            </Button>
        </ListItem>
    )
}

NavItem.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
}
