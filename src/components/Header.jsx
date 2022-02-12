import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../firebase.config';
import { signOut } from 'firebase/auth';
import { resetUser } from '../features/userSlice';
import { startAlert } from '../features/alertSlice';
import Alert from './Alert';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const logoutUser = () => {
    auth.signOut();
    dispatch(resetUser());
    dispatch(startAlert({ type: 'success', msg: 'User logged out' }));
  };

  return (
    <header>
      <h3>{user.name}'s grocery bud</h3>
      <Alert />
      <button className='login-btn' onClick={logoutUser}>
        logout
      </button>
    </header>
  );
};

export default Header;
