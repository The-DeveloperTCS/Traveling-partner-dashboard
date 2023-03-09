import { LoadingButton, LoadingButtonProps } from '@mui/lab'

const Button = (props: LoadingButtonProps): ReactNode => {
    const { loading, children, ...rest } = props
    return (
        <LoadingButton loading={loading} startIcon={<></>} {...rest}>
            {children}
        </LoadingButton>
    )
}

export default Button
