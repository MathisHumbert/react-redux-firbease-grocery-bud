import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { startAlert } from '../features/alertSlice';
import { setUser, toggleLogin } from '../features/userSlice';
import { auth } from '../firebase.config';
import Alert from './Alert';

const LoginSignUp = () => {
  const dispatch = useDispatch();
  const { userLoggedIn, login } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (!login && !name)) {
      dispatch(startAlert({ type: 'danger', msg: 'All fields are required' }));
      return;
    }

    // LOGIN
    if (login) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        dispatch(setUser({ name: user.displayName, id: user.uid }));
        dispatch(startAlert({ type: 'success', msg: 'User sign up' }));
      } catch (error) {
        dispatch(startAlert({ type: 'danger', msg: 'Invalid Credentials' }));
      }
    }

    // SIGN UP
    else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        updateProfile(auth.currentUser, { displayName: name });
        const user = userCredential.user;
        dispatch(setUser({ name: user.displayName, id: user.uid }));
        dispatch(startAlert({ type: 'success', msg: 'User sign up' }));
      } catch (error) {
        dispatch(
          startAlert({ type: 'danger', msg: 'User did not sign up! Try later' })
        );
      }
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <aside className={userLoggedIn ? '' : 'open'}>
      <form className='section-center aside-container' onSubmit={onSubmit}>
        <h3>{login ? 'login' : 'sign up'}</h3>
        <Alert />

        {!login && (
          <div className='form-control'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              className='grocery'
              id='name'
              placeholder='Name'
              value={name}
              onChange={onChange}
            />
          </div>
        )}

        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            className='grocery'
            id='email'
            placeholder='Email'
            value={email}
            onChange={onChange}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            className='grocery'
            id='password'
            placeholder='Password'
            value={password}
            onChange={onChange}
          />
        </div>

        <button type='submit' className='login-btn'>
          {login ? 'login' : 'sign up'}
        </button>

        <p>
          {login ? 'Not Registered ? ' : 'Already Registered ? '}
          <span onClick={() => dispatch(toggleLogin())}>
            {login ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </form>
    </aside>
  );
};

export default LoginSignUp;
