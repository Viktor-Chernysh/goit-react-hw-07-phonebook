// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoonLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';

import ContactItem from './contactItem';
import s from './Contacts.module.css';
import { useFetchContactsQuery } from '../../redux/contacts/contactsSlice';
import getFilter from '../../redux/contacts/contacts-selectors';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: rgb(187, 187, 187);
`;

function Contacts({ filter }) {
  const { data, isFetching } = useFetchContactsQuery();
  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    if (filter === '') {
      return data;
    }
    return data.filter(el => el.name.toLowerCase().includes(normalizeFilter));
  };
  return (
    <ul className={s.contact_list}>
      <MoonLoader loading={isFetching} size={60} css={override} />
      {filteredContacts()?.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    filter: getFilter(state),
  };
};

export default connect(mapStateToProps, null)(Contacts);
