import PropTypes from "prop-types";
import css from "./phonebook.module.css"
import { Component } from "react";
import { nanoid } from 'nanoid';


class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    submitForm = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        let contactExists = false;

        this.props.contacts.forEach(contact => {
            if (contact.name === name) {
                contactExists = true;
                return;
            }
        });

        if (contactExists) {
            alert(`${name} is already in contacts`);
            return;
        }

        const newContact = {
            id: nanoid(),
            name,
            number,
        };
        this.props.createContact(newContact);
        this.setState({
            name: '',
            number: ''
        })
    }


    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div>
                <form className={css.form} onSubmit={this.submitForm}>
                    <label> Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </label>
                    <label> Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            onChange={this.handleChange}
                            value={this.state.number}
                        />
                    </label>
                    <button type="submit" className={css.button}>Add contact</button>
                </form>
            </div>
        )
    }

}
export default ContactForm;

ContactForm.propTypes = {
    contacts: PropTypes.array.isRequired,
    createContact: PropTypes.func.isRequired,
};