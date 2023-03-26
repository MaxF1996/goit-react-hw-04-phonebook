import PropTypes from 'prop-types';
import { ContactListUl, ContactListItem, ContactItemDeleteBtn } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListUl>
      {contacts.map(contact => {
        return (
          <ContactListItem key={contact.id}>
            {contact.name}: {contact.number}
            <ContactItemDeleteBtn type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </ContactItemDeleteBtn>
          </ContactListItem>
        );
      })}
    </ContactListUl>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
