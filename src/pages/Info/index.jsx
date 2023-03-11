import React from "react";
import { Face,Box, Infomaion,Skill,Detail} from "./styles";

export default function Info() {
  return <div>
    <Box>
      <Face>
      <img src="eunryeong.png" alt="logo" />
      <p>박은령</p>
      </Face>
      <Infomaion>
        <div>
          <Detail>
        <img src="school.png" alt="logo" /><p>Gachon Univ industrial engineering / Software</p>
        <p></p>
        </Detail>
        <Detail>
          <img src="mail.png" alt="logo" />
          <p>lyungeg@gmail.com</p>
        </Detail>
        <Detail>
          <img src="phone.png" alt="logo" />
          <p>010-8595-0745</p>
        </Detail>
        <Detail>
          <img src="github.png" alt="logo" />
          <p>eunryeong1</p>
        </Detail>
        </div>
      </Infomaion>
    </Box>
    <Skill>
        <img src="html.png" alt="logo" />
        <img src="spring.png" alt="logo" />
        <img src="js.png" alt="logo" />
        <img src="python.png" alt="logo" />

    </Skill>
  </div>;
}
