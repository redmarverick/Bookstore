import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: new Date().getTime(),
        title: action.payload,
      };
      return {
        ...state,
        books: [...state.books, newBook],
      };
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.id !== bookId),
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
