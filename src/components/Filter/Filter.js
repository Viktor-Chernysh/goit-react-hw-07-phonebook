import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import s from './Filter.module.css';
import { addFilter } from '../../redux/contacts/contact-actions';

function Filter() {
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      <div>Find contact by name</div>
      <input
        className={s.input}
        type="text"
        id={uuidv4()}
        name="filter"
        onChange={e => dispatch(addFilter(e.target.value))}
      />
    </label>
  );
}

export default Filter;
