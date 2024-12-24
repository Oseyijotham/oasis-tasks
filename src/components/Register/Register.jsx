import { useDispatch } from 'react-redux';
import { register } from '../../redux/AuthRedux/operations';
import css from './Register.module.css';
import { NavLink } from 'react-router-dom';
import Notiflix from 'notiflix';
import svg from '../SharedLayout/icons.svg';

export const Register = () => {
const dispatch = useDispatch();


  const handleChange = (evt) => {
   const wrd = evt.target.value;
   let hasExceeded = false;
   let nameRay;
   if (wrd.length > 16) {
     nameRay = [...wrd];
     nameRay.pop();
     evt.target.value = nameRay.join('');
     hasExceeded = true;
   }
   if (hasExceeded === true) {
     Notiflix.Notify.warning('Maximum Charater limit is 16');
   }
}

const handleSubmit = e => {
  e.preventDefault();
  e.target.elements.button.style.boxShadow =
    'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
  setTimeout(() => {
    e.target.elements.button.style.boxShadow = 'none';
  }, 1000);
  const form = e.currentTarget;
  if (form.elements.firstname.value.trim() === '') {
    Notiflix.Notify.warning('Empty spaces are NOT allowed');
    return;
  }
  if (form.elements.lastname.value.trim() === '') {
    Notiflix.Notify.warning('Empty spaces are NOT allowed');
    return;
  }
  if (form.elements.firstname.value.trim() === '') {
    Notiflix.Notify.warning('Empty spaces are NOT allowed');
    return;
  }
  if (form.elements.email.value.trim() === '') {
    Notiflix.Notify.warning('Empty spaces are NOT allowed');
    return;
  }
  if (form.elements.password.value.length < 6) {
    Notiflix.Notify.warning('Password Must be more than 6 characters');
    return;
  }
  
  dispatch(
    register({
      firstName: form.elements.firstname.value,
      lastName: form.elements.lastname.value,
      email: form.elements.email.value,
      phone: form.elements.phone.value,
      password: form.elements.password.value,
    })
  );
  //form.reset();
};

    return (
      <div className={css.login}>
        <NavLink
          to="/"
        >
          <div className={css.symbol}>
            <div className={css.logo}>
              <div role="img" aria-label="computer icon" className={css.frame}>
                <svg width="160px" height="47px">
                  <use href={`${svg}#icon-oasis-logo`}></use>
                </svg>
              </div>
              <div className={css.iconLabelWrapper}>
                <span className={css.iconLabel}>Oasis</span>
                <span className={css.iconLabel}>Tasks</span>
              </div>
            </div>
          </div>
        </NavLink>

        <div>
          <div className={css.formContainer}>
            <form
              className={css.form}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <label className={css.label}>
                First Name
                <input
                  type="text"
                  name="firstname"
                  className={css.input}
                  placeholder="Enter Your First Name"
                  title="Enter Your First Name"
                  autoComplete="off"
                  required
                />
              </label>
              <label className={css.label}>
                Last Name
                <input
                  type="text"
                  name="lastname"
                  className={css.input}
                  placeholder="Enter Your Last Name"
                  title="Enter Your Last Name"
                  autoComplete="off"
                  required
                />
              </label>
              <label className={css.label}>
                Email
                <input
                  type="email"
                  name="email"
                  className={css.input}
                  placeholder="Enter Email Address"
                  title="Enter Email Address"
                  autoComplete="off"
                  required
                />
              </label>
              <label className={css.label}>
                Phone Number
                <input
                  type="number"
                  name="phone"
                  className={css.input}
                  placeholder="Enter Phone Number"
                  title="Enter Phone Number"
                  autoComplete="off"
                  required
                />
              </label>
              <label className={css.label}>
                Password
                <input
                  type="password"
                  name="password"
                  className={css.input}
                  title="Minimum of Six Characters, Max 16"
                  placeholder="Minimum of Six Characters, Max 16"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                />
              </label>
              <button className={css.inputButton} name="button">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;
