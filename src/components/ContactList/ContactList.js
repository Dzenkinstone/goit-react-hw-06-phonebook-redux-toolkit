import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilterValue } from 'redux/selectors';
import { List, Text, Button, Item } from './ContactList.styled';
export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  console.log(contacts);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalazedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {console.log(contacts)}
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
          </Item>
        );
      })}
    </List>
  );
};
