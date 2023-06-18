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
      {books.map((book) => (
        <div key={book.itemId} className="flex justify-between w-87.5 h-68.563 m-16 mb-4 mt-4 p-0 rounded-md shadow-md bg-white">
          <div className="p-6">
            <h2 className="montserrat font-bold text-xl text-black">{book.category}</h2>
            <h3 className="font-bold robotoslab text-2xl text-black mt-4">{book.title}</h3>
            <p className="text-blue-400 font-thin robotoslab text-lg text-black mt-2">
              Author:
              {book.author}
            </p>
            <div className="flex items-center mt-4">
              <p className="text-blue-400 font-thin robotoslab text-lg text-black">Comments</p>
              <button type="button" onClick={() => handleDeleteBook(book.itemId)} className="text-blue-400 robotoslab font-thin text-lg text-black mx-4">
                Remove
              </button>
              <p className="text-blue-400 robotoslab font-thin text-lg text-black">Edit</p>
            </div>
          </div>
          <div className="flex items-center justify-end px-6 py-4">
            <div className="flex flex-col items-center mr-8">
              <div className="border-4 border-solid border-blue-400 w-16 h-16 rounded-full" />
              <p className="montserrat font-black text-2xl text-black">100%</p>
              <p className="montserrat font-light text-lg text-black">Completed</p>
            </div>
            <div className="mr-60 ml-20">
              <p className="font-light text-sm robotoslab text-black">Current Chapter</p>
              <p className="font-light text-2xl robotoslab text-black">Chapter &quot;Loren Ipsum&quot;</p>
              <button type="button" className="w-48 robotoslab h-10 mt-8 ml-2 px-4 py-1 rounded-md bg-blue-400 text-white font-light text-sm text-center">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        </div>
      ))}
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default BooksList;
