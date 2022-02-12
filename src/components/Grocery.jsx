import { useEffect } from 'react';
import {
  onSnapshot,
  query,
  collection,
  where,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { addGrocery } from '../features/grocerySlice';
import { db } from '../firebase.config';
import { startAlert } from '../features/alertSlice';
import List from './List';

const Grocery = () => {
  const dispatch = useDispatch();
  const { groceries } = useSelector((state) => state.grocery);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const colRef = collection(db, 'grocery');
    const q = query(colRef, where('userRef', '==', user.id));
    onSnapshot(q, (snapchot) => {
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

  const clearGrocery = () => {
    groceries.forEach((item) => {
      const docRef = doc(db, 'grocery', item.id);
      deleteDoc(docRef);
    });
    dispatch(startAlert({ type: 'danger', msg: 'Empty list' }));
  };

  return (
    <div className='grocery-container'>
      <div className='grocery-list'>
        {groceries.map((item) => {
          return <List key={item.id} {...item} />;
        })}
      </div>
      {groceries.length > 0 && (
        <button className='clear-btn' onClick={clearGrocery}>
          clear items
        </button>
      )}
    </div>
  );
};

export default Grocery;
