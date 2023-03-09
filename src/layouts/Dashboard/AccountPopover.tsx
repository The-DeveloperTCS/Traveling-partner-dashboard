import { useRef, useState, useContext } from 'react'
// material
import { alpha } from '@mui/material/styles'
import { Button, Box, Divider, Typography } from '@mui/material'
// components
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useNavigate } from 'react-router-dom'
import MenuPopover from '../../components/MenuPopover'
import { UserContext, IUserContext } from '../../context/UserContext'
import { MessageContext, IMessageContext } from '../../context/MessageContext'
import UserAvatar from '../../components/Avatar/Avatar'

function AccountPopover(): ReactNode {
    const navigate = useNavigate()
    const anchorRef = useRef<HTMLButtonElement>(null)
    const [open, setOpen] = useState(false)
    const { showSnackbar } = useContext(MessageContext) as IMessageContext
    const {
        data: { user },
    } = useContext(UserContext) as IUserContext
    const handleLogout = async (): Promise<void> => {
        try {
            showSnackbar('Logout successful !! ')
            navigate('/')
            // logout()
        } catch (error) {
            showSnackbar('Error !! unable to logged out ....', true)
        }
    }

    const handleOpen = (): void => {
        setOpen(true)
    }
    const handleClose = (): void => {
        setOpen(false)
    }
    return (
        <>
            <Button
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    mr: 2,
                    ml: 2,
                    ...(open && {
                        '&:before': {
                            zIndex: 1,
                            content: "''",
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            position: 'absolute',
                            bgcolor: (theme) =>
                                alpha(theme.palette.grey[900], 0.72),
                        },
                    }),
                }}
            >
                <UserAvatar url="" width={40} height={40} />
                <KeyboardArrowDownIcon
                    sx={{ color: 'neutral.grey', ml: 0.5 }}
                />
            </Button>

            <MenuPopover
                open={open}
                onClose={handleClose}
                anchorEl={anchorRef.current as Element}
                sx={{ width: 220 }}
            >
                <Box sx={{ my: 1.5, px: 2.5 }}>
                    <Typography variant="subtitle1" noWrap>
                        {user?.email}
                    </Typography>
                </Box>

                <Divider sx={{ my: 1 }} />

                <Box sx={{ p: 2, pt: 1.5 }}>
                    <Button
                        fullWidth
                        color="inherit"
                        variant="outlined"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </Box>
            </MenuPopover>
        </>
    )
}

export default AccountPopover
