import React, { Component } from "react";
import {isEqual} from "lodash";
import ContactForm from "./contactForm";
import Filter from "./filter";
import ContactList from "./contactList";
import ContactItem from "./contactItem";
import s from "./contactForm/contactForm.module.css";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
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
