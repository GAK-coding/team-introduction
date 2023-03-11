import React from "react";
import { Face,Box, Infomaion,Skill,Detail} from "./styles";
import { useParams } from "react-router-dom";

const infos = {
  오현: ["../image/ohhyun.png","권오현", "Gachon Univ, Computer Engineering","qhslsl@gmail.com","010-3339-4278","5hyun"],
  준: ["../image/june.png","장준", "Gachon Univ, Software","junnim123@naver.com","010-7185-8273","tun111-jun"],
  채영: ["../image/chaeyoung.png","오채영", "Gachon Univ, Software","dhcod@gachon.ac.kr","010-8971-6029","CHCHAENG"],
  은령: ["../image/eunryeong.png","박은령", "Gachon Univ,  Industrial engineering / Software","lyungeg@gmail.com","010-8595-0745","eunryeong1"],
  윤정: ["../image/yunjung.png","김윤정", "Gachon Univ, Software","yjung2036@gmail.com","010-3162-1629","yunjjung"]
};

export default function Each() {

  const{name}=useParams();
    return <div>
    <Box>
      <Face>
      <img src={infos[name][0]} alt="logo" />
      <p>{infos[name][1]}</p>
      </Face>
      <Infomaion>
        <div>
          <Detail>
        <img src="../image/school.png" alt="logo" /><p>{infos[name][2]}</p>
        <p></p>
        </Detail>
        <Detail>
          <img src="../image/mail.png" alt="logo" />
          <p>{infos[name][3]}</p>
        </Detail>
        <Detail>
          <img src="../image/phone.png" alt="logo" />
          <p>{infos[name][4]}</p>
        </Detail>
        <Detail>
          <img src="../image/github.png" alt="logo" />
          <p>{infos[name][5]}</p>
        </Detail>
        </div>
      </Infomaion>
    </Box>
    <Skill>
        <img src="../image/html.png" alt="logo" />
        <img src="../image/js.png" alt="logo" />
        <img src="../image/java.png" alt="logo" />
        <img src="../image/react.png" alt="logo" />
        <img src="../image/spring.png" alt="logo" />
        <img src="../image/python.png" alt="logo" />

    </Skill>
  </div>;

}
