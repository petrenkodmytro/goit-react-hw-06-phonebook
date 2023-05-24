import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import initialContacts from './contacts.json';
import {
  notificationMassege,
  notificationOptions,
} from './Notification/Notification';
import { SectionTitle } from './Title/Title';
import { useDispatch, useSelector } from 'react-redux';

// фун-я инициализатор начального состояния contacts
const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  // Если сохранили в LS уже что-то, пишем ЭТО в state
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts; // результат работы фун-и
  } else {
    // Если в LS ничего еще нет, пишем в state initialRecipes
    return initialContacts; // результат работы фун-и
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  const state = useSelector(state => state);
  console.log('useSelector', state);

  const dispatch = useDispatch();
  console.log('dispatch', dispatch);

  useEffect(() => {
    // массив зависимости - это под капотом оператор if
    //if (this.state.contacts !== prevState.contacts)
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    // перевірка на існуюче ім'я контакту
    if (
      contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      // повідомлення
      toast.error(
        `${newContact.name} ${notificationMassege}`,
        notificationOptions
      );
      return;
    }
    // додавання нового контакту
    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizeFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts
    .filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    )
    .sort((firstName, secondName) =>
      firstName.name.localeCompare(secondName.name)
    );

  return (
    <Layout>
      <SectionTitle title="Phonebook" />
      <ContactForm onSave={addContact} />

      <SectionTitle title="Contacts" />
      <Filter value={filter} onSearch={changeFilter} />

      <ContactList items={visibleContacts} onDelete={deleteContact} />

      <ToastContainer />
      <GlobalStyle />
    </Layout>
  );
};
