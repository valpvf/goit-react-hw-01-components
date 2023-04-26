// import {clsx} from 'clsx';
import styled from 'styled-components';

export const ItemStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 560px;
  padding: 30px;
  box-shadow: 10px 5px 5px #cbc9c997;
`;

export const ImageStyled = styled.img`
width: 100px;
height: 100px;
`;

export const StatusStyled = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;

&false {
    background-color: red;
}
`;

