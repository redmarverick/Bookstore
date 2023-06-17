import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'F2U9a7NfqO22Whu7pCvy';

export const deleteBookAsync = createAsyncThunk(
  'books/deleteBook',
  async (bookId) => {
    try {
      await axios.delete(`${baseURL}/apps/${appId}/books/${bookId}`);
      return bookId;
    } catch (error) {
      console.error('Error deleting book:', error);
      throw error;
    }
  }
);

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${baseURL}/apps/${appId}/books`);
    return response.data;
  } catch (error) {
    console.error('Error getting books:', error);
    throw error;
  }
});

export const addBookAsync = createAsyncThunk('books/addBook', async (book) => {
  try {
    const response = await axios.post(`${baseURL}/apps/${appId}/books`, book);
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      // Convert the object to an array of books
      const booksArray = Object.values(action.payload).flat();
      return booksArray;
    });
    builder.addCase(addBookAsync.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
    builder.addCase(deleteBookAsync.fulfilled, (state, action) => {
      const bookId = action.payload; // Convert to number if the book ID is a string
      return state.filter((book) => book.id !== bookId);
    });
  },
});

export const selectAllBooks = (state) => state.books;

export default booksSlice.reducer;
