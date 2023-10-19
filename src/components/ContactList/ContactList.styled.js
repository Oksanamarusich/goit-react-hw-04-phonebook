import styled from "styled-components";

export const Container = styled.div`
padding-top: 20px;
 
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

width: 400px;
`
export const List = styled.ul`
list-style: none;
padding-left:0;

`

export const ListItem = styled.li`
display: flex;
gap: 10px;
margin-bottom: 10px;

color: ${prop => prop.theme.colors.light};


`

export const Button = styled.button`
border: transparent;
background-color: #fffed5;
border-radius: 4px;
width: 30px;
height: 30px;
cursor:pointer;

 &:hover{
  border:0;
  box-shadow: ${props => props.theme.shadows.regular};
 }
`