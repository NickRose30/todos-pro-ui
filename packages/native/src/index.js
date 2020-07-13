import React from 'react';
import useThunkReducer from 'react-hook-thunk-reducer';
import {
  StoreContext,
  reducer,
  initialState,
} from '@todos-pro/common';
import Main from './components/Main';

export const TodosProvider = ({ children }) => {
  const [state, dispatch] = useThunkReducer(
    reducer,
    initialState
  );
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default Main;
