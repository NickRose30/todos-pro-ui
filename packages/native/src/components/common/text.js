import React from 'react';
import styled from 'styled-components/native';
import { defaultDarkGreyColor } from '../../constants/theme';
// import { themeFont } from '../../constants/theme';

// TODO: load this font in
const Text = styled.Text`
  ${'' /* font-family: ${themeFont}; */}
  color: ${defaultDarkGreyColor};
`;

export default props => <Text {...props} />;
