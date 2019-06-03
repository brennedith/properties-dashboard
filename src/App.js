import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';

import { ContextProvider } from './services/context';
import PropertiesPage from './pages/Properties';

import './App.css';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Route path="/" component={PropertiesPage} />
      </Router>
    </ContextProvider>
  );
};

export default App;
