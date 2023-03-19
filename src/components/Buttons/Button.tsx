import { LoadingButton, LoadingButtonProps } from '@mui/lab'

const Button = (props: LoadingButtonProps): ReactNode => {
    const { loading, children, sx, ...rest } = props
    return (
        <LoadingButton
            loading={loading}
            startIcon={<></>}
            {...rest}
            sx={{ color: '#000', ...sx }}
        >
            {children}
        </LoadingButton>
    )
}

export default Button
