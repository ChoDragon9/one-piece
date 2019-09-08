const toDayIndex = require('../custom-date/fp/to-day-index')
const toLastDate = require('../custom-date/fp/to-last-date')
const chunk = require('../fp/chunk')
const range = require('../fp/range')

const toMonthDays = ({year, month}) => {
  const WEEK_LENGTH = 7
  const date = new Date(year, month - 1, 1)
  const dayIndex = toDayIndex(date)
  const lastDate = toLastDate({year, month})
  const restDay = (dayIndex + lastDate) % WEEK_LENGTH
  const nextMonthLength = restDay ? WEEK_LENGTH - restDay : restDay

  const prevMonthDays = range(dayIndex).map(() => '')
  const currentMonthDays = range(lastDate).map((_, i) => i + 1)
  const nextMonthDays = range(nextMonthLength).map(() => '')

  return chunk([].concat(prevMonthDays, currentMonthDays, nextMonthDays), WEEK_LENGTH)
}

module.exports = toMonthDays