import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'F2U9a7NfqO22Whu7pCvy';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const categories = await getCategories();
  return categories;
});

// Get all books for a given app
export const getAllBooks = async (appId) => {
  try {
    const response = await axios.get(`${baseURL}/apps/${appId}/books`);
    return response.data;
  } catch (error) {
    console.error('Error getting books:', error);
    throw error;
  }
};

// Delete a book from a given app
export const deleteBook = async (appId, itemId) => {
  try {
    const response = await axios.delete(`${baseURL}/apps/${appId}/books/${itemId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${baseURL}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error getting categories:', error);
    throw error;
  }
};

export const categoriesSelector = (state) => state.categories;
