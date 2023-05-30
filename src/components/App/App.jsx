import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar';
import css from './App.module.css';

export const App = () => {
  const [activeSideBar, setActiveSideBar] = React.useState(false);

  return (
    <>
      <SideBar activeSideBar={activeSideBar} />
      <Main />

      <button
        type="button"
        className={css.menuButton}
        onClick={() => setActiveSideBar(state => !state)}
      >
        <RxHamburgerMenu size={30} />
      </button>
    </>
  );
};
