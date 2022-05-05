import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
width: 49%;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
border: 1px solid #D3D3D3;
padding: 7px;
flex-wrap: wrap;
overflow: hidden;
background-color: #D3D3D3;
`;

export const WrapperTitleH2 = styled.h2`
  font-size: 18px;
`;

export const WrapperLink = styled.a`
  text-decoration: none;
  color: #4682B4;
  font-weight: 500;
  a:visited{
    color: #4682B4;  
  }
`;