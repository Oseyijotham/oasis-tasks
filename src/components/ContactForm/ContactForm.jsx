import { addContact } from '../../redux/AppRedux/operations';
import { selectContacts} from '../../redux/AppRedux/selectors';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

export const ContactForm = ({ children }) => {
  const contactNameId = nanoid();
  const contactNumberId = nanoid();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();


  const handleButtonPress = evt => {
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow = 'none';
    }, 1000);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const currentName = event.target[0].value;

    const isNameDuplicate = contacts.some(
      contact =>
        contact.name.trim().toLowerCase() === currentName.trim().toLowerCase()
    );
    if (isNameDuplicate) {
      Notiflix.Notify.warning('This name already exists');
      return;
    }

    if (currentName.trim() === "") {
 Notiflix.Notify.warning('Empty spaces are not allowed');
      return;
    }

    dispatch(
      addContact({ name: event.target[0].value, phone: event.target[1].value })
    );
   
    //console.log({ name: event.target[0].value, phone: event.target[1].value });
     event.target.reset();
  };

  const handleChange = (evt) => {
    const wrd = evt.target.value
    let hasExceeded = false;
    let nameRay;
    if (wrd.length > 15) {
      nameRay = [...wrd];
      nameRay.pop()
      evt.target.value = nameRay.join("");
      hasExceeded = true;
    }
    if ((hasExceeded === true)) {
      Notiflix.Notify.warning('Maximum Charater limit is 15');
    }
  }

  return (
    <div className={css.phoneBook}>
      <h2 className={css.formTitle}>Phonebook</h2>
      <form onSubmit={handleSubmit} className={css.formSection}>
        <label className={css.loginLabel}>
          <span className={css.formLabel}>Name:</span>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            autoComplete="off"
            id={contactNameId}
            className={css.formInput}
            onChange={handleChange}
          />
        </label>
        <label>
          <span className={css.formLabel}>Number:</span>
          <input
            type="number"
            placeholder="Enter Number"
            autoComplete="off"
            name="number"
            required
            id={contactNumberId}
            className={css.formInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        </label>
        <div className={css.buttonArea}>
          <button
            type="submit"
            name="button"
            className={css.button}
            onClick={handleButtonPress}
          >
            Add Contact
          </button>
        </div>
      </form>
      {children}
    </div>
  );
};

ContactForm.propTypes = {
  children: PropTypes.node,
};
