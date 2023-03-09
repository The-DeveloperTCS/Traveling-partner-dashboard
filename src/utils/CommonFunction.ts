export const getInitials = (name = ''): string =>
    name
        .replace(/\s+/, ' ')
        .split(' ')
        .slice(0, 2)
        .map((v) => v && v[0].toUpperCase())
        .join('')

export const FormatRouteTitle = (pathname: string): string => {
    const text = pathname?.split('/')
    return text[2]?.split('-').join(' ')
}
