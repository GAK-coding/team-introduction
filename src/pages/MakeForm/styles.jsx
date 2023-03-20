import styled from "styled-components";

export const AddQuestion = styled.button`
  width: 3rem;
  height: 10rem;
  margin-top: 2rem;

  position: sticky;
  top: 2rem;

  border: 1px solid black;
  border-radius: 20px;

  background-color: white;

  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  & > span {
    font-size: 1.1rem;
    writing-mode: vertical-rl;
  }
`;

export const SubmitBtn = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  & > button {
    width: 12rem;
    height: 4rem;
    font-size: 1.2rem;

    background: #6698cb;
    color: white;
    border: transparent;
    border-radius: 10px;
  }
`;
