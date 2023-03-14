import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { IconButton, InputAdornment } from '@mui/material'
import TextLabel from '../Label/TextLabel'

const TimeInput = (props: TInputProps): ReactNode => {
    const { label, labelColor, labelAlign, ...rest } = props

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            {label && (
                <TextLabel
                    text={label}
                    color={labelColor || 'text.primary'}
                    align={labelAlign || 'left'}
                />
            )}
            <MobileTimePicker
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton edge="end">
                                <AccessTimeIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
                showToolbar
                sx={{ backgroundColor: (theme) => theme.palette.primary.light }}
                {...rest}
            />
        </LocalizationProvider>
    )
}

export default TimeInput
