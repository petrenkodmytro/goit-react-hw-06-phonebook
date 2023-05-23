import React from 'react';
import PropTypes from 'prop-types';
import { MdPersonSearch } from 'react-icons/md';
import { Input, SearchField } from './Filter.styled';

export const Filter = ({ value, onSearch }) => {
  return (
    <SearchField>
      <MdPersonSearch size="22" />
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onSearch}
        placeholder="Find contacts by name"
      />
    </SearchField>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
