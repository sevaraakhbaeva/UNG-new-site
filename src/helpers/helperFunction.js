export const findIndexById = (arr, id) => {
  let idx = -1;
  arr.map((item, i) => {
    if (item.id === id) {
      idx = i;
      return true;
    }
  });
  return idx;
};
