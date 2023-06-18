import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const getCategories = async () => {
  const response = await axios.get(`${baseURL}/categories`);
  return response.data;
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const categories = await getCategories();
  return categories;
});

export const categoriesSelector = (state) => state.categories;
