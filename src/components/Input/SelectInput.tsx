import { TextField } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'
import TextLabel from '../Label/TextLabel'

export default function SelectInput(props: TInputProps): ReactNode {
    const {
        value,
        onChange,
        size,
        label,
        labelColor,
        labelAlign,
        placeholder,
        children,
        ...rest
    } = props

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
                select
                fullWidth
                value={value}
                onChange={onChange}
                SelectProps={{
                    IconComponent: KeyboardArrowDown,
                    displayEmpty: true,
                    renderValue: (val: string) =>
                        val !== '' ? val : placeholder,
                    inputProps: { MenuProps: { disableScrollLock: true } },
                }}
                size={size}
                variant="outlined"
                sx={{ mb: 2 }}
                {...rest}
            >
                {children}
            </TextField>
        </>
    )
}
