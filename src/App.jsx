import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import BookList from './components/BooksList';
import Categories from './components/categories';

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
        <Route path="/" element={<BookList books={books} onDelete={handleDeleteBook} onAddBook={handleAddBook} />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
};

export default App;
