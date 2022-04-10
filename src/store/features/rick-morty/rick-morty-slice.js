import { createSlice } from '@reduxjs/toolkit';
import { loadRickMorty, getRickMortyById } from './async-actions';

const initialState = {
  rickMorty: [],
  singleRickMorty: null,
  meta: {},
  isLoading: false,
};

export const rickMortySlice = createSlice({
  name: 'rickMorty',
  initialState,
  reducers: {
    setRickMorty(state, action) {
      state.rickMorty = action.payload;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(loadRickMorty.pending, (state) => {
      state.isLoading = true;
    });
    addCase(loadRickMorty.fulfilled, (state, { payload }) => {
      state.rickMorty = payload.results;
      state.meta = payload.meta;
      state.isLoading = false;
    });
    addCase(getRickMortyById.pending, (state) => {
      state.isLoading = true;
    });
    addCase(getRickMortyById.fulfilled, (state, { payload }) => {
      state.singleRickMorty = payload;
      state.isLoading = false;
    });
  },
});

export const { setRickMorty } = rickMortySlice.actions;
export const rickMortyReducer = rickMortySlice.reducer;

export const selectRickMorty = (state) => state.rickMorty;
