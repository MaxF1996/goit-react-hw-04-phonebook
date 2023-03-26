import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

import { nanoid } from 'nanoid';

import { AppHeader, AppSubheader, AppBody } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = contactInfo => {
    const newContact = {
      ...contactInfo,
      id: nanoid(),
    };

    const checkDoublicate = contacts.some(contact => {
      return (
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
      );
    });

    return checkDoublicate
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(prevState => {
          return [...prevState, newContact];
        });
  };

  const searchContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterInputing = e => {
    setFilter(() => {
      return e.target.value;
    });
  };

  const deleteContact = id => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id);
    });
  };

  return (
    <AppBody>
      <AppHeader>Phonebook</AppHeader>
      <ContactForm addContact={addContact}></ContactForm>
      <AppSubheader>Contacts</AppSubheader>
      <Filter filter={filter} filterInputing={filterInputing}></Filter>
      <ContactList
        contacts={searchContact()}
        deleteContact={deleteContact}
      ></ContactList>
    </AppBody>
  );
};

export default App;
