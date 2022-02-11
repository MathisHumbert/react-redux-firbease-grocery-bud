import { useState, useEffect } from 'react';
import Form from './components/Form';
import Grocery from './components/Grocery';
import Header from './components/Header';

function App() {
  return (
    <section className='section-center'>
      <Header />
      <Form />
      <Grocery />
    </section>
  );
}

export default App;
