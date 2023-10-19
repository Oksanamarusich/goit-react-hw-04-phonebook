import styled from "styled-components";

export const Container = styled.div`
padding: 40px;
 
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

color: ${prop => prop.theme.colors.dark};


`

export const Button = styled.button`
border: transparent;
background-color: #ADD8E6;
cursor:pointer;
`