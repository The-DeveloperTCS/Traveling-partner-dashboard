import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import { Box, Grid } from '@mui/material'
import TextInput from '../../../components/Input/TextInput'
import Button from '../../../components/Buttons/Button'
import { baseUserSchema } from './schema'
import { updateUser } from '../../../services/user.services'
import { Modal } from '../../../components/Modal/Modal'
import {
    MessageContext,
    IMessageContext,
} from '../../../context/MessageContext'

const EditUser = ({
    open,
    setOpen,
    handleClose,
    item,
    onSuccess,
}: IItemProps): ReactNode => {
    const { showSnackbar } = useContext(MessageContext) as IMessageContext
    const [validationOnChange, setValidationOnChange] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {
            id: item?.id,
            name: item?.name,
            email: item?.email,
            phoneNumber: item?.phoneNumber,
            civilIdNumber: item?.civilIdNumber,
        },
        validationSchema: baseUserSchema,
        enableReinitialize: true,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            updateUser(values)
                .then(() => {
                    setSubmitting(false)
                    setOpen(false)
                    resetForm()
                    showSnackbar('User Updated')
                    setValidationOnChange(false)
                    onSuccess()
                })
                .catch((err) => {
                    setSubmitting(false)
                    showSnackbar(`${err?.response?.data?.message}`, true)
                })
        },
        validateOnChange: validationOnChange,
        validateOnBlur: false,
    })
    const handleCancel = (): void => {
        handleClose()
        formik.resetForm()
        setValidationOnChange(false)
    }
    return (
        <Modal open={open} title="Edit User" handleClose={handleClose}>
            <Box
                component="form"
                onSubmit={formik.handleSubmit}
                noValidate
                sx={{ mt: 1 }}
            >
                <Grid container spacing={{ xs: 1, sm: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <TextInput
                            type="text"
                            label="User Name"
                            name="name"
                            error={formik.touched.name}
                            helperText={formik.errors.name}
                            {...formik.getFieldProps('name')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextInput
                            type="email"
                            label="Email"
                            name="email"
                            error={formik.touched.email}
                            helperText={formik.errors.email}
                            {...formik.getFieldProps('email')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextInput
                            type="text"
                            label="Phone Number"
                            name="phoneNumber"
                            error={formik.touched.phoneNumber}
                            helperText={formik.errors.phoneNumber}
                            {...formik.getFieldProps('phoneNumber')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextInput
                            type="text"
                            label="Civil ID Number"
                            name="civilIdNumber"
                            error={formik.touched.civilIdNumber}
                            helperText={formik.errors.civilIdNumber}
                            {...formik.getFieldProps('civilIdNumber')}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: {
                                    xs: 'center',
                                    sm: 'flex-end',
                                },
                            }}
                        >
                            <Button
                                variant="contained"
                                color="error"
                                onClick={handleCancel}
                                sx={{ width: 120 }}
                            >
                                Cancel
                            </Button>
                            <Button
                                loadingPosition="start"
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ ml: 1, width: 150 }}
                                loading={formik.isSubmitting}
                                disabled={formik.isSubmitting}
                                onClick={() => setValidationOnChange(true)}
                            >
                                {formik.isSubmitting
                                    ? 'Updating'
                                    : 'Update User'}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default EditUser
