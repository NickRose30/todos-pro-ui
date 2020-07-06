import React from 'react';
import styled from 'styled-components/native';
// import { themeFont } from '../../constants/theme';

// TODO: load this font in
const Text = styled.Text`
  ${'' /* font-family: ${themeFont}; */}
`;

export default props => <Text {...props} />;
