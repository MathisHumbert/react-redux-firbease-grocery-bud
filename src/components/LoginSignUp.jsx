import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { startAlert } from '../features/alertSlice';
import { toggleLogin } from '../features/userSlice';
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

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      (login && (!email || !password)) ||
      (!login && (!email || !password || !name))
    ) {
      // ALERT
      dispatch(startAlert({ type: 'danger', msg: 'All fields are required' }));
    }

    // LOGIN
    if (login) {
      console.log(email, password);
    }
    // SIGN UP
    else {
      console.log(name, email, password);
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
