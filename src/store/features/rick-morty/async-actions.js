import { createAsyncThunk } from '@reduxjs/toolkit';
import rickMortyService from '../../../graphQL/services/rick-morty/service';

export const loadRickMorty = createAsyncThunk(
  'rickMorty/loadRickMorty',
  async ({ page, filter }) => {
    const { characters } = await rickMortyService.getRickMorty(page, filter);
    return { results: characters.results, meta: characters.info };
  },
);

export const getRickMortyById = createAsyncThunk('rickMorty/getRickMortyById', async ({ id }) => {
  const { character } = await rickMortyService.getRickMortyById(id);
  return character;
});
