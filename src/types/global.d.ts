/* eslint-disable prettier/prettier */
import { Theme as MuiTheme } from '@mui/material/styles'
// import { AxiosResponse } from 'axios'

declare global {
    type ReactNode =
        | React.ReactElement<unknown>
        | FunctionComponent<unknown>
        | React.ComponentClass<unknown>
        | null

    interface IBase extends Record<string, unkonwn> {
        id: string | number
    }

    interface IDriver extends IBase {
        createdAt: string
        updatedAt: string
        type: string
        isNewDriver: boolean
        addedByUserId: number
    }

    interface IUser extends Record<string, unknown> {
        createdAt: string
        email: string
        id: number
        isActive?: boolean
        isBlocked?: boolean
        name: string
        role: string
    }

    interface IUserManagementData extends IBase {
        createdAt: string
        name: string | null
        email: string | null
        avatarUrl: string | null
        role: string
        isActive: boolean
        isBlocked: boolean
        phoneNumber: string | number | null
    }

    interface IVehicleManagementData extends IBase {
        vehicleNumber: string | number
        vehicleType: string
        registrationDate: string
        startKm: string | number
        endKm: string | number
        kmTravelled: string | number
        status: string | null | undefined
    }
    interface IBusinessManagementData extends IBase {
        name: string | number
        registrationDate: string
        isDriverAssigned: boolean
        status: string | null | undefined
    }

    interface IDataEntryTableData extends IBase {
        driverId: string | number
        driverName: string
        contractId: string
        createdAt: string
        endKm: string | number
        CODCollected: string | number
        CODSubmitted: string | number
        CODBalance: string | number
        noOfDeliveries: number
        cashDepositedBy: string
        cashReceiptImageUrl: string
    }

    interface IDriverManagementData extends IBase {
        createdAt: string
        type: string | null
        vehicle: IVehicleManagementData
        user: IUserManagementData
        atmIssued: string
    }
    interface IVoucherTableData extends IBase {
        voucherAmount: string | number
        driverId: string | number
        driverName: string
        driverKm?: string | number
        kmImageUrl?: string
        status: string
        fuelRequestId: string | number
        fuelAmount: string | number
        voucherCode?: string
        securityCode?: string
    }

    interface IVoucherForm {
        id?: number | string
        fuelRequestId: string | number
        driver: string | number
        driverName?: string
        securityCode: string
        voucherCode: string
        voucherAmount: string
    }

    interface IVoucherDriverForm {
        voucherId: number | string
        kmImageUrl: string
        driverKm: string
    }

    interface IFuelManagementData extends IBase {
        status: string | null | undefined
        fuelAmount: number
        driverId: number
        createdAt: string
        startKm: number
        kmImageUrl: string
    }
    interface IShiftManagementData extends IBase {
        createdAt?: Date | string
        updatedAt?: Date | string
        date: Date | string
        startTime: Date | string
        endTime: Date | string
        checkInTime?: null
        checkOutTime?: null
        status?: string
        driver?: null
        driverId: number | string
    }
    interface ITopupManagementData extends IBase {
        topUpAmount: number
        createdAt: string
    }

    interface IRegister {
        name: string
        email: string
        password: string
        confirmPassword: string
        role: string
        isBlocked?: boolean
        avatarUrl?: string
    }

    interface IResetPassword {
        email: string
        oldPassword: string
        newPassword: string
    }
    interface IItemProps {
        open: boolean
        setOpen: (boolean) => void
        handleClose?: () => void
        onSuccess?: () => void
        item?:
            | IUserManagementData
            | IVehicleManagementData
            | IFuelManagementData
            | IDataEntryTableData
            | IBusinessManagementData
            | IDriverManagementData
            | ITopupManagementData
            | IVoucherTableData
    }
    interface IModal {
        open: boolean
        title: string
        maxWidth?: Breakpoint
        closeIcon?: boolean
        handleClose: () => void
        handleSubmit?: () => void
        children: ReactNode[] | ReactNode
        loading?: boolean
    }
    interface IPagination {
        limit: number
        page: number
    }

    interface IColumn {
        name: string
        key: string
        component?: ReactNode
    }

    interface ISummary {
        CODCollected: number | string
        CODSubmitted: number | string
        totalDeliveries?: number | string
        noOfDeliveries?: number | string
        CODBalance: number | string
    }

    interface IFuelSummary {
        totalTopUpAmount: number | string
        curentBalance: number | string
        newFuelRequests: number | string
        totalBlockedAmount: number | string
    }

    interface ISummaryCard {
        title: string
        value: number | string
        Icon: ReactNode
    }

    type TInputProps = {
        label?: string
        labelColor?: string
        labelAlign?: string
    } & TextFieldProps

    interface IBusiness extends IBase {
        name: string
        deliveryValue: number
        hourValue: number
        contractStartDate: string
    }

    interface IDataEntry {
        id?: string | number
        driverId: string | number
        business: string | number
        endKm: string | number
        CODCollected: string | number
        CODSubmitted: string | number
        noOfDeliveries: string | number
    }

    interface TabPanelProps {
        children?: React.ReactNode
        index: number
        value: number
    }
    interface IUploadBody {
        file: Blob
    }

    // interface IImageUploadComp {
    //     width?: numbe | string
    //     height?: number
    //     imageURL: string
    //     folder: string
    //     onUploadSuccess: (res: AxiosResponse) => void
    //     loading: boolean
    //     setLoading: (boolean) => void
    // }
}

declare module '@mui/material/styles/createPalette' {
    type colorNumber = {
        [number]: string
    }
    export interface PaletteOptions {
        neutral: PaletteColor | colorNumber
    }
    export interface Palette {
        neutral: PaletteColor | colorNumber
    }
}

declare module '@emotion/react' {
    export interface Theme extends MuiTheme {}
}
