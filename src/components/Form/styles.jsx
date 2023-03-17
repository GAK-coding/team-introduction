import styled from "styled-components";

export const FormWrapper = styled.section`
  //min-height: 250px;
  height: 10rem;
  border: 1px solid #e0e0e0;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
    height: 50%;
  }

  & > div:first-of-type {
    display: flex;
  }
`;

export const Title = styled.div`
  width: 50%;
  border: 1px solid;
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
  width: 50%;
  border: 1px solid;
`;
