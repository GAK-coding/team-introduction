import React from "react";
import { Logo, Nav, Wrapper } from "./styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <Link to={"/"}>GAK</Link>
      </Logo>
      <Nav>
        <Link to={"/info"}>Info</Link>
        <Link to={"/rule"}>Rule</Link>
      </Nav>
    </Wrapper>
  );
}
