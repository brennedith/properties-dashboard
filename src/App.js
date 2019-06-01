import React from 'react';

import AppContext from './services/context';

import Nav from './components/Nav';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <AppContext>
      <Nav />
      <Header />
    </AppContext>
  );
}

export default App;
