import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../../api/bookstoreApi';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const categories = await getCategories();
  return categories;
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    checkStatus: (state) => {
      return {
        ...state,
        categories: ['Under construction'],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
export const categoriesSelector = (state) => state.categories.categories;