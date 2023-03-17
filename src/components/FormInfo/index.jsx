import React from "react";
import { Explanation, Title, Wrapper } from "./styles";

export default function FormInfo({
  infos: { title, explanation },
  onChangeTitle,
  onChangeExplanation,
}) {
  return (
    <Wrapper>
      <Title>
        <input
          value={title}
          onChange={onChangeTitle}
          type="text"
          placeholder={"설문 제목 입력"}
        />
      </Title>
      <Explanation
        vlalue={explanation}
        showCount
        maxLength={100}
        onChange={onChangeExplanation}
        placeholder={"설문 설명"}
      />
    </Wrapper>
  );
}
