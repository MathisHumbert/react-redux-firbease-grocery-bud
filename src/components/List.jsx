import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteGrocery, setEdit } from '../features/grocerySlice';

const List = ({ name, id }) => {
  const dispatch = useDispatch();

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
          onClick={() => dispatch(deleteGrocery(id))}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default List;
