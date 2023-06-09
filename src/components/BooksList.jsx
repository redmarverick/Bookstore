import PropTypes from 'prop-types';
import Book from './Books';
import BookForm from './BookForm';

const BooksList = ({ books, onDelete, onAddBook }) => {
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
      {' '}
      {/* Include the onAddBook prop */}
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onAddBook: PropTypes.func.isRequired, // Add the onAddBook prop type
};

export default BooksList;
