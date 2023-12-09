import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../Redux/Reducers/contactSlice';
import './ContactList.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li className="contact-list-item" key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Phone: {contact.phone}</p>
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
