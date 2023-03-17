import styled from "styled-components";

export const FormWrapper = styled.section`
  //min-height: 12rem;
  border: 1px solid;
  border-radius: 20px;
  margin-bottom: 2rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  & > div {
    width: 100%;
    height: 50%;
  }

  & > div:first-of-type {
    display: flex;
  }
`;

export const Title = styled.div`
  width: 60%;
  padding: 0 1rem;

  input {
    width: 100%;
    height: 4rem;
    font-size: 1.4rem;

    border: none;
    border-bottom: 1px solid #e0e0e0;

    &:focus {
      outline: none;
    }
  }
`;

export const Select = styled.div`
  width: 40%;

  display: flex;
  justify-content: space-between;

  & > select {
    width: 8rem;
    height: 3rem;

    border-radius: 10px;
    margin-left: 3rem;

    font-size: 1.2rem;

    text-align: center;
  }

  & > div > button {
    border: none;
    background-color: inherit;

    font-size: 1.4rem;
  }
`;

export const Option = styled.div`
  min-height: 6rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div > div {
    & > input {
      width: 50%;
      height: 3rem;
      font-size: 1.2rem;

      border: none;
      border-bottom: 1px solid #e0e0e0;
      margin-bottom: 0.5rem;

      &:focus {
        outline: none;
        border-bottom: 1px solid black;
      }
    }

    & > button {
      border: none;
      background-color: inherit;

      font-size: 1.4rem;
      margin-left: 0.5rem;
    }
  }

  & > div > button {
    width: 5rem;
    height: 2rem;

    background: #6698cb;
    color: white;
    border: transparent;
    border-radius: 10px;
  }
`;

export const ShortAnswer = styled.div`
  border-bottom: 1px dotted;
  font-size: 1.2rem;
`;
