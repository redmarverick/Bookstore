import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, categoriesSelector} from '../api/bookstoreApi';

const Categories = () => {
  const categories = useSelector(categoriesSelector);
  const dispatch = useDispatch();
  const [appId, setAppId] = useState('');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCreateApp = async () => {
    try {
      const response = await createApp();
      setAppId(response.appId);
      console.log(response);
    } catch (error) {
      console.error('Error creating app:', error);
    }
  };

  return (
    <div>
      <p>
        Status:
        {' '}
        {categories.length > 0 ? categories[0] : 'press the button to get the status'}
      </p>
      <button type="button" onClick={handleCreateApp}>
        Create App
      </button>
    </div>
  );
};

export default Categories;
