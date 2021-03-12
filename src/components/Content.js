import React from 'react';
import { useBudgetContext } from '../context';

import SingleItem from './SingleItem';

const Content = () => {
  const {
    items: { income, expenses },
  } = useBudgetContext();

  if (expenses.length === 0 && income.length === 0) {
    return (
      <h2 style={{ textAlign: 'center', marginTop: '50px' }}>
        The List is Empty, Please Add New Items
      </h2>
    );
  }

  return (
    <div className='content'>
      {income.length > 0 && (
        <div className='income'>
          <h2>Income</h2>
          <ul className='income-list'>
            {income.map((item, index) => {
              return (
                <SingleItem key={index} {...item} id={index} type='income' />
              );
            })}
          </ul>
        </div>
      )}
      {expenses.length > 0 && (
        <div className='expenses'>
          <h2>Expenses</h2>
          <ul className='expenses-list'>
            {expenses.map((item, index) => {
              return (
                <SingleItem key={index} {...item} id={index} type='expenses' />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Content;
