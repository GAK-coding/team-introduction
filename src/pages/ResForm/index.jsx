import React, { useState } from "react";
import { Col, Row } from "antd";
import { SubmitBtn } from "../MakeForm/styles";
import { FromWrapper } from "./styles";
import { formdata } from "../../formdata";
import AskForm from "../../components/AskForm";

export default function ResForm() {
  const { infos, items } = formdata;

  const [checkedList, setCheckedList] = useState([]);

  // 체크시 데이터 저장, 해제시 데이터 삭제
  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
      console.log(item, " 이 체크 되었다");
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
      console.log(item, " 이 체크가 취소되었다");
    }
  };

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
