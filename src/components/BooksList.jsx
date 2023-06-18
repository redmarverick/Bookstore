import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchBooks,
  selectAllBooks,
  deleteBookAsync,
  addBookAsync,
} from '../redux/books/booksSlice';
import BookForm from './BookForm';

const BooksList = () => {
  const books = useSelector(selectAllBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBookAsync(bookId));
  };

  const handleAddBook = async (book) => {
    dispatch(addBookAsync(book));
    dispatch(fetchBooks());
  };

  return (
    <div>
      <h1>Book List</h1>
      {books.map((book) => (
        <div key={book.itemId}>
          <h3>{book.title}</h3>
          <p>
            Author:
            {book.author}
          </p>
          <p>
            Category:
            {book.category}
          </p>
          <button type="button" onClick={() => handleDeleteBook(book.itemId)}>
            Delete
          </button>
        </div>
      ))}
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default BooksList;
