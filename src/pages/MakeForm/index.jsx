import React from "react";
import { Anchor, Col, Row } from "antd";
import FormInfo from "../../components/FormInfo";

export default function MakeForm() {
  const items = [
    // {
    //   key: "part-1",
    //   href: "#part-1",
    //   title: "Part 1",
    // },
    // {
    //   key: "part-2",
    //   href: "#part-2",
    //   title: "Part 2",
    // },
    // {
    //   key: "part-3",
    //   href: "#part-3",
    //   title: "Part 3",
    // },
  ];

  return (
    <div>
      <Row>
        <Col span={3} />
        <Col span={18} style={{ padding: "0 2rem" }}>
          <FormInfo />

          {/*<div id="part-1" style={{ height: "50vh", background: "red" }} />*/}
          {/*<div*/}
          {/*  id="part-2"*/}
          {/*  style={{ height: "50vh", background: "rgba(0,255,0,0.02)" }}*/}
          {/*/>*/}
          {/*<div*/}
          {/*  id="part-3"*/}
          {/*  style={{ height: "50vh", background: "rgba(0,0,255,0.02)" }}*/}
          {/*/>*/}
        </Col>
        <Col span={3}>
          <Anchor items={items} />
        </Col>
      </Row>
    </div>
  );
}
