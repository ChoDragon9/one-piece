const {addDay, diffDay, subtractDay} = require("./fp-date");
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

logResult()