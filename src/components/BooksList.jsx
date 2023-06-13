import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Book from './Books';
import BookForm from './BookForm';
import { selectAllBooks, addBook, deleteBook } from '../redux/books/booksSlice';

const BooksList = () => {
  const books = useSelector(selectAllBooks);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  const handleAddBook = (book) => {
    const newBook = {
      id: uuid(),
      ...book,
    };
    dispatch(addBook(newBook));
  };

  useEffect(() => {
    console.log('Books:', books);
  }, [books]);

  return (
    <div>
      <h1>Book List</h1>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
          onDelete={handleDeleteBook}
        />
      ))}
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default BooksList;
