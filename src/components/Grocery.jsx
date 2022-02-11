import { useSelector, useDispatch } from 'react-redux';
import { clearGrocery } from '../features/grocerySlice';
import List from './List';

const Grocery = () => {
  const dispatch = useDispatch();
  const { groceries } = useSelector((state) => state.grocery);

  return (
    <div className='grocery-container'>
      <div className='grocery-list'>
        {groceries.map((item) => {
          return <List key={item.id} {...item} />;
        })}
      </div>
      {groceries.length > 0 && (
        <button className='clear-btn' onClick={() => dispatch(clearGrocery())}>
          clear items
        </button>
      )}
    </div>
  );
};

export default Grocery;
