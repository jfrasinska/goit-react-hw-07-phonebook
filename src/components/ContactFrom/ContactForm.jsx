import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../Redux/Reducers/contactSlice';
import './ContactForm.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: `id-${Date.now()}`,
      name: e.target.name.value.trim(),
      number: e.target.number.value.trim(),
    };

    dispatch(addContact(newContact));

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label className="form-input">
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(['-][a-zA-Za-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </label>
      <label className="form-input">
        Phone number:
        <input
          type="tel"
          name="number"
          pattern="[+]?[0-9]{1,4}[-.\s]?[(]?[0-9]{1,3}[)]?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}"
          title="Phone number must be digits and can start with +"
          required
        />
      </label>
      <button type="submit" className="button-add">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
