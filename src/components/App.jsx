import { Container } from './App.styled';
import { Title } from './Title';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
export const App = () => {
  return (
    <Container>
      <Title text="Phonebook" />
      <ContactForm />
      <Title text="Contacts" />
      <Filter />
      <ContactList />
    </Container>
  );
};
