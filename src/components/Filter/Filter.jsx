import PropTypes from "prop-types";
import { NotificationMessage } from "../NotificationMessage/NotificationMessage";

export const Filter = ({ contacts: { filter, contacts }, onChangeFilter }) => {
    console.log(filter);
    console.log(contacts);
    return contacts.length !== 0 ?
        (
            <label style={{ marginLeft: '30px' }}>
                Find contacts by name
                <input
                    type="text"
                    value={filter}
                    onChange={onChangeFilter} />
            </label>
        ) :
        (
            <NotificationMessage />
        )
}

Filter.propTypes = {
    contacts: PropTypes.shape({
        filter: PropTypes.string.isRequired,
        contacts: PropTypes.array.isRequired,
    }).isRequired,
    onChangeFilter: PropTypes.func.isRequired,
};