import React from 'react';
import css from './Status.module.css';

const Status = ({ active }) => {
  return (
    <div className={`${css.root} ${active ? css.active : css.inactive}`}>
      {active ? 'Active' : 'Inactive'}
    </div>
  );
};

export default Status;
