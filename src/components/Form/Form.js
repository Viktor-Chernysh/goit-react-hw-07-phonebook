import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ClockLoader from 'react-spinners/ClockLoader';
import { css } from '@emotion/react';

import s from './Form.module.css';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from '../../redux/contacts/contactsSlice';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

const nameInputId = uuidv4();
const numberInputId = uuidv4();

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data } = useFetchContactsQuery();

  const handleSubmit = e => {
    e.preventDefault();
    const contactObject = {
      name,
      number,
    };
    const addedName = data
      .map(el => el.name.toLowerCase())
      .includes(contactObject.name.toLowerCase());
    const addedNumber = data
      .map(el => el.number)
      .includes(contactObject.number);
    if (addedName && addedNumber) {
      alert(`${contactObject.name} is already in contacts!`);
      return;
    }

    try {
      createContact(contactObject);
    } catch (error) {
      console.log(error.massage);
    }

    resetForm();
  };

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value.trim());
        break;
      case 'number':
        setNumber(value.trim());
        break;
      default:
        return;
    }
  }

  function resetForm() {
    setName('');
    setNumber('');
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={nameInputId}>
        Name
        <input
          className={s.input}
          id={nameInputId}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={handleChange}
          required
        />
      </label>
      <label className={s.label} htmlFor={numberInputId}>
        Number
        <input
          className={s.input}
          id={numberInputId}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={handleChange}
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact{' '}
        <ClockLoader
          color="#ffffff"
          loading={isLoading}
          size={25}
          css={override}
        />
      </button>
    </form>
  );
}

export default Form;
