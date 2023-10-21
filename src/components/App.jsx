import {useState, useEffect} from "react";
import {ContactForm} from "./ContactForm/ContactForm"
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const getInitialContacts = () => {
  const contactsList = localStorage.getItem('contacts');
 console.log(contactsList)
  if (contactsList !== []) {
    return JSON.parse(contactsList);
  } else if (contactsList === []) {
     return {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
       ]
       
  };
  };
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');
  
  
  useEffect(() => {
     localStorage.setItem('contacts', JSON.stringify(contacts));
      
    }, [contacts]);
  
  const addContacts = (newContact) => {
    contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length
      ? alert(`${newContact.name}: is already in contacts`):
      setContacts(prevState =>  [...prevState, { ...newContact, id: nanoid() }])
}

 const changeFilter = newFilter => {
   setFilter(newFilter);
  }

  const visibleName = contacts.filter(contact =>
       contact.name.toLowerCase().includes(filter.toLowerCase()));
   
 const deleteContacts = contactId => {
    setContacts(prevContacts => contacts.filter(contact=>contact.id !== contactId ))
}
      
return (<div>
       <h1>Phonebook</h1>
       <ContactForm onAdd={addContacts } />
      
       <h2>Contacts</h2>
      <Filter
         filter={filter}
         onChangeFilter={changeFilter} />
      
       <ContactList contacts={visibleName} onDelete = {deleteContacts} />
 </div>
    );
}


