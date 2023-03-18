import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import mainLogo from '../../assets/images/images/logo.svg'
import darkLogo from '../../assets/images/images/text-logo-black.svg'
import lightLogo from '../../assets/images/images/text-logo-white.svg'
import Card from '../Card/Card'

interface ILogo {
    variant?: 'dark' | 'light'
    width?: number
}

export const Logo = styled((props: ILogo) => {
    const { variant, width } = props
    return (
        <Stack justifyContent="center" alignItems="center" gap={1}>
            <Card noShadow={variant === 'dark'}>
                <img src={mainLogo} alt="logo" width={width || 200} />
            </Card>
            <img
                src={variant === 'light' ? darkLogo : lightLogo}
                alt="logo"
                width={200}
            />
        </Stack>
    )
})``
