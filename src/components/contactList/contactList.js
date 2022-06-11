import s from "./contactList.module.css";
import propTypes from "prop-types";

export default function ContactList({ children }) {
    const list = <ul className={s.list_block}>{children} </ul>
    return list
}

ContactList.propTypes = {
    children: propTypes.node,
};