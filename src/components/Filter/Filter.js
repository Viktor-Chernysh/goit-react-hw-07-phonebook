import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import s from './Filter.module.css';
import { addFilter } from '../../redux/contacts/contact-actions';

function Filter({ onAddFilter }) {
  // const inputId = uuidv4();
  return (
    <label className={s.label}>
      <div>Find contact by name</div>
      <input
        className={s.input}
        type="text"
        id={uuidv4()}
        name="filter"
        onChange={onAddFilter}
      />
    </label>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAddFilter: e => dispatch(addFilter(e.target.value)),
  };
};
export default connect(null, mapDispatchToProps)(Filter);
