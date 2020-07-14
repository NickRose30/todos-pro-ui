import { useContext, createContext } from 'react';
import fetchHelper from '../helpers/fetch-helper';

const fetchAllTodos = _ => async dispatch => {
  try {
    const { data } = await fetchHelper({
      url: '/v1/todos',
    });
    dispatch(actions.setTodos(data));
  } catch (e) {
    // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

const deleteTodo = id => async dispatch => {
  try {
    await fetchHelper({
      method: 'DELETE',
      url: `/v1/todos/${id}`,
    });
    dispatch(actions.fetchAllTodos());
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

const editTodo = todo => async dispatch => {
  const { id, ...newTodo } = todo;
  try {
    await fetchHelper({
      method: 'PUT',
      url: `/v1/todos/${id}`,
      data: newTodo,
    });
    dispatch(actions.fetchAllTodos());
  } catch (e) {
    // eslint-disable-next-line no-console
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
  deleteTodo,
  editTodo,
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
