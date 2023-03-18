import React, { useState } from "react";
import { Col, Row } from "antd";
import FormInfo from "../../components/FormInfo";
import Form from "../../components/Form";
import { AddQuestion, SubmitBtn } from "./styles";
import { v4 as uuid } from "uuid";

export default function MakeForm() {
  const [infos, setInfos] = useState({ title: "", explanation: "" });

  const onChangeTitle = (e) => {
    let temp = { ...infos };
    temp.title = e.target.value;
    setInfos(temp);
  };

  const onChangeExplanation = (e) => {
    let temp = { ...infos };
    temp.explanation = e.target.value;
    setInfos(temp);
  };

  const [items, setItems] = useState([
    {
      id: uuid(),
      question: "",
      type: "객관식",
      values: [{ value: "", state: false }],
    },
    {
      id: uuid(),
      question: "",
      type: "주관식",
    },
    {
      id: uuid(),
      question: "",
      type: "찬부식",
      values: [
        { value: "예", state: false },
        { value: "아니요", state: false },
      ],
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
    if (value === "객관식") item["values"] = [{ value: "옵션1", state: false }];
    else if (value === "주관식") delete item["values"];
    else
      item["values"] = [
        { value: "예", state: false },
        { value: "아니요", state: false },
      ];

    temp.splice(id, 0, item);
    setItems(temp);
  };

  const onChangeOption = (id, optId, e) => {
    let temp = [...items];
    let item = temp.splice(id, 1)[0];
    item["values"][optId]["value"] = e.target.value;

    temp.splice(id, 0, item);
    setItems(temp);
  };

  const addOption = (id) => {
    let temp = [...items];
    let item = temp.splice(id, 1)[0];
    item["values"].push({ value: "", state: false });

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
      id: uuid(),
      question: "",
      type: "객관식",
      values: [{ value: "옵션1", state: false }],
    });
    setItems(temp);
  };

  const deleteItem = (id) => {
    let temp = [...items];
    temp.splice(id, 1);
    setItems(temp);
  };

  console.log(JSON.stringify({ infos, items }));

  return (
    <Row>
      <Col span={4} />
      <Col span={16} style={{ padding: "0 2rem" }}>
        <FormInfo
          infos={infos}
          onChangeTitle={onChangeTitle}
          onChangeExplanation={onChangeExplanation}
        />

        {items.map((item, idx) => (
          <Form
            key={item.id}
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

        <SubmitBtn>
          <button>폼 생성하기</button>
        </SubmitBtn>
      </Col>
      <Col span={4}>
        <AddQuestion onClick={addItem}>
          <span>질문 추가</span>
        </AddQuestion>
      </Col>
    </Row>
  );
}
