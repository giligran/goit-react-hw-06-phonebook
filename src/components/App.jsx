import ContactForm from './ContactForm/ContactForm';
import styled from '@emotion/styled';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
const Container = styled.div`
  max-width: 1168px;
  padding: 32px 16px;
  margin: 0 auto;
`;

const ContactsContaier = styled.div`
  margin-top: 32px;
`;

export const App = () => {
  return (
    <Container>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsContaier>
        <ContactList />
      </ContactsContaier>
    </Container>
  );
};
