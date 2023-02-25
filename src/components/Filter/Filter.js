import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Input } from './Filter.styled';
import { Paragraph } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = event => {
    return dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <Paragraph>Find contacts by name</Paragraph>
      <Input type="text" onChange={changeFilter} required />
    </>
  );
};
