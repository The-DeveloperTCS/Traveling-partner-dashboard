import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import mainLogo from '../../assets/images/images/logo.svg'
import darkLogo from '../../assets/images/images/text-logo-black.svg'
import lightLogo from '../../assets/images/images/text-logo-white.svg'
import Card from '../Card/Card'

interface ILogo {
    variant?: 'dark' | 'light'
    width?: number
    align?: 'vertical' | 'horizontal'
}

export const Logo = styled((props: ILogo) => {
    const { variant, width, align } = props
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            gap={1}
            direction={align === 'horizontal' ? 'row' : 'column'}
        >
            <Card noShadow={variant === 'dark'} sx={{ p: 1 }}>
                <img
                    src={mainLogo}
                    alt="logo"
                    width={align === 'horizontal' ? '50px' : width || 200}
                />
            </Card>
            <img
                src={variant === 'light' ? darkLogo : lightLogo}
                alt="logo"
                width={align === 'horizontal' ? '100px' : 200}
            />
        </Stack>
    )
})``
