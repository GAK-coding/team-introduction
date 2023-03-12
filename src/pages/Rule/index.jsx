import React from "react";
import * as style from "./styles.jsx";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import {NavLink} from 'react-router-dom';

function Project(props) {
  return (
    <div>
      <style.Title lcoation={props.location}>GAK_ {props.title}</style.Title>
    </div>

  );
}
export default function Rule() {
  const titles = ["Our Homepage", "2nd Term Project ", "3rd Term Project", "4th Term Project"]
  return (
    <div>
        <style.Wrapper>
          <div>
            <Project location={"center"} title="Our HomePage" />
            <style.Content>
            GAK 소개 홈페이지<br></br>
            <img src="./homepageImg.png" height="250vh" alt="Homepage Image"/><br></br>
            <Link to="https://github.com/GAK-coding/team-introduction">GAK Hompage</Link>
            </style.Content>
            
          </div>
          <div></div>
          <div>
            <Project location="center" title="2nd TermProject" />
            <style.Content>GAK 두번째 프로젝트</style.Content>
          </div>
          <div></div>
          <div>
            <style.Rule>
              <h1>규칙</h1>
              <h4>#도전각#빌드각#배포각</h4>
              1. 잔디 매일 심기<br></br>
              2. 싸우지 말기<br></br>
              3. 모르면 화내지 말고 알려주기<br></br>
              4. 시간 약속 지키기<br></br>
              5. 개인 행동 금지<br></br>
              6. 비난 금지<br></br>
              7. 사이좋게 지내기<br></br>
            </style.Rule>
          </div>
          <div></div>
          <div>
            <Project title="3rd TermProject" />
            <style.Content>GAK 3번째 프로젝트</style.Content>
          </div>
          <div></div>
          <div>
            <Project title="3rd TermProject" />
            <style.Content>GAK 4번째 프로젝트</style.Content>
          </div>
        </style.Wrapper>
        {/* <style.Wrapper>
          
            {titles.map((title) => <Project title={title} />)}
            <div></div>
          
        </style.Wrapper> */}

    </div>
  );
}
