import { Stack, Typography } from '@mui/material'
import { Modal } from './Modal'
import Button from '../Buttons/Button'

const MessageModal = ({
    open,
    title,
    children,
    handleClose,
    handleSubmit,
}: IModal): ReactNode => {
    return (
        <Modal title={title} open={open} handleClose={handleClose}>
            <Typography component="h1" variant="h5" textAlign="center">
                {children}
            </Typography>
            <Stack direction="row" justifyContent="center" gap={1}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClose}
                    sx={{ width: 80 }}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{ width: 80 }}
                >
                    Submit
                </Button>
            </Stack>
        </Modal>
    )
}

export default MessageModal
