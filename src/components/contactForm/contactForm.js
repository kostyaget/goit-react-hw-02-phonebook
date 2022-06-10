import s from "./contactForm.module.css";
import propTypes from "prop-types";
import React, { Component } from 'react';

class ContactForm extends Component {
    state = { name: '', number: '' };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }
    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state;
        const newobject = { name: name, number: number };
        this.props.data(newobject);

        this.setState({ name: '', number: '' });
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
                        value={this.handleChange}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <br />
                <label className={s.contacts_lable}>
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
                <button type="submit">Add contact</button>
            </form>
        );
    };
};

export default ContactForm;

ContactForm.propTypes = {
    data: propTypes.func,
};
