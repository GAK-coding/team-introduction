import styled from "styled-components";

export const Each = styled.div`
  width: 60%;
  margin-top: 1rem;
`;

export const LottoNumWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 3rem;
    min-height: 3rem;

    border: 2px solid;
    border-radius: 50%;
    margin-right: 1rem;
    margin-top: 0.6rem;

    color: white;
    font-size: 1.2rem;
  }

  & > span {
    position: absolute;
    top: -23px;
    right: -10px;

    font-size: 1.6rem;
    font-weight: 600;
    color: #23a801;
  }
`;

export const InputWrapper = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  input {
    border: none;
    border-bottom: 1px solid #e0e0e0;

    &:focus {
      outline: none;
    }
  }
`;

export const DrawBtn = styled.button`
  margin-top: 1rem;

  width: 8rem;
  height: 3rem;
  font-size: 1.2rem;

  background: #6698cb;
  color: white;
  border: transparent;
  border-radius: 10px;
`;

export const Result = styled.span`
  margin-top: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
`;
