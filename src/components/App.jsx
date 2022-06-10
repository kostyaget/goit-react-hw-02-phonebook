import React, { Component } from "react";
import { isEqual } from "lodash";

import ContactForm from "./contactForm";
import Filter from "./filter";
import ContactList from "./contactList";
import ContactItem from "./contactItem";
import s from "./contactForm/contactForm.module.css";

 export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  ereseContact = (elem) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== elem),
    }));
  }

  accumulateContacts = (data) => {
    const text = this.state.contacts.some((user) => isEqual(data, user));
    !text ? this.setState(prevState => ({
      contacts: [data, ...prevState.contact],
    })) : alert(`${data.name} is already in contacts!` )
  }

  handleFilteredItems = (e) => {
    this.setState({filter: e.ecurrentTarget.value})
  }
  FilteredItems = () => {
    const { filter, contacts } = this.state;
    const loweredFilter = filter.toLowerCase();

    return contacts.filter(elem => elem.name.toLowerCase().includes(loweredFilter));

  }
  render() {
    return (
      <div сlassName={s.container}>
  <h2>Phonebook</h2>
  <ContactForm data={this.accumulateContacts} />
  <h2>Contacts</h2>
  <Filter eventHandler={this.handleFilteredItems} options={this.state.filter} />
        <ContactList>
          <ContactItem erase={this.eraseContact} filtered={this.filteredItems}/>
  </ContactList>
</div>
    )
  }
  
};


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
