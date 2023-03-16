import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    
`
    ;
export const Content = styled.div`
    // grid-column-start: ${(props) => props.cs} ;
    // grid-column-end: ${(props) => props.ce} ;
    // grid-row-start: ${(props) => props.rs};
    // grid-row-end: ${(props) => props.re};
    // z-index: ;
    font-family: bingle;
    text-align: center;
    align-items: center;
    `
    ;
export const Title = styled.h3`
    text-align: center;
    font-size: 30px;
    font-weight: bold;`
    ;

export const Img = styled.img`
    text-align=center;
`;
export const Rule = styled.div`
    //margin-top: px;
    margin-left: 150px;
    align-items: center;
    justify-content: center;
    background-size: auto;
    width: 300px;
    background-color:#FFF2E6;
    background-clip: content-box;
    text-align: center;
    font-size: 18px;`
    ;


