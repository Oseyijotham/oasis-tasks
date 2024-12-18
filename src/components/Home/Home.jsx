import css from './Home.module.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectedContact,
} from '../../redux/AppRedux/selectors';
import { selectUser } from '../../redux/AuthRedux/selectors';
import { updateAvatar } from '../../redux/AuthRedux/operations';
import svg from '../SharedLayout/icons.svg';
import icon from './list2.svg';


export const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const myUser = useSelector(selectUser);
  const myContact = useSelector(selectedContact);
  const handleImageChange = e => {
    //console.log("gbyghnu")
    const file = e.target.files[0];
    //dispatch(updateAvatar({ avatar: file }));
    console.log({ avatar: file });
    if (file) {
      dispatch(updateAvatar({ avatar: file })); // Store the file under the key "avatar"
    }
  };

  useEffect(() => {
    //dispatch(getUser());
  }, [myContact, dispatch]);
  return (
    <div className={css.homeDisplay}>
      <div>
        <div className={css.homeDisplayIntro}>
          <div className={css.homeIconWrapper}>
            <img src={icon} alt="icon" className={css.homeIcon} />
          </div>
          <span>
            <span className={css.homeDisplayTitle}>
              Your Tasking{' '}
              <span className={css.homeDisplayTitlePart}>
                <i>Oasis</i>
              </span>
            </span>
            <span className={css.homeDisplaySlogan}>
              <i>
                Welcome to Oasis Tasks, a personal tool designed to help you
                plan and manage tasks effectively. Create, update, and track
                your tasks effortlessly, keeping your goals clear and your
                productivity on track.
              </i>
            </span>
          </span>
          <div className={css.homeIconWrapper}>
            <img src={icon} alt="icon" className={css.homeIcon} />
          </div>
        </div>
      </div>
      <Link to="/sharedLayout/tasks" className={css.homeLink}>
        Start Planning
      </Link>

      {isLoading && !error && <div>Please wait...</div>}
      {error && <div>There was an error</div>}

      <div className={css.detailsSection}>
        <h2 className={css.detailsSectionTitle}>YOUR DETAILS</h2>
        <div className={css.detailsImageWrapper}>
          <img
            className={css.detailsImage}
            src={`http://localhost:8000${myUser.avatarURL}`}
            alt="User"
          />
        </div>
        <input
          className={css.detailsImageButton}
          type="file"
          accept="image/*"
          name="avatar"
          onChange={handleImageChange}
          id="2"
        />
        <label className={css.detailsImageInput} htmlFor="2">
          Update Picture +
        </label>
        <ul className={css.detailsWrapper}>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>First Name:-</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.firstname}</i>
              </span>
            </span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>Last Name:-</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.lastname}</i>
              </span>
            </span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>Email:-</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.email}</i>
              </span>
            </span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>Phone Number:-</span>{' '}
              <span className={css.detailsValPhone}>
                <i className={css.detail}>{myUser.phone}</i>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;