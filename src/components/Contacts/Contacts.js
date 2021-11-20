// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import s from './Contacts.module.css';
import { deleteContact } from '../../redux/contacts/contact-actions';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contacts/contactsSlice';

function Contacts({ contacts, onDelete }) {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ol className={s.contact_list}>
      {data?.map(({ id, name, number }) => (
        <li className={s.contact_item} key={id}>
          {name}:<span>{number}</span>{' '}
          <button type="button" onClick={() => deleteContact(id)}>
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </li>
      ))}
    </ol>
  );
}
// Contacts.propTypes = {
//   contacts: PropTypes.array,
//   deleteContact: PropTypes.func,
// };
const filteredContacts = (filter, allContacts) => {
  const normalizeFilter = filter.toLowerCase();
  if (filter === '') {
    return allContacts;
  }
  return allContacts.filter(el =>
    el.name.toLowerCase().includes(normalizeFilter),
  );
};
const mapStateToProps = state => {
  return {
    contacts: filteredContacts(state.contacts.filter, state.contacts.items),
    // filter: state.contacts.filter,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => dispatch(deleteContact(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
