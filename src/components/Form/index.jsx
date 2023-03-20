import React from "react";
import { FormWrapper, Option, Select, ShortAnswer, Title } from "./styles";

const types = ["객관식", "주관식", "찬부식"];

export default function Form({
  item,
  onChangeQuestion,
  idx,
  onChangeType,
  onChangeOption,
  addOption,
  deleteItem,
  deleteOption,
}) {
  return (
    <FormWrapper>
      <div>
        <Title>
          <input
            type="text"
            value={item.question}
            onChange={(e) => onChangeQuestion(idx, e)}
            placeholder={"질문"}
          />
        </Title>
        <Select>
          <select onChange={(e) => onChangeType(idx, e)} value={item.type}>
            {types.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>

          <div>
            <button onClick={() => deleteItem(idx)}>X</button>
          </div>
        </Select>
      </div>
      <Option>
        {item.type === "주관식" && <ShortAnswer>단답형 텍스트</ShortAnswer>}
        {(item.type === "객관식" || item.type === "찬부식") && (
          <div>
            {item.values?.map((opt, optId) => (
              <div key={optId}>
                <input
                  type="text"
                  value={opt.value}
                  onChange={(e) => onChangeOption(idx, optId, e)}
                  placeholder={"옵션을 입력해주세요."}
                />
                {optId !== 0 && item.type === "객관식" && (
                  <button onClick={() => deleteOption(idx, optId)}>X</button>
                )}
              </div>
            ))}
            {item.type === "객관식" && (
              <button onClick={() => addOption(idx)}>추가</button>
            )}
          </div>
        )}
      </Option>
    </FormWrapper>
  );
}
