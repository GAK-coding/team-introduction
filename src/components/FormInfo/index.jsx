import React, { useCallback, useState } from "react";
import { Explanation, Title, Wrapper } from "./styles";
import { Input } from "antd";

export default function FormInfo() {
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onChangeExplanation = useCallback((e) => {
    setExplanation(e.target.value);
  }, []);

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
