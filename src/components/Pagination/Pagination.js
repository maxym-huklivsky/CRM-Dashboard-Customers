import React from 'react';
import css from './Pagination.module.css';

const Pagination = ({ totalPages }) => {
  const renderButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;
    const ellipsis = <span className={css.ellipsis}>...</span>;

    if (totalPages <= maxVisibleButtons) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            className={`${css.button} ${i === 1 ? css.active : ''}`}
          >
            {i}
          </button>
        );
      }
    } else {
      const firstPageButtons = [];

      for (let i = 1; i <= 4; i++) {
        firstPageButtons.push(
          <button
            key={i}
            className={`${css.button} ${i === 1 ? css.active : ''}`}
          >
            {i}
          </button>
        );
      }

      buttons.push(
        ...firstPageButtons,
        ellipsis,
        <button key={totalPages} className={css.button}>
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className={css.root}>
      <button className={css.button}>&lt;</button>
      {renderButtons()}
      <button className={css.button}>&gt;</button>
    </div>
  );
};

export default Pagination;
