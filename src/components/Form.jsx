import { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <form className='grocery-form'>
      <div className='form-control'>
        <input
          type='text'
          className='grocery'
          placeholder='e.g. eggs'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit' className='submit-btn'>
          submit
        </button>
      </div>
    </form>
  );
};

export default Form;
