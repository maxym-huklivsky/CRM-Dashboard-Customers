import React from 'react';

import { ReactComponent as KeySquare } from '../../assets/key-square.svg';
import { ReactComponent as ThreeDSquare } from '../../assets/3d-square.svg';
import { ReactComponent as UserSquare } from '../../assets/user-square.svg';
import { ReactComponent as WalletMoney } from '../../assets/wallet-money.svg';
import { ReactComponent as DiscountShape } from '../../assets/discount-shape.svg';
import { ReactComponent as MessageQuestion } from '../../assets/message-question.svg';
import css from './NavList.module.css';

const NavList = () => {
  return (
    <ul className={css.navList}>
      <li className={css.navListItem}>
        <KeySquare /> <span className={css.navListText}>Dashboard</span>
      </li>
      <li className={css.navListItem}>
        <ThreeDSquare /> <span className={css.navListText}>Product</span>
      </li>
      <li className={`${css.navListItem} ${css.active}`}>
        <UserSquare /> <span className={css.navListText}>Customers</span>
      </li>
      <li className={css.navListItem}>
        <WalletMoney /> <span className={css.navListText}>Income</span>
      </li>
      <li className={css.navListItem}>
        <DiscountShape /> <span className={css.navListText}>Promote</span>
      </li>
      <li className={css.navListItem}>
        <MessageQuestion /> <span className={css.navListText}>Help</span>
      </li>
    </ul>
  );
};

export default NavList;
