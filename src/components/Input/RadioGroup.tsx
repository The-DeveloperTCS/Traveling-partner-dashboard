import RadioGroup from '@mui/material/RadioGroup'
import TextLabel from '../Label/TextLabel'

export default function RadioGroupInput(props: TInputProps): ReactNode {
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
            <RadioGroup onChange={onChange} {...rest}>
                {children}
            </RadioGroup>
        </>
    )
}
