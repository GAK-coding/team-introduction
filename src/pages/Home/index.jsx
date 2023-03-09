import React from "react";
import { Catchphrase, Team, User, Vision, Wrapper } from "./styles";

const users = ["오현", "준", "채영", "은령", "윤정"];

export default function Home() {
  return (
    <Wrapper>
      <Vision>
        <div>
          <span>Go At Kernel</span> <img src="GAK.png" alt="gak" />
        </div>
      </Vision>
      <Team>
        {users.map((user) => (
          <User>
            <img
              src="https://item.kakaocdn.net/do/fd0050f12764b403e7863c2c03cd4d2d7154249a3890514a43687a85e6b6cc82"
              alt={user}
            />
            <span>{user}</span>
          </User>
        ))}
      </Team>
      <Catchphrase>
        <span>도전GAK, 빌드GAK, 배포GAK</span>
        <div />
      </Catchphrase>
    </Wrapper>
  );
}
