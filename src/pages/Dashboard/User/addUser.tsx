import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import { Box, Grid, IconButton, InputAdornment, MenuItem } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import TextInput from '../../../components/Input/TextInput'
import SelectInput from '../../../components/Input/SelectInput'
import Button from '../../../components/Buttons/Button'
import roles from '../../../roles/roles.json'
import { userSchema } from './schema'
import { register } from '../../../services/user.services'
import { Modal } from '../../../components/Modal/Modal'
import {
    MessageContext,
    IMessageContext,
} from '../../../context/MessageContext'

const AddUser = ({
    open,
    setOpen,
    handleClose,
    onSuccess,
}: IItemProps): ReactNode => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(
        false
    )
    const { showSnackbar } = useContext(MessageContext) as IMessageContext
    const [validationOnChange, setValidationOnChange] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: roles[0],
        },
        validationSchema: userSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            register(values)
                .then(() => {
                    setSubmitting(false)
                    setOpen(false)
                    resetForm()
                    showSnackbar('User Added')
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
        <Modal open={open} title="Add User" handleClose={handleClose}>
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
                            name="name"
                            label="User Name"
                            error={formik.touched.name}
                            helperText={formik.errors.name}
                            {...formik.getFieldProps('name')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextInput
                            type="email"
                            name="email"
                            label="Email"
                            error={formik.touched.email}
                            helperText={formik.errors.email}
                            {...formik.getFieldProps('email')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextInput
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        >
                                            {showPassword ? (
                                                <VisibilityIcon />
                                            ) : (
                                                <VisibilityOffIcon />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            name="password"
                            label="Password"
                            error={formik.touched.password}
                            helperText={formik.errors.password}
                            {...formik.getFieldProps('password')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextInput
                            type={showConfirmPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    !showConfirmPassword
                                                )
                                            }
                                        >
                                            {showConfirmPassword ? (
                                                <VisibilityIcon />
                                            ) : (
                                                <VisibilityOffIcon />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            name="confirmPassword"
                            label="Confirm Password"
                            error={formik.touched.confirmPassword}
                            helperText={formik.errors.confirmPassword}
                            {...formik.getFieldProps('confirmPassword')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SelectInput
                            defaultValue={roles[0]}
                            name="role"
                            label="Role"
                            error={formik.touched.role}
                            helperText={formik.errors.role}
                            {...formik.getFieldProps('role')}
                        >
                            {roles.map(
                                (item) =>
                                    item !== 'driver' && (
                                        <MenuItem key={item} value={item}>
                                            {item}
                                        </MenuItem>
                                    )
                            )}
                        </SelectInput>
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
                                sx={{ ml: 1, width: 120 }}
                                loading={formik.isSubmitting}
                                disabled={formik.isSubmitting}
                                onClick={() => setValidationOnChange(true)}
                            >
                                {formik.isSubmitting ? 'Adding' : 'Add User'}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default AddUser
