import PropTypes from "prop-types";
import css from "./contacts.module.css";
import { NotificationMessage } from "../NotificationMessage/NotificationMessage";


export const ContactList = ({ filteredContacts, delContact }) => {
    return (
        <>
            {filteredContacts.length !== 0 ? (
                <ul>
                    {filteredContacts.map(({ id, name, number }) => {
                        return (
                            <li key={id}>
                                <p className={css.name}>{name}:</p>
                                <p className={css.number}>{number}</p>
                                <button type="button" className={css.del} onClick={() => { delContact(id) }}>Delete</button>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <NotificationMessage />
            )}
        </>
    );
};

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    delContact: PropTypes.func.isRequired,
};