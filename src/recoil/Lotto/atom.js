import { atom } from "recoil";

export const lottoNum = atom({
  key: "lottoNum",
  default: Array(9).fill("?"),
});

export const myNum = atom({
  key: "myNum",
  default: [],
});

export const myNumInput = atom({
  key: "myNumInput",
  default: {
    num1: "",
    num2: "",
  },
});

export const prizeList = atom({
  key: "prizeList",
  default: [],
});
