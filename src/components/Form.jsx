import { useDispatch, useSelector } from 'react-redux';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import {
  setInputValue,
  resetEdit,
  resetInputValue,
} from '../features/grocerySlice';
import { startAlert } from '../features/alertSlice';

const Form = () => {
  const dispatch = useDispatch();
  const { inputValue, edit, editId } = useSelector((state) => state.grocery);
  const { user } = useSelector((state) => state.user);

  const onSubmit = (e) => {
    e.preventDefault('');

    // UPDATE
    if (edit) {
      const docRef = doc(db, 'grocery', editId);
      updateDoc(docRef, {
        name: inputValue,
      });
      dispatch(startAlert({ type: 'success', msg: 'Value updated' }));
      dispatch(resetEdit());
    }
    // CREATE
    else {
      const colRef = collection(db, 'grocery');
      addDoc(colRef, {
        userRef: user.id,
        name: inputValue,
      });
      dispatch(resetInputValue());
      dispatch(startAlert({ type: 'success', msg: 'Item added to the list' }));
    }
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
