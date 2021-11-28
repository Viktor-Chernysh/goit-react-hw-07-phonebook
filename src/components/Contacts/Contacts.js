import { useSelector } from 'react-redux';
import ClockLoader from 'react-spinners/ClockLoader';
import { css } from '@emotion/react';

import ContactItem from './contactItem';
import s from './Contacts.module.css';
import { useGetContactsQuery } from '../../redux/contacts/contactsSlice';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: rgb(187, 187, 187);
`;

function Contacts() {
  const filter = useSelector(getFilter);
  const { data, isFetching } = useGetContactsQuery();
  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    if (filter === '') {
      return data;
    }
    return data.filter(el => el.name.toLowerCase().includes(normalizeFilter));
  };
  return (
    <ul className={s.contact_list}>
      {isFetching ? (
        <ClockLoader loading={isFetching} size={120} css={override} />
      ) : (
        filteredContacts()?.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))
      )}
    </ul>
  );
}

export default Contacts;
