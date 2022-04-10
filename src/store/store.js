import { configureStore } from '@reduxjs/toolkit';
import { rickMortyReducer } from './features/rick-morty/rick-morty-slice';

export const store = configureStore({
  reducer: {
    rickMorty: rickMortyReducer,
  },
});
