import React from "react";
import { Catchphrase, Team, User, Vision } from "./styles";

const users = ["오현", "준", "은령", "채영", "윤정"];

export default function Home() {
  return (
    <>
      <Vision>
        <p>Go At Kernel</p> <img src="main_logo.png" alt="gak"></img>
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
        <p>도전 GAK, 빌드 GAK, 배포 GAK</p>
        <div />
      </Catchphrase>
    </>
  );
}
