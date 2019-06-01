import React, { useEffect, useContext } from 'react';

import AppContext from '../services/context';
import PropertiesProvider from '../services/properties';

import Nav from './components/Nav';
import Header from './components/Header';

function App() {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    PropertiesProvider.getAll()
      .then(({ data }) => {
        dispatch({
          type: 'LOAD_PROPERTIES',
          payload: data
        });
      })
      .catch(err => {
        // TODO: handle erros
        console.log(err);
      });
    // dispatch will not change in the future
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Nav />
      <Header />
    </>
  );
}

export default App;
