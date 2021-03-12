import React from 'react';
import { useBudgetContext } from '../context';
import { TiDeleteOutline } from 'react-icons/ti';

const SingleItem = ({ desc, value, id, type }) => {
  const { deleteItem } = useBudgetContext();

  return (
    <li class='item'>
      <p className='item-description'>{desc}</p>
      <div>
        <p className='item-value'>{value}$</p>
        <button className='delete-btn' onClick={() => deleteItem(id, type)}>
          <TiDeleteOutline />
        </button>
      </div>
    </li>
  );
};

export default SingleItem;
