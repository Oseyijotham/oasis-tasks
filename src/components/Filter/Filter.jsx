import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/AppRedux/selectors';
import {
  selectContactsFilter,
  selectFilterUp,
  selectFilterDown
} from '../../redux/AppRedux/selectors';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';
import { setFilter } from '../../redux/AppRedux/filterSlice';
import {
  deleteContact,
  openModal,
  fetchContactById
} from '../../redux/AppRedux/operations';

export const Filter = () => {
  const searchTermId = nanoid();
  const contacts = useSelector(selectContacts);
  const filterUpper = useSelector(selectFilterUp);
  const filterLower = useSelector(selectFilterDown);
  const filterValue = useSelector(selectContactsFilter);
  const dispatch = useDispatch();
  const handleSearch = event => {
    dispatch(setFilter(event.target.value));
    console.log(event.target.value);
  };
  const bestMatches = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filterValue.trim().toLowerCase()) &&
      filterValue.trim() !== ''
  );

  const handleModalOpen = evt => {
    if (evt.target.getAttribute('data-id')) {
      //console.log('Modal opened!');

      const id = evt.currentTarget.getAttribute('data-id');
      //console.log(id);
      dispatch(fetchContactById(id));
      dispatch(openModal());
    }
  };

  const handleDelete = evt => {
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow = 'none';
    }, 1000);
    //console.log(evt.target.name);
    dispatch(deleteContact(evt.target.name));
    /*//dispatch(closeModal());
    const exist = contacts.find(contact => contact._id === evt.target.name);
    console.log(contacts);
    if (exist === undefined) {
      console.log('gvghi');
      dispatch(closeModal());
    }*/
  };

  return (
    <div className={css.contactList}>
      <label htmlFor={searchTermId}>
        <span className={css.formLabel}>Find Contacts By Name:</span>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          onChange={handleSearch}
          id={searchTermId}
          autoComplete="off"
          className={css.formInput}
        />
      </label>

      {filterValue !== '' && bestMatches.length !== 0 && (
        <ul className={css.contactsList}>
          {bestMatches.map(contact => {
             const myindex = bestMatches.indexOf(contact);
            if (myindex >= filterLower && myindex < filterUpper) {
              return (
                <li
                  key={contact._id}
                  data-id={contact._id}
                  className={css.contactsItem}
                  onClick={handleModalOpen}
                >
                  <span className={css.contactsData} data-id={contact._id}>
                    {contact.name}:{' '}
                    <span className={css.contactsPhone} data-id={contact._id}>
                      {contact.phone}
                    </span>
                  </span>
                  <span className={css.contactsButtonArea}>
                    <button
                      className={css.contactsButton}
                      name={contact._id}
                      onClick={() => navigator.clipboard.writeText(contact.phone)}
                    >
                      Copy
                    </button>
                    <button
                      type="submit"
                      className={css.contactsButton}
                      name={contact._id}
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </span>
                </li>
              )
            }
          })}
        </ul>
      )}
    </div>
  );
};
