import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookAsync } from '../redux/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '' && category.trim() !== '') {
      const newBook = {
        item_id: books[0].length + 1, // Generate ID based on the number of books + 1
        title: title.trim(),
        author: author.trim(),
        category: category.trim(),
      };
      dispatch(addBookAsync(newBook));
      setTitle('');
      setAuthor('');
      setCategory('');
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
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter book author"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter book category"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default BookForm;
