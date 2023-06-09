import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      onAddBook(title.trim()); // Pass the title string instead of the newBook object
      setTitle('');
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookForm;
