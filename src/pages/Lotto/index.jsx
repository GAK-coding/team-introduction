import React, { useState } from "react";
import { Col, Row } from "antd";
import { useRecoilState, useRecoilValue } from "recoil";
import { lottoNum, myNum, myNumInput } from "../../recoil/Lotto/atom";
import { checkDraw } from "../../recoil/Lotto/checkDraw";
import { DrawBtn, InputWrapper, LottoNumWrapper, Each, Result } from "./styles";

export default function Lotto() {
  const lottoColors = [
    "#FFC300",
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#581845",
    "#00BFFF",
    "#00FF7F",
    "#FF1493",
    "#8A2BE2",
  ];
  const myColors = [
    "#FF69B4",
    "#00BFFF",
    "#FFD700",
    "#32CD32",
    "#9370DB",
    "#FFA07A",
    "#00FFFF",
    "#FFC0CB",
    "#7B68EE",
  ];
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
    setMy(drawNums(9, [n1, n2]));
    setIsClick(true);
  };

  console.log(correct);

  return (
    <Row>
      <Col span={4} />
      <Col span={16}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Each>
            <h2>추첨 번호</h2>
            <LottoNumWrapper>
              {lottoNums.map((num, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: lottoColors[idx % lottoColors.length],
                  }}
                >
                  {num}
                </div>
              ))}
            </LottoNumWrapper>
          </Each>
          <Each>
            <h2>내 번호</h2>
            <InputWrapper>
              <span>첫 번째 번호: </span>
              <input
                type="text"
                value={myInput.num1}
                onChange={(e) => onChangeMyInput(1, e)}
              />
            </InputWrapper>
            <InputWrapper>
              <span>두 번째 번호: </span>
              <input
                type="text"
                value={myInput.num2}
                onChange={(e) => onChangeMyInput(2, e)}
              />
            </InputWrapper>
            <LottoNumWrapper>
              {my.map((num, idx) => (
                <LottoNumWrapper
                  key={idx}
                  style={{ backgroundColor: myColors[idx % myColors.length] }}
                >
                  {num}
                  {correct.includes(num) && <span>✓</span>}
                </LottoNumWrapper>
              ))}
            </LottoNumWrapper>
          </Each>

          <div style={{ textAlign: "center" }}>
            <DrawBtn onClick={onClickDraw}>추첨</DrawBtn>
          </div>

          {isClick && correct.length < 3 && (
            <Result>
              {correct.length}개가 일치해 당첨이 되지 않았어요ㅠㅠ
            </Result>
          )}
          {(correct.length >= 3 || correct.length.length < 9) && (
            <Result>{correct.length}개가 일치해 보너스!</Result>
          )}
          {correct.length === 9 && (
            <Result>{correct.length}개가 일치해 대박!!!</Result>
          )}
        </div>
      </Col>
      <Col span={4} />
    </Row>
  );
}
