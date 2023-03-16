import React from "react";
import { Catchphrase, Team, User, Vision } from "./styles";

import { Link, useNavigate } from "react-router-dom";

const users = [
  { name: "준", img: "june" },
  { name: "오현", img: "ohhyun" },
  { name: "은령", img: "eunryeong" },
  { name: "채영", img: "chaeyoung" },
  { name: "윤정", img: "yunjung" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Vision>
        <p>Go At Kernel</p> <img src="main_logo.png" alt="gak"></img>
      </Vision>
      <Team>
        {users.map((user) => (
          <User
            onClick={() => {
              navigate(`/info/${user.name}`);
            }}
          >
            <div>
              <img src={`../image/${user.img}.png`} alt={user.name} />
            </div>
            <span>{user.name}</span>
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
