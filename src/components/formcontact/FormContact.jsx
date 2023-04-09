import {  useState } from 'react';
import { FormStyled } from './Form.styled';
import propTypes from 'prop-types';

export const FormContact =({addNamesContact})=> {
const [name, newName] = useState('')
const [number, newNumber] = useState('')

 const hundelChange = e => {
    const { name, value } = e.target;
      // if (name === "name") {
      //   newName(value);
      // } else if (name === "number"){
      //   newNumber(value);
      // }

      switch (name) {
      case "name":
        newName(value);
        break;
        case "number":
          newNumber(value);
        break;
      default:
        break;
    }
  };

 const hundSubmit = e => {
    e.preventDefault();
    addNamesContact(name, number);
    newNumber('');
    newName('');
  };

    return (
      <FormStyled onSubmit={hundSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={hundelChange}
            value={name}
            required
            id="nameInputId"
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={hundelChange}
            value={number}
            required
          />
        </label>
        <button type="submit">add new contact</button>
      </FormStyled>
    );
  }


FormContact.propTypes = {
  addNamesContact: propTypes.func.isRequired,
};