import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus, categoriesSelector } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const categories = useSelector(categoriesSelector);
  const dispatch = useDispatch();

  const handleStatusClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <p>
        Status:
        {' '}
        {categories.length > 0 ? categories[0] : 'press the button to get the status'}
      </p>
      <button type="button" onClick={handleStatusClick}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
