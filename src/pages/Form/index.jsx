import { useState } from "react";
import { ContentCh, ContentRa, ContentTe, Main, Title } from "./styles";

export default function Form() {
  const checkboxList = [
    { id: 0, name: "서울" },
    { id: 1, name: "인천" },
    { id: 2, name: "경기" },
    { id: 3, name: "경북" },
    { id: 4, name: "경남" },
    { id: 5, name: "전북" },
    { id: 6, name: "전남" },
    { id: 7, name: "제주" },
  ];

  // 객관식 input태그 상태관리
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

  // // 해제시 데이터 삭제
  // const onRemove = (item) => {
  //   setCheckedList(checkedList.filter((el) => el !== item));
  // };

  // 주관식 input태그 상태관리
  const [text, setText] = useState("");

  const onChangeText = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  // 찬부식 input 태그 상태관리
  const [radio, setRadio] = useState([]);

  const onSelect = (item) => {
    setRadio(item.target.value);
    console.log(item.target.value, "로 선택 되었다");
  };

  return (
    <Main>
      <Title>
        <p>지역을 선택해주세요</p> <hr />
      </Title>
      <ContentCh>
        {checkboxList.map((item) => (
          <label clasName="checkboxLabel" key={item.id}>
            <input
              type="checkbox"
              value={item.name}
              onChange={(e) => {
                onCheckedElement(e.target.checked, e.target.value);
              }}
              checked={checkedList.includes(item.name) ? true : false}
            />
            <span>{item.name}</span>
          </label>
        ))}
      </ContentCh>

      <Title>
        <p>의견을 입력해주세요</p> <hr />
      </Title>

      <ContentTe>
        <label className="textLabel">
          <span>답변 :</span>
          <input type="text" onChange={onChangeText} value={text}></input>
        </label>
        <br />
        <br />
        <b> 입력 값 : {text}</b>
      </ContentTe>

      <Title>
        <p>성별을 골라주세요</p> <hr />
      </Title>

      <ContentRa>
        <label className="radio">
          <input
            type="radio"
            value="male"
            checked={radio === "male"}
            onChange={onSelect}
          />
          <span>남자</span>
          <input
            type="radio"
            value="female"
            checked={radio === "female"}
            onChange={onSelect}
          />
          <span>여자</span>
        </label>
      </ContentRa>
    </Main>
  );
}
