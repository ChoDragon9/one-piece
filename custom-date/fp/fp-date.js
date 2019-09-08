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

module.exports = {
  addDay,
  subtractDay,
  diffDay,
}