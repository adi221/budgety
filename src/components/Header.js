import React, { useEffect } from 'react';
import { useBudgetContext } from '../context';

const Header = () => {
  const {
    totals: { expenses, income },
    formatPrice,
  } = useBudgetContext();

  // Display date
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date();
  const time = monthNames[date.getMonth()] + ' ' + date.getFullYear();

  const calcPercentage = () => {
    if (income === 0) return '0%';
    return `${Math.floor((expenses / income) * 100)}%`;
  };

  return (
    <div className='top'>
      <h1 className='budget-title'>Available Budget In {time} </h1>
      <div className='budget-value'>{formatPrice(income - expenses)}</div>
      <div className='budget-row budget-income'>
        <p className='budget-row-text'>Income</p>
        <p className='budget-row-value'>{formatPrice(income)}</p>
        <p className='budget-row-percentage'> </p>
      </div>
      <div className='budget-row budget-expenses'>
        <p className='budget-row-text'>Expenses</p>
        <p className='budget-row-value'>{formatPrice(expenses)}</p>
        <p className='budget-row-percentage'>{calcPercentage()}</p>
      </div>
    </div>
  );
};

export default Header;
