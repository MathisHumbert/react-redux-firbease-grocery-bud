import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Alert = () => {
  const { alert, alertMsg, alertType } = useSelector((state) => state.alert);

  return <p className={alert ? `alert ${alertType}` : ''}>{alertMsg}</p>;
};

export default Alert;
