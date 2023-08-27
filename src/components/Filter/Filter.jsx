import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice.js';
import { Input } from './Filter.styled.js';

function Filter() {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = event => {
    const newValue = event.target.value;
    setFilterValue(newValue);
    dispatch(setFilter(newValue));
  };

  return (
    <label>
      Find contacts by name
      <Input name="filter" value={filterValue} onChange={handleFilterChange} />
    </label>
  );
}

export default Filter;
