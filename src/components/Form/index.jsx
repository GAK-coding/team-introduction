import React from "react";
import { FormWrapper, Select, Title } from "./styles";

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
            <button onClick={() => deleteItem(idx)}>질문 삭제</button>
          </div>
        </Select>
      </div>
      <div>
        {item.type === "주관식" && <div>주관식입니다.</div>}
        {(item.type === "객관식" || item.type === "찬부식") && (
          <div>
            {item.values?.map((opt, optId) => (
              <div>
                <input
                  type="text"
                  value={opt}
                  onChange={(e) => onChangeOption(idx, optId, e)}
                />
                {optId !== 0 && item.type === "객관식" && (
                  <button onClick={() => deleteOption(idx, optId)}>-</button>
                )}
              </div>
            ))}
            {item.type === "객관식" && (
              <button onClick={() => addOption(idx)}>추가</button>
            )}
          </div>
        )}
      </div>
    </FormWrapper>
  );
}
