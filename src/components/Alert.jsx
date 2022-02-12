import { useEffect } from 'react';

const Alert = ({ alert, alertMsg, alertType }) => {
  return <p className={alert ? `alert ${alertType}` : ''}>{alertMsg}</p>;
};

export default Alert;
