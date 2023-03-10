import * as Yup from 'yup'

export const baseUserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').max(255),
    email: Yup.string()
        .required('Email is required')
        .email('Must be a valid email')
        .max(255),
})

export const userSchema = baseUserSchema.shape({
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password is too short - should be 8 chars minimum.'),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
    ),
})
