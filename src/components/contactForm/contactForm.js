import s from "./contactForm.module.css";
import propTypes from "prop-types";
import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
        name: '',
        id: '',
        number: '',
    }

  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ name: value, id: id});
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newObject = { name: name, number: number };
    this.props.data(newObject);

    this.setState({ name: '', number: '', id: ''});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={s.contacts_label}>
          Name
          <br />
          <input
            className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label className={s.contacts_label}>
          Number
          <br />
          <input
            className={s.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  data: propTypes.func.isRequired,
};
