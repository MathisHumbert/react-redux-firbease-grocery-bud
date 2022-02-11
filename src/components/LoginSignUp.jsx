import { useSelector, useDispatch } from 'react-redux';
import { toggleLogin } from '../features/userSlice';

const LoginSignUp = () => {
  const dispatch = useDispatch();
  const { userLoggedIn, login } = useSelector((state) => state.user);

  return (
    <aside className={userLoggedIn ? '' : 'open'}>
      <form className='section-center aside-container'>
        <h3>{login ? 'login' : 'sign up'}</h3>

        {!login && (
          <div className='form-control'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              className='grocery'
              id='name'
              placeholder='Name'
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
          />
        </div>

        <div className='form-control'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            className='grocery'
            id='password'
            placeholder='Password'
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
