import styled from 'styled-components';

export const ItemLi = styled.li`
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  list-style: inside;
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
`;
