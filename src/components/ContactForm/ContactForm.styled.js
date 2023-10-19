import styled from "styled-components";
import {  Form,Field, ErrorMessage } from 'formik';

export const Container = styled.div`
padding: 40px;
 
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

width: 400px;
height: 400px;

background-color:${prop => prop.theme.colors.light};
border: 1px solid ${prop => prop.theme.colors.gray}; 
border-radius: 4px;
&:hover{
  border:0;
  box-shadow: ${props =>props.theme.shadows.regular};
}
`;

export const StyledForm = styled(Form)`
display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button`
margin-top: 30px;

width:180px;
height: 40px;

border: 1px solid ${prop => prop.theme.colors.gray};
border-radius: 4px;
background-color: white;
color:${prop => prop.theme.colors.dark};
cursor:pointer;

 &:hover{
  border:0;
  box-shadow: ${props =>props.theme.shadows.regular};
}
`;

export const StyledField = styled(Field)`
padding: 8px;
max-width: 100%;

border: 1px solid ${prop => prop.theme.colors.gray};
  outline: 0;
  border-radius: 4px;

  &:hover{
  border:0;
  box-shadow: ${props =>props.theme.shadows.regular};
  }
`;

export const Label = styled.label`
display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 500px;
  color: ${prop => prop.theme.colors.dark};


`;

export const Error = styled(ErrorMessage)`
color: ${prop => prop.theme.colors.error};
font-style: italic;
`;