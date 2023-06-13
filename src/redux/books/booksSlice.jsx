import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [
      {
        id: uuid(),
        title: 'The Great Gatsby',
        author: 'John Smith',
        category: 'Fiction',
      },
      {
        id: uuid(),
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        category: 'Fiction',
      },
      {
        id: uuid(),
        title: 'The Selfish Gene',
        author: 'Richard Dawkins',
        category: 'Nonfiction',
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      const { title, author, category } = action.payload;
      state.books.push({
        id: uuid(),
        title,
        author,
        category,
      });
    },
    deleteBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.id !== bookId),
      };
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
export const selectAllBooks = (state) => state.books.books;
