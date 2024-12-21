import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import MyApolloProvider from './Providers/ApolloProvider.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyApolloProvider>
        <App />
      </MyApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);