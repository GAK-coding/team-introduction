import React from "react";
import { Logo, Nav, Wrapper } from "./styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <Link to={"/"}>
          <img src="logo.png" alt="logo" />
        </Link>
      </Logo>
      <Nav>
        <Link to={"/info"}>Info</Link>
        <Link to={"/rule"}>Rule</Link>
      </Nav>
    </Wrapper>
  );
}
