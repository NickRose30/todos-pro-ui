import React from 'react';
import { double } from '@monorepo/common';
import styled from 'styled-components';

const H1 = styled.h1`
  color: blue;
`;

export default _ => (
  <H1>Double 2 is {double(2)}</H1>
);
