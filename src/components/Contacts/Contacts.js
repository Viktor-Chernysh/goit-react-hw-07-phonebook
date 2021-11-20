// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactItem from './contactItem';
import s from './Contacts.module.css';
import { deleteContact } from '../../redux/contacts/contact-actions';
import { useFetchContactsQuery } from '../../redux/contacts/contactsSlice';

function Contacts() {
  const { data, isFetching } = useFetchContactsQuery();

  return (
    <ol className={s.contact_list}>
      {data?.map(contact => (
        <ContactItem key={contact.id} {...contact} />
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
