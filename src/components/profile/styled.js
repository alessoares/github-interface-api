import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  /*justify-content: center;*/
  align-items: center;
  gap: 12px;

`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 20px;
  height: 260px;
  width: 100%;
  h1{
    font-size: 25px;
    font-weight: 500;
    
  }
  h3{
    font-size: 16px;
    font-weight: 500;
  }
  h4{
    font-size: 14px;
    font-weight: 500;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  flex-wrap: wrap;
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  a {
    text-decoration: none;
    color: #4682B4;
    font-weight: 500;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  border: 2px solid #DAA520;
  width: 200px;
  margin: 10px;
`;