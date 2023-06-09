import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'F2U9a7NfqO22Whu7pCvy';

export const deleteBookAsync = createAsyncThunk(
  'books/deleteBook',
  async (bookId) => {
    try {
      const response = await axios.delete(`${baseURL}/apps/${appId}/books/${bookId}`);
      return bookId;
    } catch (error) {
      throw error;
    }
  },
);

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${baseURL}/apps/${appId}/books`);
    const booksData = response.data;

    const booksWithIds = Object.entries(booksData)
      .flatMap(([itemId, books]) => books.map((book) => ({ ...book, itemId })));

    return booksWithIds;
  } catch (error) {
    console.error('Error getting books:', error);
    throw error;
  }
});

export const addBookAsync = createAsyncThunk('books/addBook', async (book) => {
  const {
    item_id, title, author, category,
  } = book;
  const payload = {
    item_id,
    title,
    author,
    category,
  };
  try {
    const response = await axios.post(`${baseURL}/apps/${appId}/books`, payload);
    console.log('Book added:', response.data);
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
    builder.addCase(fetchBooks.fulfilled, (state, action) => action.payload);
    builder.addCase(addBookAsync.fulfilled, (state, action) => [...state, action.payload]);
    builder.addCase(deleteBookAsync.fulfilled, (state, action) => {
      const bookId = action.payload;
      return state.filter((book) => book.item_id !== bookId);
    });
  },
});

export const selectAllBooks = (state) => state.books;

export default booksSlice.reducer;
