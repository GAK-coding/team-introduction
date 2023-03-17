import styled from "styled-components";
import TextArea from "antd/es/input/TextArea";

export const Wrapper = styled.section`
  margin-bottom: 3rem;

  textarea {
    resize: none;
    font-size: 1.2rem;

    &:hover,
    &:focus {
      border: 1px solid #e0e0e0;
    }
  }
`;

export const Title = styled.div`
  & > input {
    width: 100%;
    height: 4rem;
    font-size: 1.4rem;

    border: none;
    border-bottom: 1px solid #e0e0e0;

    &:focus {
      outline: none;
    }
  }
  margin-bottom: 1rem;
`;

export const Explanation = styled(TextArea)`
  height: 5rem;
`;
