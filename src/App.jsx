import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import BookList from './components/BooksList';

const App = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (title) => {
    const newBook = {
      id: new Date().getTime(),
      title: String(title), // Convert the title value to a string
    };
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" />
        <Route path="/categories" element={<BookList books={books} onDelete={handleDeleteBook} onAddBook={handleAddBook} />} />
      </Routes>
    </Router>
  );
};

export default App;
