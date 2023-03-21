import React, { useState } from "react";
import { Col, Row } from "antd";
import { useRecoilState, useRecoilValue } from "recoil";
import { lottoNum, myNum, myNumInput } from "../../recoil/Lotto/atom";
import { checkDraw } from "../../recoil/Lotto/checkDraw";

export default function Lotto() {
  const [isClick, setIsClick] = useState(false);
  const [lottoNums, setLottoNums] = useRecoilState(lottoNum);
  const [my, setMy] = useRecoilState(myNum);
  const [myInput, setMyInput] = useRecoilState(myNumInput);
  const correct = useRecoilValue(checkDraw);

  const drawNums = (len, state) => {
    const numbers = new Set(state);
    while (numbers.size < len) {
      let randomNumber = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  };

  const onChangeMyInput = (id, e) => {
    let temp = { ...myInput };
    temp[`num${id}`] = e.target.value.trim();
    setMyInput(temp);
  };

  const onClickDraw = () => {
    const { num1, num2 } = myInput;
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);

    if (!num1 && !num2) {
      alert("숫자를 입력하세요.");
      return;
    }
    if (num1 === num2) {
      alert("숫자가 중복됩니다.");
      return;
    }
    if (n1 < 1 || n1 > 45 || n2 < 1 || n2 > 45) {
      alert("1~45 사이 숫자를 입력해주세요.");
      return;
    }

    setLottoNums(drawNums(9));
    let tempMy = [...drawNums(7), n1, n2];
    tempMy.sort((a, b) => a - b);
    setMy(tempMy);
    setIsClick(true);
  };

  return (
    <Row>
      <Col span={4} />
      <Col span={16} style={{ padding: "0 2rem" }}>
        <div>
          <h2>추첨 번호</h2>
          {lottoNums.map((num, idx) => (
            <div key={idx}>{num}</div>
          ))}
        </div>
        <div>
          <h2>내 번호</h2>
          <input
            type="text"
            value={myInput.num1}
            onChange={(e) => onChangeMyInput(1, e)}
          />
          <input
            type="text"
            value={myInput.num2}
            onChange={(e) => onChangeMyInput(2, e)}
          />
          {my.map((num, idx) => (
            <div key={idx}>{num}</div>
          ))}
        </div>

        <button onClick={onClickDraw}>추첨</button>

        {isClick && <div>{correct}</div>}
        {correct.length >= 3 && correct.length < 9 && <div>보너스!</div>}
        {correct.length === 9 && <div>대박!!!</div>}
      </Col>
      <Col span={4} />
    </Row>
  );
}
