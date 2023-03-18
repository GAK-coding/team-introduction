import React from "react";
import { FromWrapper } from "../../pages/ResForm/styles";
import { Radio } from "antd";
import { Input } from "./style";

export default function AskForm({ question, type, values, index }) {
  return (
    <FromWrapper>
      <h5>{question}</h5>

      {type === "주관식" && (
        <Input type="text" placeholder={"응답을 해주세요."} />
      )}

      {type !== "주관식" && (
        <Radio.Group>
          {values.map((value, idx) => (
            <Radio key={idx} value={value.value} style={{ display: "block" }}>
              {value.value}
            </Radio>
          ))}
        </Radio.Group>
      )}
    </FromWrapper>
  );
}
