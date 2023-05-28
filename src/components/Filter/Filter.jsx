import { MdPersonSearch } from 'react-icons/md';
import { Input, SearchField } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  // Отримуємо необхідну частину стану зі стору
  const filterValue = useSelector(getFilter);
  // Для того щоб сповістити сторінку про те, що в інтерфейсі відбулася якась подія, необхідно відправити екшен.
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <SearchField>
      <MdPersonSearch size="22" />
      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={changeFilter}
        placeholder="Find contacts by name"
      />
    </SearchField>
  );
};
