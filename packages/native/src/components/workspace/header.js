import React, { useState } from 'react';
import styled from 'styled-components/native';
import { defaultDarkGreyColor } from '../../constants/theme';
import { Text } from '../common';

const HeaderContainer = styled.View`
  width: 100%;
  align-items: center;
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
  text-transform: uppercase;
`;

const InputField = styled.TextInput`
  width: 80%;
  height: 40px;
  font-size: 20px;
  border-bottom-width: 0.5px;
  ${({ center }) => center && 'text-align: center;'}
`;

const WorkspaceHeader = _ => {
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
    </HeaderContainer>
  );
};

export default WorkspaceHeader;
