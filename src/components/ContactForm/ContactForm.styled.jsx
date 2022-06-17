import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  padding: 10px;
  `;

export const Input = styled.input`
  position: relative;
  font-size: 14px;
  background: #ffffff;
  border-radius: 5px;
  line-height: 25px;
  height: 25px;
  width: 250px;
  padding: 0 10px;
  border: 1px solid #cacaca;
  margin-bottom: 20px;
  &:active {
    box-shadow: rgb(155, 25, 233);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 0 5px 25px;
  font-weight: 500;
  font-size: 20px;
`;

export const Button = styled.button`
  margin-left: 80px; 
  font-size: 16px;
  width: 130px;
  height: 30px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
  &:active {
    background-color: rgb(75, 75, 193);
  }
  &:hover {
    border-radius: 5px;
    color: white;
    font-weight: 700;
    background-color: blue;
  }
`;
