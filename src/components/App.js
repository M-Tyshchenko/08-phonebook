import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, MainTitle, Title } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { AppBar } from './AppBar/AppBar';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/contacts" component={ContactsPage} />
      </Routes>
    </Container>
  );
};
