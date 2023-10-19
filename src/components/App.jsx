import {Component} from "react";
import {ContactForm} from "./ContactForm/ContactForm"
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }
  
  componentDidMount() {
    const contactsList = localStorage.getItem('contacts');
    if (contactsList !== null) {
      
      this.setState({
        contacts:JSON.parse(contactsList),
      });
    }
}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
      
    }
  }
  
  addContacts = (newContact) => {
    this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length
      ? alert(`${newContact.name}: is already in contacts`)
      :this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }]
    }))
    
  }

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    })
  }

  getVisibleName = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
  
  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id !== contactId )
    }))
  }

  render() {
  
     const visibleName = this.getVisibleName();
    
    return (<div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={this.addContacts } />
      
      <h2>Contacts</h2>
      <Filter
        filter={this.state.filter}
        onChangeFilter={this.changeFilter} />
      
      <ContactList contacts={visibleName} onDelete = {this.deleteContacts} />
</div>
    
      
    
  );
}
  
};
