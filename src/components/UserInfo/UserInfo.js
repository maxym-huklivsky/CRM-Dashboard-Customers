import React from 'react';

import avatar from '../../assets/avatar.png';
import css from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <div className={css.root}>
      <img alt="avatar" src={avatar} />
      <div className={css.info}>
        <span className={css.name}>Evano</span>
        <span className={css.position}>Project Manager</span>
      </div>
    </div>
  );
};

export default UserInfo;
