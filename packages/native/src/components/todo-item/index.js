import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components/native';
import { useStore, actions } from '@todos-pro/common';
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';
import { Text } from '../common';
import { statuses } from '../../constants/statuses';
import {
  defaultDarkGreyColor,
  defaultFontSize,
} from '../../constants/theme';

const Container = styled.View`
  padding: 10px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const TodoText = styled(Text)`
  font-size: ${defaultFontSize};
  ${({ complete }) => complete && 'opacity: 0.5;'}
  flex-shrink: 1;
`;

const RemovableTodo = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

const CompletenessIcon = styled.View`
  width: 32px;
  height: 24px;
`;

const EditingTodo = styled.TextInput`
  color: ${defaultDarkGreyColor};
  font-size: ${defaultFontSize};
  flex: 1;
`;

const Todo = ({
  text: initialText,
  _id: id,
  status,
  type,
}) => {
  const { dispatch } = useStore();
  const inputRef = useRef(null);
  const [text, setText] = useState(initialText);
  const [editing, setEditing] = useState(false);
  const isCompleted = status === statuses.COMPLETE;

  const endEditing = _ => {
    setText(initialText);
    setEditing(false);
  };

  const editTodo = _ => setEditing(true);

  // dispatch actions
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

  const updateTodoText = _ => {
    dispatch(
      actions.editTodo({
        text,
        id,
        status,
        type,
      })
    );
    setEditing(false);
  };

  // focus the textinput when editing is set to true
  useEffect(() => {
    if (inputRef && editing) {
      inputRef.current.focus();
    }
  }, [inputRef, editing]);

  return (
    <Container>
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
      {editing ? (
        <EditingTodo
          ref={inputRef}
          value={text}
          onChangeText={setText}
          autoCapitalize="sentences"
          clearButtonMode="while-editing"
          onSubmitEditing={updateTodoText}
          onEndEditing={endEditing}
        />
      ) : (
        <RemovableTodo onPress={editTodo}>
          <TodoText complete={isCompleted}>{text}</TodoText>
          <FontAwesome
            name="trash-o"
            size={24}
            color="red"
            onPress={deleteTodo}
          />
        </RemovableTodo>
      )}
    </Container>
  );
};

export default Todo;
