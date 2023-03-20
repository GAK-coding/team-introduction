import React from "react";
import { FromWrapper } from "../../pages/ResForm/styles";
import { Radio } from "antd";
import { Input } from "./style";
import { useState } from "react";

export default function AskForm({ question, type, values, index }) {
  // 주관식 input태그 상태관리
  const [text, setText] = useState("");

  const onChangeText = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  // 찬부식 input 태그 상태관리
  const [radio, setRadio] = useState([]);

  const onSelect = (item) => {
    setRadio(item);
    console.log(`${item}로 선택 되었다`);
  };

  return (
    <FromWrapper>
      <h5>{question}</h5>

      {type === "주관식" && (
        <Input
          type="text"
          placeholder={"응답을 해주세요."}
          value={text}
          onChange={onChangeText}
        />
      )}

      {type !== "주관식" && (
        <Radio.Group>
          {values.map((value, idx) => (
            <Radio
              key={idx}
              value={value.value}
              style={{ display: "block" }}
              onChange={() => onSelect(value.value)}
              checked={radio === value.value}
            >
              {value.value}
            </Radio>
          ))}
        </Radio.Group>
      )}
    </FromWrapper>
  );
}
