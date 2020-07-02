import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import { SCREEN_NAMES, TABS } from './screens/tabScreens';

const Workspace = styled.View`
  flex: 1;
  background-color: grey;
  padding: 75px 20px 0 20px;
  border: 3px solid red;
  align-items: center;
`;

const withWorkspace = Component => props => (
  <Workspace>
    <Component {...props} />
  </Workspace>
);

const Tab = createBottomTabNavigator();

const App = _ => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName={SCREEN_NAMES.GENERAL}>
      {TABS.map(({ name, component }, idx) => (
        <Tab.Screen
          name={name}
          component={withWorkspace(component)}
          key={idx}
        />
      ))}
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
