import React from "react";
import styled from "styled-components";

export const Wrapper=styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);



`
;
export const Content = styled.div`
    display:flex;
    align-items:${(props)=>props.location}
    `
    ;
export const Title = styled.h3`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    align-item:${(props)=>props.location}`
    ;


export const Rule = styled.div`
    margin-top: 210px;
    margin-left: 650px;
    width: 500px;
    background-color:pink;
    text-align: center;
    font-size: 18px;`
    ;
