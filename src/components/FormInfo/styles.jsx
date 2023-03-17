import styled from "styled-components";
import TextArea from "antd/es/input/TextArea";

export const Wrapper = styled.section`
  margin: 2rem 0;
  padding: 1rem;

  border: 1px solid;
  border-radius: 15px;

  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

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
      border-bottom: 1px solid black;
    }
  }
  margin-bottom: 1rem;
`;

export const Explanation = styled(TextArea)`
  height: 5rem;
  margin-bottom: 1rem;
`;
