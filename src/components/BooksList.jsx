import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, selectAllBooks, deleteBookAsync } from '../redux/books/booksSlice';
import BookForm from './BookForm';

const BooksList = () => {
  const books = useSelector(selectAllBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDeleteBook = (bookId) => {
    console.log('Deleting book with ID:', bookId);
    dispatch(deleteBookAsync(bookId));
  };

  const handleAddBook = (book) => {
    dispatch(addBookAsync(book));
  };

  return (
    <div>
      <h1>Book List</h1>
      {books.map((book) => (
        <div key={book.item_id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Category: {book.category}</p>
          <p>ID: {book.item_id}</p>
          <button type="button" onClick={() => handleDeleteBook(book.item_id)}>
            Delete
          </button>
        </div>
      ))}
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default BooksList;
