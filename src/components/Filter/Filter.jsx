import PropTypes from "prop-types";
import { NotificationMessage } from "../NotificationMessage/NotificationMessage";

export const Filter = ({ filter, contacts, filterContact }) => {
    console.log(filter);
    console.log(contacts);
    return contacts.length !== 0 ?
        (
            <label style={{ marginLeft: '30px' }}>
                Find contacts by name
                <input
                    type="text"
                    // value={filter}
                    onChange={filterContact} />
            </label>
        ) :
        (
            <NotificationMessage />
        )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    contacts: PropTypes.array.isRequired,
    filterContact: PropTypes.func.isRequired,
};