import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  padding: 0 3rem;
  border-bottom: 1px solid #323232cc;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Logo = styled.div`
  img {
    width: 200px;
  }
`;

export const Nav = styled.div`
  a {
    font-size: 30px;
    margin-left: 2rem;
  }
`;
