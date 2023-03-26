import { nanoid } from 'nanoid';
import { Component } from 'react';
import { AppHeader, AppSubheader, AppBody } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    JSON.parse(contacts)
      ? this.setState({ contacts: JSON.parse(contacts) })
      : console.log('Nothing in storage');
  }

  componentDidUpdate(prevProps, prevState) {
    this.state.contacts !== prevState.contacts
      ? localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
      : console.log('Nothing to change');
  }

  addContact = contactInfo => {
    const newContact = {
      ...contactInfo,
      id: nanoid(),
    };

    const checkDoublicate = this.state.contacts.some(stateContact => {
      return (
        stateContact.name.toLowerCase() === newContact.name.toLowerCase() ||
        stateContact.number === newContact.number
      );
    });

    return checkDoublicate
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  searchContact = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  filterInputing = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <AppBody>
        <AppHeader>Phonebook</AppHeader>
        <ContactForm addContact={this.addContact}></ContactForm>
        <AppSubheader>Contacts</AppSubheader>
        <Filter
          filter={this.state.filter}
          filterInputing={this.filterInputing}
        ></Filter>
        <ContactList
          contacts={this.searchContact()}
          deleteContact={this.deleteContact}
        ></ContactList>
      </AppBody>
    );
  }
}
