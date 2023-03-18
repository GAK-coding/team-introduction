import React from "react";
import { Col, Row } from "antd";
import { SubmitBtn } from "../MakeForm/styles";
import { FromWrapper } from "./styles";
import { formdata } from "../../formdata";
import AskForm from "../../components/AskForm";

export default function ResForm() {
  const { infos, items } = formdata;

  return (
    <Row>
      <Col span={4} />
      <Col span={16} style={{ padding: "0 2rem" }}>
        <FromWrapper style={{ marginTop: "2rem" }}>
          <h2>{infos.title}</h2>
          <div>{infos.explanation}</div>
        </FromWrapper>

        {items.map((item, index) => (
          <AskForm
            key={item.id}
            index={index}
            question={item.question}
            type={item.type}
            values={item.values}
          />
        ))}

        <SubmitBtn>
          <button>응답 제출</button>
        </SubmitBtn>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
}
