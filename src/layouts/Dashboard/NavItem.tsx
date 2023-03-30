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
    icon?: ReactNode | null
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
                pl: 3,
            }}
            {...others}
        >
            <Button
                component={RouterLink}
                to={href}
                startIcon={icon}
                disableRipple
                sx={{
                    backgroundColor: active
                        ? 'background.default'
                        : 'transparent',
                    borderRadius: '20px 0 0 20px',
                    color: active ? 'neutral.900' : 'neutral.100',
                    fontWeight: 'fontWeightBold',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    px: 3,
                    py: 1.2,
                    textAlign: 'left',
                    textTransform: 'none',
                    transition: 'all 0.5s ease',
                    position: 'relative',
                    width: '100%',
                    '& .MuiButton-startIcon': {
                        color: active ? 'neutral.900' : 'neutral.300',
                    },
                    '&:hover': {
                        backgroundColor: active
                            ? 'background.default'
                            : 'transparent',
                        color: active ? 'neutral.900' : 'action.selected',
                    },
                    '&:after': {
                        content: "''",
                        position: 'absolute',
                        backgroundColor: active
                            ? ' primary.main'
                            : 'transparent',
                        right: 0,
                        bottom: '-50px',
                        height: '50px',
                        width: '25px',
                        borderTopRightRadius: '25px',
                        boxShadow: active ? ' 0 -25px 0 0 #F9FAFC' : 'none',
                        transition: 'all 0.3s ease',
                    },
                    '&:before': {
                        content: "''",
                        position: 'absolute',
                        backgroundColor: active
                            ? ' primary.main'
                            : 'transparent',
                        right: 0,
                        top: '-50px',
                        height: '50px',
                        width: '25px',
                        borderBottomRightRadius: '25px',
                        boxShadow: active ? ' 0 25px 0px 0px #F9FAFC' : 'none',
                        transition: 'all 0.3s linear',
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
