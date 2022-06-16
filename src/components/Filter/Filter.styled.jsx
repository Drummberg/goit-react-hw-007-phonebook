import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  font-weight: 500;
  font-size: 20px;
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
  margin-top: 5px;
  &:active {
    box-shadow: rgb(155, 25, 233);
  }
`;
