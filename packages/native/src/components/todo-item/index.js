import React from 'react';
import styled from 'styled-components/native';
import { Text } from '../common';

const Container = styled.View`
  padding: 10px;
`;

const TodoText = styled(Text)`
  font-size: 18px;
`;

const Todo = ({ todo }) => (
  <Container>
    <TodoText>{todo.text}</TodoText>
  </Container>
);

export default Todo;
