import { deleteDoc, doc } from 'firebase/firestore';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setEdit } from '../features/grocerySlice';
import { startAlert } from '../features/alertSlice';
import { db } from '../firebase.config';

const List = ({ name, id }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    const docRef = doc(db, 'grocery', id);
    deleteDoc(docRef);
    dispatch(startAlert({ type: 'danger', msg: 'item removed' }));
  };

  return (
    <article className='grocery-item'>
      <p className='title'>{name}</p>
      <div className='btn-container'>
        <button
          type='button'
          className='edit-btn'
          onClick={() => dispatch(setEdit({ id, name }))}
        >
          <FaEdit />
        </button>
        <button
          type='button'
          className='delete-btn'
          onClick={() => onDelete(id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default List;
