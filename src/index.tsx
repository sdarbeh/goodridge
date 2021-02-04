import React from 'react';
import ReactDOM from 'react-dom';

import { Provider as ReduxProvider } from 'react-redux'
import ThemeProvider from './utils/Theme/ThemeProvider'
import store from './store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from '@apollo/client';
import { client } from './graphql'

ReactDOM.render(
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider> 
    </ReduxProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
