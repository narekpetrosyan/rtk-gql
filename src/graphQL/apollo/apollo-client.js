import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLinks = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => console.log(message));
  }
});

const link = from([errorLinks, new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' })]);

export const apolloClient = new ApolloClient({ cache: new InMemoryCache(), link });
