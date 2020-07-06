import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Text } from './components/common';
import {
  SCREEN_NAMES,
  TABS,
} from './navigation/tabScreens';
import TabBar from './components/tabBar';
import withWorkspace from './components/workspace';
import {
  activeGreyColor,
  defaultGreyColor,
} from './constants/theme';

const Tab = createBottomTabNavigator();

const TopSafeArea = styled(SafeAreaView)`
  flex: 0;
  background-color: ${defaultGreyColor};
`;

const BottomSafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${activeGreyColor};
`;

const App = _ => (
  <React.Fragment>
    <TopSafeArea />
    <BottomSafeArea>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={SCREEN_NAMES.GENERAL}
          tabBar={props => <TabBar {...props} />}
        >
          {TABS.map(({ name, component }, idx) => (
            <Tab.Screen
              name={name}
              component={withWorkspace(component)}
              key={idx}
              options={{
                tabBarIcon: () => <Text>T</Text>,
              }}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </BottomSafeArea>
  </React.Fragment>
);

export default App;
