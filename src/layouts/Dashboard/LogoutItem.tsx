import { Logout } from '@mui/icons-material'
import { Box, Button, ListItem } from '@mui/material'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import { logout } from '../../services/auth.services'
import { IMessageContext, MessageContext } from '../../context/MessageContext'

export const LogoutItem = (): ReactNode => {
    const navigate = useNavigate()
    const { showSnackbar } = useContext(MessageContext) as IMessageContext
    const handleLogout = async (): Promise<void> => {
        try {
            navigate('/')
            showSnackbar('Logout successful !! ')
            // logout()
        } catch (error) {
            showSnackbar('Error !! unable to logged out ....', true)
        }
    }
    return (
        <ListItem
            disableGutters
            sx={{
                display: 'flex',
                mb: 0.5,
                py: 1,
                px: 2,
            }}
        >
            <Button
                onClick={handleLogout}
                startIcon={<Logout fontSize="small" />}
                disableRipple
                sx={{
                    backgroundColor: 'rgba(255,255,255, 0.08)',
                    borderRadius: 1,
                    color: 'neutral.300',
                    fontWeight: 'fontWeightBold',
                    justifyContent: 'flex-start',
                    px: 3,
                    textAlign: 'left',
                    textTransform: 'none',
                    width: '100%',
                    '& .MuiButton-startIcon': {
                        color: 'error.dark' || 'neutral.400',
                    },
                    '&:hover': {
                        backgroundColor: 'rgba(255,255,255, 0.09)',
                    },
                }}
            >
                <Box sx={{ flexGrow: 1 }}>Logout</Box>
            </Button>
        </ListItem>
    )
}
