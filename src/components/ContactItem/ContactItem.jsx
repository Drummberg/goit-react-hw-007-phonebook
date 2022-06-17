import React from 'react';
import PropTypes from 'prop-types';
import {useDeleteContactsMutation } from '../../Redux/contactsApi';
import { ItemLi, Button, Link } from './ContactItem.styled';

export const ContactItem = ({ id, name, number}) => {
  const [deleteContact] = useDeleteContactsMutation();


  const onDeleteContact = id => {
    deleteContact(id);
  }
  return (
    <ItemLi>
      <Link href="tel:{number}">
        {name}: {number}
      </Link>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ItemLi>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  };
