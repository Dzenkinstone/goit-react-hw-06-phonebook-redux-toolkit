import { createSlice } from '@reduxjs/toolkit';

const initialFilter = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
