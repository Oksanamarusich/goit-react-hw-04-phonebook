import { FaTrashAlt } from "react-icons/fa";

import {Container, List, ListItem, Button} from './ContactList.styled'

export const ContactList = ({ contacts, onDelete }) => {
    
    return <Container>
        {contacts.map(({id, name, number}) => (
            <List key={id}>
                <ListItem><p>{name}: {number}</p>
                    <Button type="button" onClick={() => onDelete(id)}><FaTrashAlt color= "#808080"/></Button>
                </ListItem>
            </List>))}
    </Container>
}