import { addContact } from '../../redux/AppRedux/operations';
import { selectContacts} from '../../redux/AppRedux/selectors';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';

export const ContactForm = ({ children }) => {
  const contactNameId = nanoid();
  const contactNumberId = nanoid();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());

  const handleButtonPress = evt => {
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow = 'none';
    }, 1000);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const currentName = event.target[0].value;

    /*const isNameDuplicate = contacts.some(
      contact =>
        contact.name.trim().toLowerCase() === currentName.trim().toLowerCase()
    );
    if (isNameDuplicate) {
      Notiflix.Notify.warning('This name already exists');
      return;
    }*/

    if (currentName.trim() === "") {
 Notiflix.Notify.warning('Empty spaces are not allowed');
      return;
    }

    const exactDate = new Date();
    if (date <= exactDate) {
      Notiflix.Notify.failure('Invalid date, choose a date in the future');
    }

    else {
      dispatch(addContact({ name: event.target[0].value, phone: date }));
    }
    //console.log({ name: event.target[0].value, phone: event.target[1].value });
     //event.target.reset();
  };

  const handleChange = (evt) => {
    const wrd = evt.target.value
    let hasExceeded = false;
    let nameRay;
    if (wrd.length > 30) {
      nameRay = [...wrd];
      nameRay.pop()
      evt.target.value = nameRay.join("");
      hasExceeded = true;
    }
    if ((hasExceeded === true)) {
      Notiflix.Notify.warning('Maximum Charater limit is 30');
    }
  }

  return (
    <div className={css.taskBook}>
      <h2 className={css.formTitle}>Taskbook</h2>
      <form onSubmit={handleSubmit} className={css.formSection}>
        <label className={css.loginLabel}>
          <span className={css.formLabel}>Task title:</span>
          <input
            type="text"
            placeholder="Enter Task Title"
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
          <span className={css.formLabel}>Due date:</span>

          <Flatpickr
            data-enable-time
            value={date}
            onChange={(selectedDates) => {
            const nowDate = new Date();
            if (selectedDates[0] <= nowDate) {
            Notiflix.Notify.warning(
            'Choose a date in the future'
              )
            }
          
            else {
            Notiflix.Notify.success(
            'Due Date Selected'
            )
                                      
            }
            setDate(selectedDates[0]);
                                   
            }}            
            options={{
              minuteIncrement: 1, // Set minute increments to 1
            }}
            render={({ defaultValue, ...props }, ref) => (
              <input
                {...props}
                ref={ref}
                className={css.formInput}
                required
                id={contactNumberId}
                name="date"
              />
            )}
          />
        </label>
        <div className={css.buttonArea}>
          <button
            type="submit"
            name="button"
            className={css.button}
            onClick={handleButtonPress}
          >
            Add Task
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
