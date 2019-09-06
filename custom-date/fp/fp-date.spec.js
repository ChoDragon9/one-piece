const {addDate, diffDay, subtractDate} = require("./fp-date");
const {log, logResult} = require('../log')

log('addDate - tomorrow', () => {
  const today = new Date(2019, 0, 1)
  const tomorrow = addDate(today, 1)

  return tomorrow.getDate() == 2
})

log('addDate - nextWeek', () => {
  const today = new Date(2019, 0, 1)
  const nextWeek = addDate(today, 7)

  return nextWeek.getDate() === 8
})

log('subtractDate - yesterday', () => {
  const today = new Date(2019, 0, 8)
  const yesterday = subtractDate(today, 1)

  return yesterday.getDate() === 7
})

log('subtractDate - prevWeek', () => {
  const today = new Date(2019, 0, 8)
  const prevWeek = subtractDate(today, 7)

  return prevWeek.getDate() === 1
})

log('diffDay', () => {
  const today = new Date(2019, 0, 1)
  const nextWeek = new Date(2019, 0, 8)

  return diffDay(today, nextWeek) === 7
})

logResult()