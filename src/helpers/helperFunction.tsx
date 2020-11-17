export const findIndexById = (
  arr: { [index: string]: string | number | undefined }[],
  id: string
): number => {
  let idx: number = -1;
  arr.map((item, i: number) => {
    if (item.id === id) {
      idx = i;
      return true;
    }
  });
  return idx;
};
