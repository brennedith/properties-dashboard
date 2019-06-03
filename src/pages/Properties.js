import React, { useEffect, useContext } from 'react';

import AppContext from '../services/context';
import PropertiesProvider from '../services/properties';

import Nav from './components/Nav';
import Header from './components/Header';
import Content from './components/Content';
import Properties from './components/Properties';

function PropertiesPage({ history }) {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({
      type: 'REGISTER_HISTORY',
      payload: history
    });

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
      <Content>
        <Properties />
      </Content>
    </>
  );
}

export default PropertiesPage;
