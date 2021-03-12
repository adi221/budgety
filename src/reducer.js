const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const { type, desc, value } = action.payload;
    const newItem = { desc, value };
    return {
      ...state,
      items: { ...state.items, [type]: [...state.items[type], newItem] },
    };
  }
  if (action.type === 'DELETE_ITEM') {
    const { type, id } = action.payload;
    const newList = state.items[type].filter((item, index) => index !== id);
    return { ...state, items: { ...state.items, [type]: newList } };
  }
  if (action.type === 'GET_TOTALS') {
    const income = state.items.income.reduce(
      (acc, item) => acc + item.value,
      0
    );
    const expenses = state.items.expenses.reduce(
      (acc, item) => acc + item.value,
      0
    );
    return { ...state, totals: { income, expenses } };
  }
  throw new Error(`No matching action -${action.type}`);
};

export default reducer;
