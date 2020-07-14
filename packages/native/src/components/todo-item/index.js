import React from 'react';
import styled from 'styled-components/native';
import { useStore, actions } from '@todos-pro/common';
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';
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

const CompletenessIcon = styled.View`
  width: 32px;
  height: 24px;
`;

const Todo = ({ text, _id: id, status, type }) => {
  const { dispatch } = useStore();
  const isCompleted = status === statuses.COMPLETE;

  const deleteTodo = _ => {
    dispatch(actions.deleteTodo(id));
  };

  const toggleCompleteness = _ => {
    const newStatus = isCompleted
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
        <CompletenessIcon>
          {isCompleted ? (
            <Ionicons
              name="ios-checkmark-circle"
              size={25}
              color="green"
              onPress={toggleCompleteness}
            />
          ) : (
            <MaterialCommunityIcons
              name="checkbox-blank-circle-outline"
              size={24}
              color="grey"
              onPress={toggleCompleteness}
            />
          )}
        </CompletenessIcon>
        <TodoText complete={isCompleted}>{text}</TodoText>
      </LeftView>
      <FontAwesome
        name="trash-o"
        size={24}
        color="red"
        onPress={deleteTodo}
      />
    </Container>
  );
};

export default Todo;
