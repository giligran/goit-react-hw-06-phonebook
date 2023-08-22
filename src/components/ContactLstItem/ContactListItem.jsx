import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/action';
import { Button } from './ContactListItem.styled';

function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li>
      {`${name}: ${number}`}
      <Button onClick={handleDelete}>Delete contact</Button>
    </li>
  );
}

export default ContactListItem;
