const {addDay, diffDay, subtractDay, isLeapYear, toLastDate} = require("./fp-date");
const {log, logResult} = require('../log')

log('addDay - tomorrow', () => {
  const today = new Date(2019, 0, 1)
  const tomorrow = addDay(today, 1)

  return tomorrow.getDate() == 2
})

log('addDay - nextWeek', () => {
  const today = new Date(2019, 0, 1)
  const nextWeek = addDay(today, 7)

  return nextWeek.getDate() === 8
})

log('subtractDay - yesterday', () => {
  const today = new Date(2019, 0, 8)
  const yesterday = subtractDay(today, 1)

  return yesterday.getDate() === 7
})

log('subtractDay - prevWeek', () => {
  const today = new Date(2019, 0, 8)
  const prevWeek = subtractDay(today, 7)

  return prevWeek.getDate() === 1
})

log('diffDay', () => {
  const today = new Date(2019, 0, 1)
  const nextWeek = new Date(2019, 0, 8)

  return diffDay(today, nextWeek) === 7
})

log('isLeapYear - 2019', () => {
  const year = 2019
  const result = isLeapYear(year)

  return result === false
})

log('isLeapYear - 2020', () => {
  const year = 2020
  const result = isLeapYear(year)

  return result === true
})

log('toLastDate - 2020/1', () => {
  const year = 2020
  const month = 1
  const result = toLastDate({year, month})

  return result === 31
})

log('toLastDate - 2020/2', () => {
  const year = 2020
  const month = 2
  const result = toLastDate({year, month})

  return result === 29
})

logResult()