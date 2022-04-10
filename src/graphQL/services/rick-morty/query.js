import { gql } from '@apollo/client';

export const GET_RICK_MORTY = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_RICK_MORTY_BY_ID = gql`
  query character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
    }
  }
`;
