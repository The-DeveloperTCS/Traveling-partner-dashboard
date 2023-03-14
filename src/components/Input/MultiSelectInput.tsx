import { KeyboardArrowDown } from '@mui/icons-material'
import { Box, Chip, OutlinedInput, Select } from '@mui/material'
import TextLabel from '../Label/TextLabel'

export default function MultiSelectInput(props: TInputProps): ReactNode {
    const { label, labelColor, labelAlign, onChange, children, ...rest } = props
    return (
        <>
            {label && (
                <TextLabel
                    text={label}
                    color={labelColor || 'text.primary'}
                    align={labelAlign || 'left'}
                />
            )}
            <Select
                fullWidth
                multiple
                onChange={onChange}
                IconComponent={KeyboardArrowDown}
                input={<OutlinedInput label="Chip" />}
                renderValue={(selected: string[]) => (
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 0.5,
                        }}
                    >
                        {selected.map((value) => (
                            <Chip
                                variant="outlined"
                                key={value}
                                label={value}
                                color="primary"
                            />
                        ))}
                    </Box>
                )}
                {...rest}
            >
                {children}
            </Select>
        </>
    )
}
