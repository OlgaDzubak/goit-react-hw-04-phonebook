import { useState, useEffect } from 'react';
import {ContactForm} from './ContactForm/contact_form';
import {ContactList} from './ContactList/contact_list';
import {Filter} from './Filter/filter';
import { Notify } from 'notiflix';
import './App.css';

export const App = () => {
   
  const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(()=>{localStorage.setItem('contacts',JSON.stringify(contacts))},[contacts]);
  
  const onFilterInputChange = (evt) => setFilter(evt.target.value);

  const onClickToAddBtn = (addedName, addedNumber) => {

    const addedId = "id-" + (contacts.length+1).toString();

    if (contacts.some(contact => contact.name === addedName)) {
      Notify.failure(`${addedName} is already in contacts.`);
    }else { 
      setContacts(contacts => [...contacts, {id:addedId, name:addedName, number:addedNumber}]);
      Notify.success(`${addedName} was added to the contact list.`);
    }
  };

  const onClickDelBtn = (evt) => setContacts(contacts => contacts.filter(contact => contact.id !== evt.target.name));
  
  const filterContacts = () => contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase().trim()));

  return (
  <section className='section'>
    <div className='app_div'>

      <h1>Phonebook</h1>
      <ContactForm onClickToAddBtn={onClickToAddBtn} />

      <h2>Contacts</h2>
      <Filter onInputChange={onFilterInputChange} />
      <ContactList contacts={filterContacts()} onClickDelBtn={onClickDelBtn} />

    </div>
  </section>
  )
};
