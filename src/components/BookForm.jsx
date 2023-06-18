import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '' && category.trim() !== '') {
      const newBook = {
        item_id: uuidv4(), // Generate ID based on the number of books + 1
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
    <div className="mx-16 mb-16">
      <h2 className="text-xl font-bold mb-3">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} className="w-full flex justify-between items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
          className="w-1/3 h-12 mr-4 pl-3 pr-14 rounded-md border border-gray-300 bg-white"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="w-1/3 h-12 mr-4 pl-3 pr-14 rounded-md border border-gray-300 bg-white"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-1/4 h-12 mr-4 pl-2 pr-3 rounded-md border border-gray-300 bg-white"
        >
          <option value="" disabled defaultValue>Category</option>
          <option value="Adventure">Adventure</option>
          <option value="Biography">Biography</option>
          <option value="Children">Children</option>
          <option value="Classics">Classics</option>
          <option value="Comics">Comics</option>
          <option value="Cooking">Cooking</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Fiction">Fiction</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Humor">Humor</option>
          <option value="Mystery">Mystery</option>
          <option value="Poetry">Poetry</option>
          <option value="Romance">Romance</option>
          <option value="Science">Science</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Sports">Sports</option>
          <option value="Suspense">Suspense</option>
          <option value="Thriller">Thriller</option>
          <option value="Travel">Travel</option>
          <option value="Western">Western</option>
          <option value="Young Adult">Young Adult</option>
          <option value="Other">Other</option>
        </select>
        <button
          type="submit"
          className="w-56 h-12 px-4 py-2 rounded-md bg-blue-400 text-white font-light text-sm text-center"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BookForm;
