import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { auth } from './firebase.config';
import Form from './components/Form';
import Grocery from './components/Grocery';
import Header from './components/Header';
import LoginSignUp from './components/LoginSignUp';

function App() {
  const { userLoggedIn } = useSelector((state) => state.user);
  const user = auth.currentUser;
  console.log(user);

  useEffect(() => {
    if (user) {
      console.log('user:', user);
    }
  }, [user]);

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
