import React from 'react';
import css from './SearchBox.module.css';
import { ReactComponent as Search } from '../../assets/search.svg';

const SearchBox = ({ setSearch }) => {
  return (
    <div className={css.root}>
      <input
        onChange={e => setSearch(e.target.value.trim())}
        className={css.input}
        placeholder="Search"
      />
      <Search className={css.icon} />
    </div>
  );
};

export default SearchBox;
