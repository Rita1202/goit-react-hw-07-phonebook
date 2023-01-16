import { ContactForm } from './ContactForm/ContactForm';
import { useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import '../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { selectIsLoading, selectError } from 'redux/contacts/contacts-selector';
import ClipLoader from 'react-spinners/ClipLoader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="main-wrapper">
      <h1 className="phonebook">Phonebook</h1>
      <ContactForm />
      <h2 className="contacts">Contacts</h2>
      <Filter />
      {error && <p>{error.message}</p>}

      {isLoading ? (
        <ClipLoader
          cssOverride={{ display: 'block' }}
          color="#003d83"
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <ContactList />
      )}
    </div>
  );
};
