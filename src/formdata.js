export const testdata = {
  infos: { title: "테스트 제목", explanation: "우와 재밌는 설문이에요!" },
  items: [
    {
      id: "f4dd98ef-ea62-43bb-ae2d-60e0d60d86b4",
      question: "망고가 오래되면?",
      type: "객관식",
      values: [
        { value: "사망고", state: false },
        { value: "할망고", state: false },
      ],
    },
    {
      id: "e01a78d6-12c2-43cc-9346-9ddd7974f401",
      question: "당신의 나이는?",
      type: "주관식",
    },
    {
      id: "5a1059a1-8d8e-425d-a80d-32ad58e634a1",
      question: "종강해도 될까요?",
      type: "찬부식",
      values: [
        { value: "예", state: false },
        { value: "아니요", state: false },
      ],
    },
  ],
};
