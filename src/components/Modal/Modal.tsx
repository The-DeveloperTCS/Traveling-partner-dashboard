import { Close } from '@mui/icons-material'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Typography,
} from '@mui/material'

const IconStyles = {
    position: 'absolute',
    right: -10,
    top: -10,
    color: '#fff',
    backgroundColor: 'primary.main',
    border: '2px solid #fff',
    '&:hover': {
        backgroundColor: 'primary.main',
        color: '#fff',
    },
}

export const Modal = ({
    open,
    title,
    maxWidth,
    closeIcon,
    handleClose,
    children,
}: IModal): ReactNode => {
    return (
        <Dialog fullWidth maxWidth={maxWidth} open={open} onClose={handleClose}>
            {closeIcon ? (
                <IconButton onClick={handleClose} sx={IconStyles}>
                    <Close />
                </IconButton>
            ) : null}
            {title ? (
                <DialogTitle>
                    <Typography variant="h4" sx={{ mb: 1 }}>
                        {title}
                    </Typography>
                </DialogTitle>
            ) : null}

            <DialogContent sx={{ textAlign: 'left' }}>{children}</DialogContent>
        </Dialog>
    )
}
