import React from 'react';
import styled from 'styled-components/native';
import { useStore, actions } from '@todos-pro/common';
import { Text } from '../common';
import { statuses } from '../../constants/statuses';

const Container = styled.View`
  padding: 10px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const TodoText = styled(Text)`
  font-size: 18px;
  ${({ complete }) => complete && 'opacity: 0.5;'}
`;

const LeftView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Todo = ({ text, _id: id, status, type }) => {
  const { dispatch } = useStore();

  const deleteTodo = _ => {
    dispatch(actions.deleteTodo(id));
  };

  const toggleCompleteness = _ => {
    // eslint-disable-next-line prettier/prettier
    const newStatus = status === statuses.COMPLETE
        ? statuses.INCOMPLETE
        : statuses.COMPLETE;
    const newTodo = {
      text,
      id,
      status: newStatus,
      type,
    };
    dispatch(actions.editTodo(newTodo));
  };

  return (
    <Container>
      <LeftView>
        <Text onPress={toggleCompleteness}>Done?</Text>
        <TodoText complete={status === statuses.COMPLETE}>
          {text}
        </TodoText>
      </LeftView>

      <Text onPress={deleteTodo}>X</Text>
    </Container>
  );
};

export default Todo;
