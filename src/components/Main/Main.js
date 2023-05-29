import CustomersTable from 'components/CustomersTable/CustomersTable';
import Pagination from 'components/Pagination/Pagination';
import SearchBox from 'components/SearchBox/SearchBox';
import React from 'react';
import css from './Main.module.css';

const Main = () => {
  const [search, setSearch] = React.useState('');

  return (
    <div className={css.root}>
      <h2 className={css.title}>Hello Evano 👋🏼,</h2>

      <div className={css.table}>
        <div className={css.searchBoxWrap}>
          <div className={css.tableTitleBox}>
            <h3 className={css.tableTitle}>All Customers</h3>
            <p className={css.tableDesc}>Active Members</p>
          </div>
          <SearchBox setSearch={setSearch} />
        </div>
        <div className={css.tableWrap}>
          <CustomersTable search={search} />
        </div>
        <div className={css.paginationBox}>
          <span className={css.desc}>Showing data 1 to 8 of 256K entries</span>
          <Pagination totalPages={40} />
        </div>
      </div>
    </div>
  );
};

export default Main;
