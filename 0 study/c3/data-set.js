const DATA_SET = [
  [30, 200, 100, 400, 150, 250, 50, 20, 10, 40],
  [50, 20, 10, 40, 15, 25, 100, 400, 150, 250]
];

const createData = (label, nameNum, count = 1000) => {
  const data = Array
    .from({length: count}, () => DATA_SET[nameNum])
    .flat();
  data.unshift(label);
  return data
};

const columns = [
  createData('data1', 0, 1),
  createData('data2', 1, 1)
];
const columns2 = [
  createData('data1', 1, 1),
  createData('data2', 0, 1)
];
