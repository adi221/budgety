import React, { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useBudgetContext } from '../context';

const AddItem = () => {
  const { submitHandler } = useBudgetContext();
  const [type, setType] = useState('income');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const clearInputs = () => {
    setValue('');
    setDescription('');
  };

  const style = type === 'income' ? 'green-focus' : 'red-focus';

  return (
    <div className='add'>
      <form
        className='add-container'
        onSubmit={e => {
          e.preventDefault();
          if (!description || !value) return;
          submitHandler(type, description, value);
          clearInputs();
        }}
      >
        <select
          name='type'
          value={type}
          className={`${style} add-type`}
          onChange={e => setType(e.target.value)}
        >
          <option value='income'>+</option>
          <option value='expenses'>-</option>
        </select>
        <input
          type='text'
          value={description}
          onChange={e => setDescription(e.target.value)}
          className={`${style} add-description`}
          placeholder='Add description'
        />
        <input
          type='number'
          className={`${style} add-value`}
          placeholder='Value'
          value={value}
          onChange={e => setValue(+e.target.value)}
        />
        <button
          className={type === 'income' ? 'add-btn green' : 'add-btn red'}
          type='submit'
        >
          <FaRegCheckCircle />
        </button>
      </form>
    </div>
  );
};

export default AddItem;
