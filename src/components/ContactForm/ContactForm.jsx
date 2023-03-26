import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactFormLabel,
  ContactFormBody,
  ContactFormInput,
  ContactFormBtn,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <ContactFormBody onSubmit={this.handleSubmit}>
        <ContactFormLabel htmlFor="contactName">Name</ContactFormLabel>
        <ContactFormInput
          type="text"
          name="name"
          value={name}
          id="contactName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleChange}
          required
        />
        <ContactFormLabel htmlFor="contactNumber">Number</ContactFormLabel>
        <ContactFormInput
          type="tel"
          id="contactNumber"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={this.handleChange}
          required
        />
        <ContactFormBtn type="submit">Add Contact</ContactFormBtn>
      </ContactFormBody>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
