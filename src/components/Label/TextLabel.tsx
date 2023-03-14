import { Typography } from '@mui/material'

interface Props {
    text: string
    color: string
    align: string
}

export default function TextLabel({ text, color, align }: Props): ReactNode {
    return (
        <>
            <Typography
                variant="subtitle2"
                color={color}
                sx={{ mb: 1, textAlign: align }}
            >
                {text}
            </Typography>
        </>
    )
}
