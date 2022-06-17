import styled from 'styled-components';

export const ItemLi = styled.li`
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  list-style: inside;
  padding: 5px;
  
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  height: 25px;
  border: 1px solid #black;
  background-color: transparent;
  &:active {
    background-color: rgb(234, 41, 12);
    color: white;
  }
  &:hover {
    border-radius: 5px;
    color: white;
    font-weight: 700;
    background-color: red;
  }
`;

export const Link = styled.a`
  list-style: none;
  font-style: italic;
  font-size: large;
  color: black;
  &:hover{
    background-color: white;
    font-weight: 700;
    transform: scale(1.03);
    
  } 
`;
export const Img = styled.img`
  padding-right: 5px;
  height: auto;
`;