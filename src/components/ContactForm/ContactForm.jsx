import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { FormContact, Input, Button } from './ContacForm.styled';

export default function ContactForm() {
  const nameId = nanoid();
  const numberId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const { name, number } = event.currentTarget.elements;

    dispatch(addContact({ name: name.value, number: number.value }));
    form.reset();
  };

  return (
    <FormContact autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>
      <Input
        id={nameId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberId}>Number</label>
      <Input
        id={numberId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </FormContact>
  );
}
