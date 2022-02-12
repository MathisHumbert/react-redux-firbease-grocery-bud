import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { addGrocery, clearGrocery } from '../features/grocerySlice';
import List from './List';
import { db } from '../firebase.config';

const Grocery = () => {
  const dispatch = useDispatch();
  const { groceries } = useSelector((state) => state.grocery);

  useEffect(() => {
    const colRef = collection(db, 'grocery');
    onSnapshot(colRef, (snapchot) => {
      let tempGroceries = [];
      snapchot.docs.forEach((doc) => {
        tempGroceries.push({
          id: doc.id,
          name: doc.data().name,
        });
      });
      dispatch(addGrocery(tempGroceries));
    });
  }, []);

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
