import ContactListItem from 'components/ContactLstItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
}

export default ContactList;
