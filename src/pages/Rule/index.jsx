import React from "react";
import * as style from "./styles.jsx";

function Project(props) {
  return (
    <div>
      <style.Title>GAK_ {props.title}</style.Title>
    </div>

  );
}
export default function Rule() {
  const titles = ["Our Homepage", "2nd Term Project ", "3rd Term Project", "4th Term Project"]
  return (
    <div>
      <div>
        <h1>TermProjct!</h1>
        <style.Wrapper>
          
            {titles.map((title) => <Project title={title} />)}
            <div></div>
          
        </style.Wrapper>
      </div>
      <div>
        <style.Rule>
          <h1>규칙</h1>
          1. 잔디 매일 심기<br></br>
          2. 싸우지 말기<br></br>
          3. 모르면 화내지 말고 알려주기<br></br>
          4. 시간 약속 지키기<br></br>
          5. 개인 행동 금지<br></br>
          6. 비난 금지<br></br>
          7. 사이좋게 지내기<br></br>
        </style.Rule>
      </div>

    </div>
  );
}
