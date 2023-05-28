import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SectionTitle } from './Title/Title';

export const App = () => {
  return (
    <Layout>
      <SectionTitle title="Phonebook" />
      <ContactForm />

      <SectionTitle title="Contacts" />
      <Filter />

      <ContactList />

      <ToastContainer />
      <GlobalStyle />
    </Layout>
  );
};
