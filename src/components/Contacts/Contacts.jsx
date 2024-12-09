import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useEffect } from 'react';
import {
  fetchContacts,
  closeModal,
  updateContactAvatar,
  updateContactName,
  updateContactEmail,
  updateContactPhone,
} from '../../redux/AppRedux/operations';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import {
  selectError,
  selectIsLoading,
  selectOpenModal,
  selectedContact,
  selectedIsSlideLoading,
  selectContacts,
} from '../../redux/AppRedux/selectors';
import css from './Contacts.module.css';
import svg from './icons.svg';
import { ThreeCircles } from 'react-loader-spinner';
import { useState } from 'react';
import Notiflix from 'notiflix';

export const Contacts = () => {
  const [isNameEditing, setNameEdit] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [isEmailEditing, setEmailEdit] = useState(false);
  const [emailValue, setEmailValue] = useState('');
   const [isPhoneEditing, setPhoneEdit] = useState(false);
   const [phoneValue, setPhoneValue] = useState('');
  //const [idValue, setIdValue] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const isSlideLoading = useSelector(selectedIsSlideLoading);
  const myContact = useSelector(selectedContact);
  const error = useSelector(selectError);
   const isOpenModal = useSelector(selectOpenModal);
 const handleModalClose = () => {
   dispatch(closeModal());
   setNameEdit(false);
   setEmailEdit(false);
  };

  const handleNameChange = evt => { 
    setNameValue(evt.target.value);
      const wrd = evt.target.value;
      let hasExceeded = false;
      let nameRay;
      if (wrd.length > 15) {
        nameRay = [...wrd];
        nameRay.pop();
        evt.target.value = nameRay.join('');
        hasExceeded = true;
      }
      if (hasExceeded === true) {
        Notiflix.Notify.warning('Maximum Charater limit is 15');
      }
    /*const id = evt.currentTarget.getAttribute('data-id');
    setIdValue(id);*/
  }

  const handleNameEdit = evt => { 
    setNameEdit(true);
    setNameValue("");
    //const input = document.getElementById('nameInput');
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow = 'none';
      const input = document.querySelector('[name="username"]');
      input.focus();
    }, 100);
  }

  const handleNameSave = evt => {
     const isNameDuplicate = contacts.some(
       contact =>
         contact.name.trim().toLowerCase() === nameValue.trim().toLowerCase()
     );
     if (isNameDuplicate) {
       Notiflix.Notify.warning('This name already exists');
       return;
     }
     if (nameValue.trim() !== '') {
       const idValue = evt.target.name;
       dispatch(updateContactName({ name: nameValue, myUpdateId: idValue }));
       setNameEdit(false);
     } else if (nameValue.trim() === '') {
       Notiflix.Notify.warning('Input is required');
     }
     evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
     setTimeout(() => {
       evt.target.style.boxShadow = 'none';
     }, 500);
  };
  
   const handleNameEditClose = () => {
     setNameEdit(false);
   };

    const handleEmailChange = evt => {
      setEmailValue(evt.target.value);
      /*const id = evt.currentTarget.getAttribute('data-id');
    setIdValue(id);*/
    };

    const handleEmailEdit = evt => {
      setEmailEdit(true);
       setEmailValue("");
      evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
      setTimeout(() => {
        evt.target.style.boxShadow = 'none';
        const input = document.querySelector('[name="email"]');
        input.focus();
      }, 100);
  };

   const handleEmailSave = evt => {
     if (emailValue.trim() !== '') {
       const idValue = evt.target.name;
       dispatch(updateContactEmail({ email: emailValue, myUpdateId: idValue }));
       setEmailEdit(false);
     } else if (emailValue.trim() === '') {
       Notiflix.Notify.warning('Input is required');
     }
     evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
     setTimeout(() => {
       evt.target.style.boxShadow = 'none';
     }, 500);
   };

  const handleEmailEditClose = () => {
    setEmailEdit(false);
  }

  const handlePhoneChange = evt => {
    setPhoneValue(evt.target.value);
    /*const id = evt.currentTarget.getAttribute('data-id');
    setIdValue(id);*/
  };
 
   const handlePhoneEdit = evt => {
     setPhoneEdit(true);
     setPhoneValue('');
     evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
     setTimeout(() => {
       evt.target.style.boxShadow = 'none';
       const input = document.querySelector('[name="phone"]');
       input.focus();
     }, 100);
   };
  
  const handlePhoneSave = evt => {
    if (phoneValue.trim() !== '') {
      const idValue = evt.target.name;
      dispatch(updateContactPhone({ phone: phoneValue, myUpdateId: idValue }));
      setPhoneEdit(false);
    } else if (phoneValue.trim() === '') {
      Notiflix.Notify.warning('Input is Empty or Incorrect');
    }
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow = 'none';
    }, 500);
  };
 
  const handlePhoneEditClose = () => {
    setPhoneEdit(false);
  };
  
   const handleImageChange = e => {
     const file = e.target.files[0];
     const id = e.currentTarget.getAttribute('data-id');
     //dispatch(updateAvatar({ avatar: file }));
     //console.log({ avatar: file });
     if (file) {
       dispatch(updateContactAvatar({ myFile: file, myId: id })); // Store the file under the key "avatar"
     }
   };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //console.log(myVal);

  return (
    <div
      className={clsx(css.coverWrapper, {
        [css.selected]: isOpenModal,
        'is-elevated': false,
      })}
    >
      <ContactForm>
        {isLoading && !error && <b>Please wait...</b>}
        {error && <b>There was an error</b>}
        <div
          className={clsx(css.contactsDetailsHide, {
            [css.contactsDetailsShow]: isOpenModal,
            'is-elevated': false,
          })}
        >
          {isSlideLoading && (
            <div className={css.backDrop}>
              <ThreeCircles
                visible={true}
                height="80"
                width="80"
                color="rgb(235, 144, 25)"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass={css.loader}
              />
            </div>
          )}
          <button className={css.closeModal} onClick={handleModalClose}>
            <svg width="10px" height="10px" className={css.modalIcon}>
              <use href={`${svg}#icon-cross`}></use>
            </svg>
          </button>
          <div className={css.detailsImageWrapper}>
            <img
              className={css.detailsImage}
              src={`https://yello-backend-s03r.onrender.com${myContact.avatarURL}`}
              alt="Contact"
            />
          </div>
          <input
            className={css.detailsImageButton}
            type="file"
            accept="image/*"
            name="avatar"
            onChange={handleImageChange}
            id="2"
            data-id={myContact._id}
          />
          <label className={css.detailsImageInput} htmlFor="2">
            Update Picture +
          </label>
          <ul className={css.detailsWrapper}>
            <li className={css.detailsItem}>
              <span className={css.detailsCover}>
                <span className={css.detailsInfo}>
                  <span className={css.details}>Name:-</span>{' '}
                  {isNameEditing === false ? (
                    <span className={css.detailsVal}>
                      <i className={css.detail}>{myContact.name}</i>
                    </span>
                  ) : (
                    <input
                      type="text"
                      className={css.detailsValInput}
                      required
                      onChange={handleNameChange}
                      data-id={myContact._id}
                      name="username"
                    />
                  )}
                </span>
                <span className={css.buttonWrapper}>
                  {isNameEditing === true && (
                    <button
                      className={css.detailsEditClose}
                      onClick={handleNameEditClose}
                    >
                      <svg width="5px" height="5px" className={css.modalIcon}>
                        <use href={`${svg}#icon-cross`}></use>
                      </svg>
                    </button>
                  )}
                  {isNameEditing === false ? (
                    <button
                      className={css.detailButton}
                      onClick={handleNameEdit}
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      name={myContact._id}
                      className={css.detailButton}
                      onClick={handleNameSave}
                    >
                      Save
                    </button>
                  )}
                </span>
              </span>
            </li>
            <li className={css.detailsItem}>
              <span className={css.detailsCover}>
                <span className={css.detailsInfo}>
                  <span className={css.details}>Email:-</span>{' '}
                  {isEmailEditing === false ? (
                    <span className={css.detailsVal}>
                      <i className={css.detail}>{myContact.email}</i>
                    </span>
                  ) : (
                    <input
                      type="text"
                      className={css.detailsValInput}
                      required
                      onChange={handleEmailChange}
                      data-id={myContact._id}
                      name="email"
                    />
                  )}
                </span>
                <span className={css.buttonWrapper}>
                  {isEmailEditing === true && (
                    <button
                      className={css.detailsEditClose}
                      onClick={handleEmailEditClose}
                    >
                      <svg width="5px" height="5px" className={css.modalIcon}>
                        <use href={`${svg}#icon-cross`}></use>
                      </svg>
                    </button>
                  )}
                  {isEmailEditing === false ? (
                    <button
                      className={css.detailButton}
                      onClick={handleEmailEdit}
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      name={myContact._id}
                      className={css.detailButton}
                      onClick={handleEmailSave}
                    >
                      Save
                    </button>
                  )}
                </span>
              </span>
            </li>
            <li className={css.detailsItem}>
              <span className={css.detailsCover}>
                <span className={css.detailsInfo}>
                  <span className={css.details}>Phone Number:-</span>{' '}
                  {isPhoneEditing === false ? (
                    <span className={css.detailsValPhone}>
                      <i className={css.detail}>{myContact.phone}</i>
                    </span>
                  ) : (
                    <input
                      type="number"
                      className={css.detailsValInputPhone}
                      required
                      onChange={handlePhoneChange}
                      data-id={myContact._id}
                      name="phone"
                    />
                  )}
                </span>
                <span className={css.buttonWrapper}>
                  {isPhoneEditing === true && (
                    <button
                      className={css.detailsEditClose}
                      onClick={handlePhoneEditClose}
                    >
                      <svg width="5px" height="5px" className={css.modalIcon}>
                        <use href={`${svg}#icon-cross`}></use>
                      </svg>
                    </button>
                  )}
                  {isPhoneEditing === false ? (
                    <button
                      className={css.detailButton}
                      onClick={handlePhoneEdit}
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      name={myContact._id}
                      className={css.detailButton}
                      onClick={handlePhoneSave}
                    >
                      Save
                    </button>
                  )}
                </span>
              </span>
            </li>
          </ul>
        </div>
        <ContactList>
          <Filter />
        </ContactList>
      </ContactForm>
    </div>
  );
};

export default Contacts;
