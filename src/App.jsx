import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import Form from './components/Form';
import Grocery from './components/Grocery';
import Header from './components/Header';
import LoginSignUp from './components/LoginSignUp';
import { setUser } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const { userLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ name: user.displayName, id: user.uid }));
      }
    });
    return () => unsub();
  }, []);

  if (!userLoggedIn) {
    return <LoginSignUp />;
  }

  return (
    <section className='section-center'>
      <Header />
      <Form />
      <Grocery />
    </section>
  );
}

export default App;
