import { nanoid } from 'nanoid';
import propTypes from "prop-types";
import s from "../contactList/contactList.module.css";

export default function ContactsItem({ erase, filtered }) {
  return filtered().map(elem => {
    return (
      <li key={nanoid()} className={s.contacts_item}>
        {elem.name}: {elem.number}
        <button type="button" onClick={() => erase(elem.name)}>
          Delete
        </button>
      </li>
    );
  });
}

ContactsItem.propTypes = {
  erase: propTypes.func,
  filtered: propTypes.func,
};