import styled from 'styled-components/native';
import React from 'react';
import { FlatList } from 'react-native';
import * as R from 'ramda';
import WorkspaceHeader from './header';
import { defaultGreyColor } from '../../constants/theme';
import TodoItem from '../todo-item';

const Container = styled.View`
  flex: 1;
  background-color: ${defaultGreyColor};
  padding: 20px;
`;

const Workspace = ({ route, todos }) => (
  <Container>
    <WorkspaceHeader pageName={route.name} />
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem todo={item} />}
      keyExtractor={R.prop('id')}
    />
  </Container>
);

export default Workspace;