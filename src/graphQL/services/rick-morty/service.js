import { apolloClient } from '../../apollo/apollo-client';
import { GET_RICK_MORTY, GET_RICK_MORTY_BY_ID } from './query';

class RickMortyService {
  async getRickMorty(
    page = 1,
    filter = { name: '', status: '', species: '', type: '', gender: '' },
  ) {
    try {
      const { data } = await apolloClient.query({
        query: GET_RICK_MORTY,
        variables: { page, filter },
      });

      if (!data) {
        throw new Error('Cant get');
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getRickMortyById(id) {
    try {
      const { data } = await apolloClient.query({
        query: GET_RICK_MORTY_BY_ID,
        variables: { id },
      });

      if (!data) {
        throw new Error('Cant get');
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new RickMortyService();
