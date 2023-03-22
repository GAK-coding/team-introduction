import { selector } from "recoil";
import { lottoNum, myNum, prizeList } from "./atom";

function calculateOverlap(arr1, arr2) {
  const list = [];

  // use a Set to easily check for overlaps
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // iterate over set1 and check if each item is also in set2
  set1.forEach((item) => {
    if (set2.has(item)) {
      list.push(item);
    }
  });

  return list;
}

export const checkDraw = selector({
  key: "checkDraw",
  get: ({ get }) => {
    const lottoList = get(lottoNum);
    const myList = get(myNum);

    return calculateOverlap(lottoList, myList);
  },
  set: ({ set }, newValue) => {
    set(prizeList, newValue);
  },
});
