import React from 'react'
import { Card as MuiCard, SxProps } from '@mui/material'

interface ICard {
    children: ReactNode | ReactNode[]
    sx?: SxProps
    noShadow?: boolean
}

const Card = ({ children, noShadow, sx }: ICard): ReactNode => {
    return (
        <MuiCard
            sx={{
                p: 2,
                border: '1px solid #E8ECF4',
                boxShadow: noShadow && 'none',
                ...sx,
            }}
        >
            {children}
        </MuiCard>
    )
}

export default Card
