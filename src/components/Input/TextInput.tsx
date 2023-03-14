import { TextField } from '@mui/material'
import TextLabel from '../Label/TextLabel'

export default function TextInput(props: TInputProps): ReactNode {
    const { size, placeholder, label, labelColor, labelAlign, ...rest } = props
    return (
        <>
            {label && (
                <TextLabel
                    text={label}
                    color={labelColor || 'text.primary'}
                    align={labelAlign || 'left'}
                />
            )}
            <TextField
                size={size}
                placeholder={placeholder}
                fullWidth
                sx={{ mb: 2 }}
                {...rest}
            />
        </>
    )
}
