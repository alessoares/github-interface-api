import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 10px;
  border-bottom: 1px solid #DAA520;
  padding-bottom: 18px;
  
  input{
    width: 50%;
    padding: 5px 10px;
  }

  button{
    padding: 0 15px;
    cursor: pointer;
    background-color: #808080;
    color: #F0F8FF;
    font-weight: 500;
    border: none;
    transition: .3s;
  }

  button:hover{
    background-color: #2F4F4F;
  }
`;