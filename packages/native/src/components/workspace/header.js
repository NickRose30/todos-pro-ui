import React from 'react';
import styled from 'styled-components/native';
import { defaultDarkGreyColor } from '../../constants/theme';
import { Text } from '../common';

const HeaderContainer = styled.View`
  width: 100%;
  height: 95px;
  align-items: center;
  flex-direction: column-reverse;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

const Title = styled(Text)`
  color: ${defaultDarkGreyColor};
  font-size: 56px;
`;

const SubTitle = styled(Text)`
  color: ${defaultDarkGreyColor};
  font-size: 16px;
  margin-bottom: 3px;
`;

const WorkspaceHeader = _ => (
  <HeaderContainer>
    <TitleContainer>
      <Title>todos</Title>
      <SubTitle>PRO</SubTitle>
    </TitleContainer>
  </HeaderContainer>
);

export default WorkspaceHeader;
