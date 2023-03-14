import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import EventIcon from '@mui/icons-material/Event'
import { IconButton, InputAdornment } from '@mui/material'
import TextLabel from '../Label/TextLabel'

const DateInput = (props: TInputProps): ReactNode => {
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
            <MobileDatePicker
                inputFormat="DD/MM/YYYY"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton edge="end">
                                <EventIcon />
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

export default DateInput
