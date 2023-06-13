import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Books';
import BookForm from './BookForm';
import { selectAllBooks } from '../redux/books/booksSlice';

const BooksList = ({ onDelete, onAddBook }) => {
  const books = useSelector(selectAllBooks);
  const dummyBook = {
    id: 0,
    title: 'Dummy Book',
  };

  return (
    <div>
      <h1>Book List</h1>
      {/* Render the dummy book */}
      <Book id={dummyBook.id} title={dummyBook.title} onDelete={onDelete} />

      {/* Render the actual books */}
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          onDelete={onDelete}
        />
      ))}
      <BookForm onAddBook={onAddBook} />
    </div>
  );
};

BooksList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onAddBook: PropTypes.func.isRequired,
};

export default BooksList;
