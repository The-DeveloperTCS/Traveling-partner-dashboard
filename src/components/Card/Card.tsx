import React from 'react'
import { Card as MuiCard, SxProps } from '@mui/material'

interface ICard {
    children: ReactNode | ReactNode[]
    sx?: SxProps
}

const Card = ({ children, sx }: ICard): ReactNode => {
    return (
        <MuiCard
            sx={{
                p: 2,
                borderRadius: 2,
                border: '1px solid #E8ECF4',
                boxShadow: 'none',
                ...sx,
            }}
        >
            {children}
        </MuiCard>
    )
}

export default Card
