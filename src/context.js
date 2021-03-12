import React, { useEffect, useContext, useReducer } from 'react';
import reducer from './reducer';

const BudgetContext = React.createContext();

const getLocalStorage = () => {
  let items = localStorage.getItem('budget_app');
  if (items) {
    return JSON.parse(localStorage.getItem('budget_app'));
  } else {
    return { expenses: [], income: [] };
  }
};

const initialState = {
  items: getLocalStorage(),
  totals: {
    expenses: 0,
    income: 0,
  },
};

export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (type, desc, value) => {
    dispatch({ type: 'ADD_ITEM', payload: { type, desc, value } });
  };

  const deleteItem = (id, type) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id, type } });
  };

  const getTotals = () => {
    dispatch({ type: 'GET_TOTALS' });
  };

  const formatPrice = number => {
    const newNumber = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number);
    return newNumber;
  };

  useEffect(() => {
    getTotals();
    localStorage.setItem('budget_app', JSON.stringify(state.items));
  }, [state.items]);

  return (
    <BudgetContext.Provider
      value={{ ...state, submitHandler, deleteItem, formatPrice }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudgetContext = () => {
  return useContext(BudgetContext);
};
