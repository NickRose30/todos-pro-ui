import styled from 'styled-components/native';
import React from 'react';
import WorkspaceHeader from './header';
import { defaultGreyColor } from '../../constants/theme';

const Workspace = styled.View`
  flex: 1;
  background-color: ${defaultGreyColor};
  padding: 0 20px;
  align-items: center;
`;

const withWorkspace = Component => props => (
  <Workspace>
    <WorkspaceHeader />
    <Component {...props} />
  </Workspace>
);

export default withWorkspace;
