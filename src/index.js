import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import App from './App';
import { store } from './store/store';
import { apolloClient } from './graphQL/apollo/apollo-client';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>,
);
