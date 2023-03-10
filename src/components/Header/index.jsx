import React from "react";
import { Logo, Nav, Wrapper } from "./styles";
import { Link } from "react-router-dom";
import { UncontrolledCollapse,  CardBody, Card } from 'reactstrap';

export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <Link to={"/"}>
          <img src="logo.png" alt="logo" />
        </Link>
      </Logo>
      <Nav>   
          <Link to={"/rule"}>Rule</Link>
          <p color="warning" id="toggle">
              Info
          </p>
      <UncontrolledCollapse toggler="#toggle" >
        <Card style={{textAlign:"left"}} color="light" outline>
          <CardBody style={{padding:0}}>
          
            <Link to={"/info/준"}>준 </Link>
            
            <Link to={"/info/오현"}>오현 </Link>
            
            <Link to={"/info/채영"}>채영 </Link>
            
            <Link to={"/info/은령"}>은령 </Link>
            
            <Link to={"/info/윤정"}>윤정</Link>
            
          </CardBody>
        </Card>
      </UncontrolledCollapse>
      </Nav>
    </Wrapper>
  );
}
