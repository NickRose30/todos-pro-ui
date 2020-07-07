import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text } from '../common';

const HeaderContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

const Title = styled(Text)`
  font-size: 56px;
`;

const SubTitle = styled(Text)`
  font-size: 16px;
  margin-bottom: 3px;
  text-transform: uppercase;
`;

const PageName = styled(Text)`
  font-size: 24px;
  margin-top: 24px;
`;

const InputField = styled.TextInput`
  width: 80%;
  height: 40px;
  font-size: 20px;
  border-bottom-width: 0.5px;
  ${({ center }) => center && 'text-align: center;'}
`;

const WorkspaceHeader = ({ pageName }) => {
  const [textInput, setTextInput] = useState('');

  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>todos</Title>
        <SubTitle>pro</SubTitle>
      </TitleContainer>
      <InputField
        value={textInput}
        onChangeText={setTextInput}
        placeholder="Add a new to-do"
        center={textInput === ''}
      />
      <PageName>{pageName}</PageName>
    </HeaderContainer>
  );
};

export default WorkspaceHeader;
