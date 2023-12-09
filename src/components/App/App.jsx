import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from '../../Redux/Reducers/contactSlice';
import { setFilter } from '../../Redux/Reducers/filterSlice';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'filter') {
      dispatch(setFilter(value));
    } else {
      // Handle input change for name and number if needed
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and number.');
      return;
    }

    const newContact = {
      name: name.trim(),
      number: number.trim(),
    };

    dispatch(createContact(newContact));
    setName('');
    setNumber('');
  };

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
          onChange={e => handleInputChange(e)}
        />
      </label>
      <ContactList />
    </div>
  );
};

export default App;
