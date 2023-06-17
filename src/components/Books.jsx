import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookAsync } from '../api/bookstoreApi';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBookAsync(id));
  };

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>
          Author:
          {author}
        </p>
        <p>
          Category:
          {category}
        </p>
        <button type="button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
