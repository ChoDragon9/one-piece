let maxPage = 10
let totalPage = 15
let currentPage = 1

let pages = []

const handleNext = () => {
  handlePage(currentPage + 1)
  calibratePage()
}

const handlePrev = () => {
  handlePage(currentPage - 1)
  calibratePage()
}

const handlePage = (page) => {
  currentPage = page
}

const calibratePage = () => {
  const currentPageIndex = Math.ceil(currentPage / maxPage)
  const startPage = (currentPageIndex - 1) * maxPage + 1
  const pageLength = Math.min(maxPage, totalPage - startPage + 1)
  pages = Array.from({length: pageLength}).map((_value, index) => startPage + index)
}