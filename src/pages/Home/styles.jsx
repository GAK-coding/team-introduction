import styled from "styled-components";

export const Wrapper = styled.div`
  height: 86vh;

  box-sizing: border-box;
`;

export const Vision = styled.div`
  height: 40%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 25%;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > span {
      font-size: 70px;
      color: #464646;
    }
  }
`;

export const Team = styled.div`
  width: 80%;
  height: 40%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const User = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
  }

  span {
    margin-top: 1rem;
    font-size: 30px;
    color: #464646;
  }
`;

export const Catchphrase = styled.div`
  height: 20%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-style: italic;
    font-size: 45px;
    line-height: 53px;

    color: #464646;
  }

  div {
    position: absolute;
    bottom: 30px;

    width: 600px;
    height: 15%;
    background-color: rgba(244, 229, 194, 0.55);
  }
`;
