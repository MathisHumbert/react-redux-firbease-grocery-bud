import { useDispatch, useSelector } from 'react-redux';
import {
  addGrocery,
  setInputValue,
  editGrocery,
} from '../features/grocerySlice';

const Form = () => {
  const dispatch = useDispatch();
  const { inputValue, edit, editId } = useSelector((state) => state.grocery);

  const onSubmit = (e) => {
    e.preventDefault('');

    if (edit) {
      dispatch(editGrocery(editId));
    } else {
      dispatch(addGrocery(inputValue));
    }
    setInputValue('');
  };

  return (
    <form className='grocery-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <input
          type='text'
          className='grocery'
          placeholder='e.g. eggs'
          value={inputValue}
          onChange={(e) => dispatch(setInputValue(e.target.value))}
        />
        <button type='submit' className='submit-btn'>
          {edit ? 'edit' : 'submit'}
        </button>
      </div>
    </form>
  );
};

export default Form;
