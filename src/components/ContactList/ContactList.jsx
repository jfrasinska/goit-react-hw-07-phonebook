import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/Reducers/contactSlice';
import './ContactList.css';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li className="contact-list-item" key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Phone: {contact.number}</p>
          <button
            className="button-list"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
