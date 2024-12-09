import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from '../../redux/AppRedux/selectors';
import {
  selectContactsFilter,
  selectFilterUp,
  selectFilterDown,
} from '../../redux/AppRedux/selectors';
import {
  deleteContact,
  openModal,
  fetchContactById,
  handleFilterFowardUp,
  handleFilterFowardDown,
  handleFilterBackwardUp,
  handleFilterBackwardDown,
} from '../../redux/AppRedux/operations';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

export const ContactList = ({ children }) => {
  const contacts = useSelector(selectContacts);
  const filterUp = useSelector(selectFilterUp);
  const filterDown = useSelector(selectFilterDown);
  //let myContacts  
  const dispatch = useDispatch();
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
  const filterValue = useSelector(selectContactsFilter);

  const handleModalOpen = (evt) => {
    if (evt.target.getAttribute('data-id')) {
      //console.log('Modal opened!');

      const id = evt.currentTarget.getAttribute('data-id');
      //console.log(id);
      dispatch(fetchContactById(id));
      dispatch(openModal());
    }
  };
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(4);

  const handleFilterFoward = () => {
    
  }

  const handleForward = (evt) => {
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow = 'none';
    }, 500);
    //let fwdWar = lowerLimit + 4;
    if (filterValue === "") {
      setLowerLimit(lowerLimit + 4);
      setUpperLimit(upperLimit + 4);
    }
    if (filterValue !== "") {
      console.log("OK")
      const str = filterUp;
      const sto = filterDown
      dispatch(handleFilterFowardUp(str));
      dispatch(handleFilterFowardDown(sto));
    }
  }

  const handleBackward = (evt) => {
     evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
     setTimeout(() => {
       evt.target.style.boxShadow = 'none';
     }, 500);
    //let fwdWar = lowerLimit + 4;
    if (filterValue === "") {
      setLowerLimit(lowerLimit - 4);
      setUpperLimit(upperLimit - 4);
    }
    if (filterValue !== '') {
      const str1 = filterUp;
      const sto1 = filterDown;
       dispatch(handleFilterBackwardUp(str1));
       dispatch(handleFilterBackwardDown(sto1));
     }
   };
  
   const bestMatches = contacts.filter(
     contact =>
       contact.name.toLowerCase().includes(filterValue.trim().toLowerCase()) &&
       filterValue.trim() !== ''
   );

  return (
    <div className={css.contactsSection}>
      <h3 className={css.contactsTitle}>Contacts</h3>
      {children}
      {filterValue === '' && contacts.length !== 0 && (
        <ul className={css.contactsList}>
          {contacts.map(contact => {
            const myindex = contacts.indexOf(contact);
            if (myindex >= lowerLimit && myindex < upperLimit) {
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
                      onClick={(evt) => {
                        navigator.clipboard.writeText(contact.phone);
                        Notiflix.Notify.success(
                          "Copied"
                        );
                        evt.target.style.boxShadow =
                          'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
                        setTimeout(() => {
                          evt.target.style.boxShadow = 'none';
                        }, 1000);
                      }
                      }
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
              );
            }
          })}
        </ul>
      )}
      {filterValue === '' && (
        <div className={css.navigationArea}>
          {lowerLimit !== 0 && (
            <button className={css.navigationButton} onClick={handleBackward}>
              Prev
            </button>
          )}
          {!(upperLimit > contacts.length) &&
            upperLimit !== contacts.length && (
              <button className={css.navigationButton} onClick={handleForward}>
                Forward
              </button>
            )}
        </div>
      )}
      {filterValue !== '' && (
        <div className={css.navigationArea}>
          {filterDown !== 0 && (
            <button className={css.navigationButton} onClick={handleBackward}>
              Prev
            </button>
          )}
          {!(filterUp > bestMatches.length) &&
            filterUp !== bestMatches.length && (
              <button className={css.navigationButton} onClick={handleForward}>
                Forward
              </button>
            )}
        </div>
      )}
    </div>
  );
};

ContactList.propTypes = {
  children: PropTypes.node,
};
