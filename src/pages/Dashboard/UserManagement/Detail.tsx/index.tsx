import React, { useMemo, useState } from 'react'
import { Box, Stack } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

import { useNavigate } from 'react-router-dom'
import { columns } from '../../../../columns/history'
import Button from '../../../../components/Buttons/Button'
import SubHeading from '../../../../components/SubHeading/SubHeading'
import { DynamicTable } from '../../../../components/Table/DynamicTable'
import Protection from '../../../../roles/protection/Protection'
import { historyMockup } from '../../../../_mockup/users'
import EditUser from './EditUser'

const user = {
    id: 1,
    name: 'Test',
    email: 'test@gmail.com',
    role: 'admin',
    createdAt: '',
    profileImageURL: '',
}
const UserDetail = (): ReactNode => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    const [total, setTotal] = useState<number>(0)
    const [pagination, setPagination] = useState<{
        page: number
        limit: number
    }>({
        page: 0,
        limit: 10,
    })
    const handleLimitChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        setPagination({
            ...pagination,
            limit: parseInt(event.target.value, 10),
        })
    }

    const handlePageChange = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ): void => {
        setPagination({
            ...pagination,
            page: newPage,
        })
    }
    return (
        <Protection protection={['admin']}>
            <Stack gap={5}>
                <Box>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        mb={1}
                    >
                        <SubHeading> Update User</SubHeading>
                        <Button
                            variant="gradient"
                            startIcon={<KeyboardBackspaceIcon />}
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </Button>
                    </Stack>
                    <EditUser item={user} />
                </Box>
                <Box>
                    <SubHeading>User History</SubHeading>
                    {useMemo(
                        () => (
                            <DynamicTable
                                isLoading={loading}
                                columns={columns()}
                                data={historyMockup}
                                limit={pagination.limit}
                                page={pagination.page}
                                total={total}
                                handlePageChange={handlePageChange}
                                handleLimitChange={handleLimitChange}
                            />
                        ),
                        [historyMockup, loading]
                    )}
                </Box>
            </Stack>
        </Protection>
    )
}

export default UserDetail
