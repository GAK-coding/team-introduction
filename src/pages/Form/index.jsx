import { useState } from "react";
import { CheckBox, Main } from "./styles";

export default function Form() {
  const answer = [{}];

  const checkboxList = [
    { name: "사과" },
    { name: "딸기" },
    { name: "토마토" },
    { name: "포도" },
    { name: "귤" },
  ];

  const [checkedbox, setCheckebox] = useState(false);

  const onCheckedItem = ({ target }) => {
    if (target.checked) {
      answer.push({ type: "checkbox", value: target.id });
      console.log(answer);
      setCheckebox(true);
    } else {
      setCheckebox(false);
    }
  };

  return (
    <>
      <h1>객관식</h1>
      {checkboxList.map((item) => (
        <label clasName="checkboxLabel" key={item.name}>
          <input
            type="checkbox"
            id={item.name}
            onChange={(e) => {
              onCheckedItem(e);
            }}
          />

          <span>{item.name}</span>
        </label>
      ))}
    </>
  );
}
