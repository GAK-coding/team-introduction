import styled from "styled-components";

export const Box = styled.div`
  width: 65%;
  height: 35%;
  margin: auto;
  margin-top: 4%;
  padding-bottom: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`;

export const Face = styled.div`
  width: 45%;
  float: left;
  align-items: center;
  img {
    width: 60%;
    margin-left: 20%;
    display: block;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 5%;
  }
`;
export const Detail = styled.div`
  /* margin-top: 5%; */
`;

export const Infomaion = styled.div`
  width: 50%;
  float: right;
  /* margin-right: 1%;*/
  margin-top: 2%;
  margin-left: 5%;
  display: block;
  align-items: center;
  p {
    margin: 0.9rem;
    margin-left: 100px;
    font-size: 1.6rem;
    margin-top: 7%;
    text-align: left;
  }
  img {
    float: left;
    margin-right: 3%;
  }
`;

export const Skill = styled.div`
  height: 30%;
  width: 80%;
  margin: auto;
  padding: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 10%;
    height: 10%;
    display: block;
  }
`;
