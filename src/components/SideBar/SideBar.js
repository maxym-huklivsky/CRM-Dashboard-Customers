import React from 'react';

import NavList from 'components/NavList/NavList';
import { ReactComponent as Setting } from '../../assets/setting.svg';
import UserInfo from 'components/UserInfo/UserInfo';
import css from './SideBar.module.css';

const SideBar = ({ activeSideBar }) => {
  const SideBarRef = React.useRef(null);

  if (activeSideBar && SideBarRef.current) {
    SideBarRef.current.classList.add('active-menu');
    document.body.classList.add('no-scroll');
  }

  if (!activeSideBar && SideBarRef.current) {
    SideBarRef.current.classList.remove('active-menu');
    document.body.classList.remove('no-scroll');
  }

  return (
    <div ref={SideBarRef} className={css.root}>
      <h1 className={css.title}>
        <Setting />
        <div className={css.textWrap}>
          <span className={css.titleText}>Dashboard</span>
          <span className={css.addText}>v.01</span>
        </div>
      </h1>
      <div className={css.navListWrap}>
        <NavList />
      </div>
      <UserInfo />
    </div>
  );
};

export default SideBar;
