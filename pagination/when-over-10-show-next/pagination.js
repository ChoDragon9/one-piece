const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const toPaginationGroup = (totalPage, maxPage) => {
  const pagination = Array
    .from({length: totalPage}, (v, i) => i + 1);
  return chunk(pagination, maxPage);
};

const props = {
  maxPage: 10,
  totalPage: 24,
};
const state = {
  paginationGroup: toPaginationGroup(props.totalPage, props.maxPage),
  paginationGroupIndex: 0,
  pages: [],
  currentPage: 1,
};

const handleNext = () => {
  state.paginationGroupIndex += 1;
  calibratePage();
  changeCurrentPage(state.pages[0])
};

const handlePrev = () => {
  state.paginationGroupIndex -= 1;
  calibratePage();
  changeCurrentPage(state.pages[state.pages.length - 1])
};

const hasNext = () => {
  const groupLength = state.paginationGroup.length;
  if (groupLength === 1) {
    return false;
  }
  return groupLength - 1 > state.paginationGroupIndex;
};

const hasPrev = () => {
  return state.paginationGroupIndex > 0;
};

const calibratePage = () => {
  state.pages = state.paginationGroup[state.paginationGroupIndex]
};

const changeCurrentPage = (page) => {
  state.currentPage = page;
};
