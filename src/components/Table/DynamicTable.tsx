import PerfectScrollbar from 'react-perfect-scrollbar'
import {
    Box,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Stack,
    IconButton,
    Tooltip,
} from '@mui/material'
import { Edit, Delete, Download, Email } from '@mui/icons-material'
import nodataImg from '../../assets/images/images/no_data.svg'

declare global {
    interface IColumn {
        name: string
        key: string
        download?: boolean
        downloadCallback?: (item: any) => void
        emailCallback?: (item: any) => void
        component?: (any) => ReactNode
        hideEdit?: boolean
        hideDelete?: boolean
        showEmail?: boolean
    }
}

export function getValue<T>(item: T, keys: string[]): string {
    if (keys.length === 1) {
        return item[keys[0]] as string
    }
    let value: any = item

    keys.forEach((key) => {
        value = value[key]
    })

    return value
}
export interface IDynamicTable<T> {
    data: T[]
    onRowClick?: (item: T) => void
    onRowDelete?: (item: T) => void
    columns: IColumn[]
    isLoading: boolean
    limit?: number
    page?: number
    total?: number
    handlePageChange?: (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => void
    handleLimitChange?: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
}

export const DynamicTable = <T extends IBase>({
    data,
    onRowClick,
    onRowDelete,
    columns,
    isLoading,
    handleLimitChange,
    handlePageChange,
    limit,
    page,
    total,
    ...rest
}: IDynamicTable<T>): ReactNode => {
    const extendedColumns = columns.map((column) => {
        return { ...column, key: column.key.split('.') }
    })

    const generateCell = (
        column: {
            key: string[]
            name: string
            download?: boolean
            downloadCallback?: (item: any) => void
            emailCallback?: (item: any) => void
            component?: (string: any) => ReactNode
            hideEdit?: boolean
            hideDelete?: boolean
            showEmail?: boolean
        },
        item: T
    ): ReactNode | string => {
        const cell = column.component
            ? column.component(item)
            : getValue(item, column.key)

        return column.key[0] === 'action' ? (
            <Stack
                direction="row"
                justifyContent="center"
                justifyItems="center"
                alignItems="center"
                spacing={2}
            >
                {column.download && (
                    <Tooltip title="Download PDF">
                        <IconButton
                            onClick={(e) => {
                                e.stopPropagation()
                                column.downloadCallback?.(item)
                            }}
                        >
                            <Download />
                        </IconButton>
                    </Tooltip>
                )}
                {column.showEmail && (
                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation()
                            column.emailCallback?.(item)
                        }}
                    >
                        <Email />
                    </IconButton>
                )}
                {!column.hideEdit && (
                    <IconButton onClick={() => onRowClick?.(item)}>
                        <Edit />
                    </IconButton>
                )}
                {!column.hideDelete && (
                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation()
                            onRowDelete?.(item)
                        }}
                    >
                        <Delete />
                    </IconButton>
                )}
            </Stack>
        ) : (
            cell
        )
    }

    if (data.length === 0 && !isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                    src={nodataImg}
                    width="300px"
                    height="300px"
                    alt="no-data"
                />
            </div>
        )
    }

    return (
        <TableContainer component={Paper} {...rest}>
            <PerfectScrollbar>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            {extendedColumns.map((column, index) => (
                                <TableCell
                                    // eslint-disable-next-line react/no-array-index-key
                                    key={`${index}`}
                                    align={
                                        column.key[0] === 'action'
                                            ? 'center'
                                            : 'left'
                                    }
                                >
                                    {column.name}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    {!isLoading && (
                        <TableBody>
                            {data.map((item) => (
                                <TableRow
                                    hover
                                    key={item.id as string}
                                    onClick={() => {
                                        onRowClick?.(item)
                                    }}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    {extendedColumns.map((column) => (
                                        <TableCell key={column.key.join('.')}>
                                            {generateCell(column, item)}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    )}
                </Table>
                {isLoading && (
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                )}
            </PerfectScrollbar>
            <TablePagination
                component="div"
                count={total}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </TableContainer>
    )
}
