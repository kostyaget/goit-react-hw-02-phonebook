import React, { Component } from "react";
import ContactForm from "./contactForm";
import Filter from "./filter";
import ContactList from "./contactList";
import s from "./contactForm/contactForm.module.css";

 class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Eden Fahov', number: '666-66-66'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
   };
   
  //  eraseContact = (elem) => {
  //    this.setState(prevState => ({
  //      contacts: prevState.contacts.filter(contact => contact.name !== elem),
  //    }));
  //  };

  accumulateContacts = data => {
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts`);
      return
    }
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }))
  };

   handleFilteredItems = event => {
     this.setState({ filter: event.currentTarget.value })
   };

  filteredItems = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
   };

   deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
   };
   
   render() {
    const contacts = this.filteredItems();
    return (
      <div className={s.container}>
        <h2>Phonebook</h2>
        <ContactForm data={this.accumulateContacts} />
        <h2>Contacts</h2>
        <Filter eventHandler={this.handleFilteredItems} options={this.state.filter}/>
        <ContactList>
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        </ContactList>
      </div>
    )
   };
};

export default App;
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
