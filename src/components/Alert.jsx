import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stopAlert } from '../features/alertSlice';

const Alert = () => {
  const dispatch = useDispatch();
  const { alert, alertMsg, alertType } = useSelector((state) => state.alert);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(stopAlert());
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alertMsg]);

  return <p className={alert ? `alert alert-${alertType}` : ''}>{alertMsg}</p>;
};

export default Alert;
