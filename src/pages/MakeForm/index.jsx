import React from "react";
import { Anchor, Col, Row } from "antd";
import FormInfo from "../../components/FormInfo";
import { SortablePane, Pane } from "react-sortable-pane";

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

  const a = <div style={{ border: "1px solid" }}>1</div>;
  const b = <div style={{ border: "1px solid" }}>2</div>;

  const panes = [a, b].map((key) => (
    <Pane key={key} defaultSize={{ width: "100%", height: 120 }}>
      {/*<p>00{key}</p>*/}
      <p>
        {key}
        {a}
      </p>
    </Pane>
  ));

  return (
    <div>
      <Row>
        <Col span={3} />
        <Col span={18} style={{ padding: "0 2rem" }}>
          <FormInfo />

          <div style={{ padding: "10px" }}>
            <SortablePane direction="vertical" margin={20}>
              {panes}
            </SortablePane>
          </div>

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
