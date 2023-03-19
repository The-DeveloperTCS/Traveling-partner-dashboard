export const NumberFormatter = (
    value: number | string | undefined,
    decimal = 2
): string => {
    if (!value) return `0.${'0'.repeat(decimal)}`
    let num: string[]
    if (typeof value === 'number') {
        num = value.toFixed(decimal).toString().split('.')
        return `${num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${
            num[1] ? `.${num[1]}` : ''
        }`
    }
    num = value.split('.')
    let returnValue = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    if (num[1]) {
        returnValue += num[1].substring(0, decimal + 1) || '0'.repeat(decimal)
    }
    return returnValue
}

export const nFormatter = (num: number): string | number => {
    if (num >= 1000000000) {
        return `${(num / 1000000000).toFixed(1).replace(/\.0$/, '')}G`
    }
    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1).replace(/\.0$/, '')}M`
    }
    if (num >= 1000) {
        return `${(num / 1000).toFixed(1).replace(/\.0$/, '')}K`
    }
    return num
}
