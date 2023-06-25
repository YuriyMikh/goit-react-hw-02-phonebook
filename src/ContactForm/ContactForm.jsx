import PropTypes from 'prop-types';
import { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form
        style={{ border: '1px solid black', margin: 10 }}
        onSubmit={this.handleSubmit}
      >
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <h3>Number</h3>
        <input
          style={{ display: 'block' }}
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button style={{ margin: 10 }} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
