import React, { useCallback, useState } from "react";
import { Col, Row } from "antd";
import FormInfo from "../../components/FormInfo";
import Form from "../../components/Form";

export default function MakeForm() {
  const [items, setItems] = useState([
    {
      question: "",
      type: "객관식",
      values: ["옵션1"],
    },
    {
      question: "",
      type: "주관식",
    },
    {
      question: "",
      type: "찬부식",
      values: ["예", "아니요"],
    },
  ]);

  const onChangeQuestion = (id, e) => {
    let temp = [...items];
    let item = temp.splice(id, 1)[0];
    item["question"] = e.target.value;
    temp.splice(id, 0, item);
    setItems(temp);
  };

  const onChangeType = (id, e) => {
    let { value } = e.target;
    let temp = [...items];
    let item = temp.splice(id, 1)[0];
    item["type"] = value;
    if (value === "객관식") item["values"] = ["옵션1"];
    else if (value === "주관식") delete item["values"];
    else item["values"] = ["예", "아니요"];

    temp.splice(id, 0, item);
    setItems(temp);
  };

  const onChangeOption = (id, optId, e) => {
    let temp = [...items];
    let item = temp.splice(id, 1)[0];
    item["values"][optId] = e.target.value;

    temp.splice(id, 0, item);
    setItems(temp);
  };

  const addOption = (id) => {
    let temp = [...items];
    let item = temp.splice(id, 1)[0];
    item["values"].push("");

    temp.splice(id, 0, item);
    setItems(temp);
  };

  const deleteOption = (id, optId) => {
    let temp = [...items];
    let item = temp.splice(id, 1)[0];
    item.values.splice(optId, 1);
    temp.splice(id, 0, item);
    setItems(temp);
  };

  const addItem = () => {
    let temp = [...items];
    temp.push({
      question: "",
      type: "객관식",
      values: ["옵션1"],
    });
    setItems(temp);
  };

  const deleteItem = (id) => {
    let temp = [...items];
    temp.splice(id, 1);
    setItems(temp);
  };

  console.log(items);

  return (
    <div>
      <Row>
        <Col span={3}>
          <button onClick={addItem}>질문 추가</button>
        </Col>
        <Col span={18} style={{ padding: "0 2rem" }}>
          <FormInfo />

          {items.map((item, idx) => (
            <Form
              item={item}
              idx={idx}
              onChangeQuestion={onChangeQuestion}
              onChangeType={onChangeType}
              onChangeOption={onChangeOption}
              addOption={addOption}
              deleteItem={deleteItem}
              deleteOption={deleteOption}
            />
          ))}
        </Col>
        <Col span={3}></Col>
      </Row>
    </div>
  );
}
