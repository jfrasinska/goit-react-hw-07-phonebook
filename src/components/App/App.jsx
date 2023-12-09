import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
} from '../../Redux/Reducers/contactSlice.js';
import { setFilter } from '../../Redux/Reducers/filterSlice.js';
import ContactForm from '../ContactFrom/ContactForm.js';
import ContactList from '../ContactList/ContactList.js';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const handleInputChange = e => {
    const { name, value } = e.target;
    dispatch(addContact({ [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and number.');
      return;
    }

    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      alert(`Contact with the name "${name}" already exists.`);
      return;
    }

    const newContact = {
      id: `id-${contacts.length + 1}`,
      name: name.trim(),
      number: number.trim(),
    };

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="wrapper">
      <h1>Contact Book App</h1>
      <ContactForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <label className="filter">
        Filter by name:
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
