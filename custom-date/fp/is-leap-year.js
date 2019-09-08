const isLeapYear = (year) => {
  const LEAP_YEAR = 2000
  const LEAP_YEAR_PERIOD = 4

  const diffYear = Math.abs(year - LEAP_YEAR)

  return diffYear % LEAP_YEAR_PERIOD === 0
}

module.exports = isLeapYear