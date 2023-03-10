import React from "react";
import { Wrapper, BoxOne, BoxTwo, BoxThree, BoxFour } from "./styles";
import { useParams } from "react-router-dom";

const infos = {
  오현: ["권오현", "Gachon Univ, Computer Engineering","-","010-3339-4278","5hyun"],
  준: ["장준", "Gachon Univ, Software","junnim123@naver.com","010-7185-8273","tun111-jun"],
  채영: ["오채영", "Gachon Univ, Software","-","010-8971-6029","CHCHAENG"],
  은령: ["박은령", "Gachon Univ, Software","-","010-8595-0745","eunryeong1"],
  윤정: ["김윤정", "Gachon Univ, Software","-","010-3162-1629","yunjjung"]
};

export default function Each() {

  const{name}=useParams();
  return (
    
    <Wrapper>

      <BoxOne>
        <img src="../image/profile.png" alt="pf" />
        <h2>{infos[name][0]}</h2>
      </BoxOne>

      <BoxTwo>

        <BoxThree>
          <img src="../image/icon-park_school.png" alt="sch" />
          <h2>{infos[name][1]}</h2>
        </BoxThree>

        <BoxThree>
          <img src="../image/icon-park_mail-open.png" alt="mail" />
          <h2>{infos[name][2]}</h2>
        </BoxThree>

        <BoxThree>
          <img src="../image/icon-park_phone-telephone.png" alt="phn" />
          <h2>{infos[name][3]}</h2>
        </BoxThree>

        <BoxThree>
          <img src="../image/icon-park_github-one.png" alt="git" />
          <h2>{infos[name][4]}</h2>
        </BoxThree>

      </BoxTwo>

      <BoxFour>
        <img src="../image/vscode-icons_file-type-html.png" alt="html" />
        <img src="../image/Group.png" alt="js" />
        <img src="../image/logos_java.png" alt="jav" />
        <img src="../image/vscode-icons_file-type-reactjs.png" alt="ra" />
        <img src="../image/logos_spring-icon.png" alt="spr" />
        <img src="../image/vscode-icons_file-type-python.png" alt="py" />
      </BoxFour>

    </Wrapper>
   );

}
