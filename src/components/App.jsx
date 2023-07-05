import { Component } from "react";
import { ContactForm } from "./Phonebook/ContactForm";
import { ContactList } from "./Contacts/ContactList";
import { Filter } from "./Filter/Filter";
import { NotificationMessage } from "./NotificationMessage/NotificationMessage";


export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }

  submitForm = newContact => {
    const { contacts } = this.state;
    this.setState({
      contacts: [...contacts, newContact],
    });
  };

  filterContact = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  delContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>

        <h1>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          onCreateContact={this.submitForm}
        />


        <h2>Contacts</h2>
        {this.state.contacts.length !== 0 ? (
          <>
            <Filter contacts={this.state} onChangeFilter={this.filterContact} />
            <ContactList
              filteredContacts={filteredContacts}
              delContact={this.delContact}
            />
          </>
        ) : (
          <NotificationMessage />
        )}

      </div >
    );
  };
}