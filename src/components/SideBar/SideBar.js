import NavList from 'components/NavList/NavList';
import React from 'react';
import css from './SideBar.module.css';
import { ReactComponent as Setting } from '../../assets/setting.svg';
import UserInfo from 'components/UserInfo/UserInfo';
import './index.css';

const SideBar = ({ activeSideBar }) => {
  const SideBarRef = React.useRef(null);

  if (activeSideBar) {
    SideBarRef.current.classList.add('active');
  } else {
    SideBarRef.current.classList.remove('active');
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
