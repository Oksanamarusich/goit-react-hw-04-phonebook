import styled from "styled-components";

export const ContainerFilter = styled.div`
margin-left: auto;
margin-right: auto;

width: 400px;

`;
export const Label = styled.label`
display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  max-width: 100%;
  
  color: ${prop => prop.theme.colors.light};
`;

export const FilterInput = styled.input`
padding: 8px;

width: 320px;

border: 1px solid ${prop => prop.theme.colors.gray};
  outline: 0;
  border-radius: 4px;

  &:hover{
  border:0;
  box-shadow: ${props =>props.theme.shadows.regular};
  }
`