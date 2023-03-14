import SearchIcon from '@mui/icons-material/Search'
import {
    Box,
    OutlinedInput,
    InputAdornment,
    OutlinedInputProps,
} from '@mui/material'

export default function SearchInput({
    placeholder,
    size,
}: OutlinedInputProps): ReactNode {
    return (
        <OutlinedInput
            size={size}
            placeholder={placeholder}
            fullWidth
            endAdornment={
                <InputAdornment position="end">
                    <SearchIcon
                        fontSize="large"
                        sx={{ color: 'neutral.grey' }}
                    />
                </InputAdornment>
            }
            startAdornment={
                <InputAdornment position="start">
                    <Box sx={{ background: '#E83A75', px: 0.2, py: 1.5 }} />
                </InputAdornment>
            }
        />
    )
}
