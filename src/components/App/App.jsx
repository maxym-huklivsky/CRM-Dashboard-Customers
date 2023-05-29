import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar';
import { RxHamburgerMenu } from 'react-icons/rx';
import React from 'react';
import css from './App.module.css';
export const App = () => {
  const [activeSideBar, setActiveSideBar] = React.useState(false);

  return (
    <>
      <SideBar activeSideBar={activeSideBar} />
      <Main />
      <RxHamburgerMenu
        onClick={() => setActiveSideBar(state => !state)}
        size={30}
        className={css.menuButton}
      />
    </>
  );
};
