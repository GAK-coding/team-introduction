import styled from "styled-components";

export const Box=styled.div`
    width: 80%;
    height:50%;
    margin: auto;
    margin-top:4%;
    padding:2% 1%;
    display: flex;
    background-color:lightblue;
  
`;

export const Face = styled.div`
    width:50%;
    float:left;
    align-items: center;
    img {
        width: 60%;
        margin-left: 20%;
        display: block;
        
    }
    p{
        text-align : center;
        font-size: 1.5rem;
        margin-top:3%;
    }
`;
export const Detail = styled.div`
    margin-top:5%;
`;


export const Infomaion=styled.div`
    width:50%;
    float:right;
    margin-right: 5% ;
    margin-top:4%;
    display: block;
    p {
        margin:0.9rem;
        font-size: 1.4rem;
        margin-top:7%;

        
    }
    img{
        float:left;
        margin-right:3%;
        
    }
`;

export const Skill=styled.div`
    height:50%;
    width:80%;
    margin: auto;
    margin-top:4%;
    padding:2% 1%;
    display: flex;
    justify-content: space-between;

    img {
        width: 16%;
        height:16%;
        margin: 3%;
        display: block;
    }

`;


