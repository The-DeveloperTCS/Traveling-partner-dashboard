import { Avatar } from '@mui/material'

interface Props {
    url: string
    width: number
    height: number
    cursor?: string
    onClick?: () => void
}
function UserAvatar({ url, width, height, cursor, onClick }: Props): ReactNode {
    return (
        <Avatar
            sx={{
                height: width,
                width: height,
                cursor,
            }}
            src={url}
            onClick={onClick}
        />
    )
}

export default UserAvatar
