import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import client from './utils/apolloClient.js';
import './styling/index.css';

// Render the App component wrapped in ApolloProvider and BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
	<ApolloProvider client={client}> {/** Provide Apollo Client to React app */}
        <BrowserRouter> {/** Enable routing within the React app */}
            <App />
        </BrowserRouter>
    </ApolloProvider>
);
