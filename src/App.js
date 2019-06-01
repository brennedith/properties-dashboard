import React from 'react';

import { ContextProvider } from './services/context';
import PropertiesPage from './pages/Properties';

import './App.css';

const App = () => {
  return (
    <ContextProvider>
      <PropertiesPage />
    </ContextProvider>
  );
};

export default App;
