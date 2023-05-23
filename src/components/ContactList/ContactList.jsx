import React from 'react';
import PropTypes from 'prop-types';
import{FaUserMinus} from 'react-icons/fa'
import { Item, List, ListBtnDel } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <span>{item.name}</span>
          <span>{item.number}</span>
          <ListBtnDel onClick={()=>onDelete(item.id)}><FaUserMinus size="16"/></ListBtnDel>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
