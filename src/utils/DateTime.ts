import moment from 'moment'
import momentTimeZone from 'moment-timezone'

interface IDate {
    day: number
    month: number
    year: number
}

interface ITime {
    hour: number
    minute: number
}

export function formateDate(date: IDate): string {
    const customeDate = `${date.month}-${date.day}-${date.year}`
    const formatedDate = moment(customeDate, 'MM-DD-YYYY').format(
        'MMMM DD YYYY'
    )
    return formatedDate
}

export function formateTime(time: ITime): string {
    const formatedTime = moment(
        `${time?.hour} : ${time?.minute}`,
        'hh:mm A'
    ).format('hh:mm A')
    return formatedTime
}

export function getMinFromSeconds(sec: number): number {
    const minutes = Math.floor(sec / 60)
    return minutes
}
export function getHoursFromSeconds(sec: number): string {
    const minutes = sec / 60
    const hours = (minutes / 60).toFixed(1)
    return hours
}

export function getMonthName(monthNo: number): string {
    return moment().month(monthNo).format('MMM')
}

export function getCurrentTimeOfSpecificTimezone(timezone: string): string {
    const currentTime = momentTimeZone().tz(timezone).format('hh:mm A')
    return currentTime
}
export function getDeviceTimezone(): string {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions()
    return timeZone
}

export function splitHourMint(label: string): {
    hour: number
    minutes: number
} {
    const hour = label.split(':')[0]
    const minutes = label.split(':')[1]
    return {
        hour: Number(hour),
        minutes: Number(minutes),
    }
}
