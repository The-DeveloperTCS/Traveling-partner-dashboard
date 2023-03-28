import { Box, Stack } from '@mui/material'
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
            <Box>{children}</Box>
            <Stack direction="row" justifyContent="flex-end" gap={1}>
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleClose}
                    sx={{ width: 80 }}
                >
                    Cancel
                </Button>
                <Button
                    variant="gradient"
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
