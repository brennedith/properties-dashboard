import React from 'react';
import { Route } from 'react-router';

import List from './List';
import EditForm from './EditForm';

const PropertiesComponent = () => {
  return (
    <>
      <List />
      <Route path="/edit/:id" component={EditForm} />
    </>
  );
};

export default PropertiesComponent;
