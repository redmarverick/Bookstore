import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, author, category, onDelete,
}) => {
  const handleDelete = () => {
    onDelete(id);
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
  onDelete: PropTypes.func.isRequired,
};

export default Book;
