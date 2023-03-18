import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
    Box,
    // Checkbox,
    // FormControlLabel,
    Grid,
    TextField,
    Theme,
} from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../../components/Logo/Logo'
import Button from '../../components/Buttons/Button'

function Login(): ReactNode {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const formik = useFormik({
        initialValues: {
            email: '',
            otp: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
            otp: Yup.string()
                .min(8, 'OTP is too short - should be 8 chars minimum.')
                .required('OTP is required'),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(true)
            console.log(values, 'VALUES')
            setSubmitting(false)
            navigate('/dashboard')
        },
    })

    return (
        <>
            <Helmet>
                <title>Traveling Partner</title>
            </Helmet>
            <Grid
                container
                component="main"
                alignItems="center"
                justifyItems="center"
                justifyContent="center"
                textAlign="center"
                sx={{
                    height: '100vh',
                    p: (theme: Theme) => theme.spacing(2),
                }}
            >
                <Grid item xs={12} sm={6} md={5} lg={3}>
                    <Logo width={100} variant="light" />
                    <Box
                        component="form"
                        onSubmit={formik.handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            error={!!formik.errors.email}
                            helperText={formik.errors.email}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            onChange={(event) => {
                                formik.values.email = event.target.value
                                setEmail(event.target.value)
                            }}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            error={!!formik.errors.otp}
                            helperText={formik.errors.otp}
                            margin="normal"
                            required
                            fullWidth
                            onChange={(event) => {
                                formik.values.otp = event.target.value
                            }}
                            label="OTP"
                            type="password"
                            id="otp"
                        />
                        {/* <Box textAlign="start">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                        </Box> */}
                        <Button
                            loadingPosition="end"
                            type="submit"
                            size="large"
                            variant="contained"
                            sx={{ mt: 3 }}
                            loading={formik.isSubmitting}
                            disabled={formik.isSubmitting}
                            fullWidth
                        >
                            {formik.isSubmitting
                                ? 'Attempting Sign In'
                                : 'Sign In'}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Login
