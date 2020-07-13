import { useContext, createContext } from 'react';
import fetchHelper from '../helpers/fetch-helper';

const fetchAllTodos = _ => async dispatch => {
  try {
    const { data } = await fetchHelper({
      url: '/v1/todos',
    });
    dispatch(actions.setTodos(data));
  } catch (e) {
    console.log(e);
  }
};

const addNewTodo = ({ text, type }) => async dispatch => {
  try {
    await fetchHelper({
      method: 'POST',
      url: '/v1/todos',
      data: {
        text,
        type,
      },
    });
    dispatch(actions.fetchAllTodos());
  } catch (e) {
    console.log(e);
  }
};

const actionTypes = {
  SET_TODOS: 'SET_TODOS',
};

export const actions = {
  setTodos: payload => ({
    type: actionTypes.SET_TODOS,
    payload,
  }),
  fetchAllTodos,
  addNewTodo,
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_TODOS:
      return { ...state, todos: payload };
    default:
      return state;
  }
};

export const initialState = {
  todos: [],
};

export const StoreContext = createContext({
  state: {},
  dispatch: () => {},
});

export const useStore = () => useContext(StoreContext);
