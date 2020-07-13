import React from 'react';
import Root, { TodosProvider } from './src';

const App = _ => (
  <TodosProvider>
    <Root />
  </TodosProvider>
);

export default App;
