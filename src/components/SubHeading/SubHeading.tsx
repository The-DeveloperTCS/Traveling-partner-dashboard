import { Typography } from '@mui/material'
import React from 'react'

const SubHeading = ({ children }): ReactNode => {
    return (
        <Typography variant="subtitle1" pb={2}>
            {children}
        </Typography>
    )
}

export default SubHeading
