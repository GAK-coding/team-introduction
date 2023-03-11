import styled from "styled-components";

export const Vision = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  img {
    width: 250px;
    margin-left: 74px;
  }

  p {
    font-size: 60px;
    color: #464646;
  }
`;

export const Catchphrase = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 350px;

  p {
    font-size: 35px;
    color: #464646;
    z-index: 2;
  }

  div {
    position: absolute;
    width: 510px;
    height: 20px;
    bottom: 33px;
    background: rgba(244, 229, 194, 0.55);
    z-index: 1;
  }
`;
