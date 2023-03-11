import React from "react";
import { Catchphrase, Vision } from "./styles";

export default function Home() {
  return (
    <>
      <Vision>
        <p>Go At Kernel</p> <img src="main_logo.png" alt="gak"></img>
      </Vision>

      <Catchphrase>
        <p>도전 GAK, 빌드 GAK, 배포 GAK</p>
        <div />
      </Catchphrase>
    </>
  );
}
