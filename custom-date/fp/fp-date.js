const addDay = (date, count) => {
  const clonedDate = new Date(date)
  clonedDate.setDate(clonedDate.getDate() + count)
  return clonedDate
}

const subtractDay = (date, count) => {
  const clonedDate = new Date(date)
  clonedDate.setDate(clonedDate.getDate() - count)
  return clonedDate
}

const diffDay = (srcDate, targetDate) => {
  const DAY = 1000 * 60 * 60 * 24
  return Math.floor((targetDate - srcDate) / DAY)
}

const isLeapYear = (year) => {
  const LEAP_YEAR = 2000
  const LEAP_YEAR_PERIOD = 4

  const diffYear = Math.abs(year - LEAP_YEAR)

  return diffYear % LEAP_YEAR_PERIOD === 0
}

const toLastDate = ({year, month}) => {
  const LAST_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const LEAP_YEAR_LAST_DATE = 29
  const MONTH_FEBRUARY = 2

  if (isLeapYear(year) && month === MONTH_FEBRUARY) {
    return LEAP_YEAR_LAST_DATE
  }
  return LAST_DAYS[month - 1]
}

const toDayIndex = date => date.getDay()

module.exports = {
  addDay,
  subtractDay,
  diffDay,
  isLeapYear,
  toLastDate,
  toDayIndex
}