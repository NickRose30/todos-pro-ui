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
import Workspace from './components/workspace';
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

const TODOS = {
  Work: [
    { text: 'todo number 1', id: '1' },
    { text: 'todo number 2', id: '2' },
    { text: 'todo number 3', id: '3' },
    { text: 'todo number 4', id: '4' },
  ],
  'To Purchase': [
    { text: 'todo number a', id: '12' },
    { text: 'todo number b', id: '23' },
    { text: 'todo number c', id: '34' },
    { text: 'todo number d', id: '45' },
  ],
  General: [
    { text: 'one of two todos', id: '10' },
    { text: 'two of two todos', id: '19' },
  ],
};

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
          {TABS.map(({ name }, idx) => (
            <Tab.Screen
              name={name}
              key={idx}
              options={{
                tabBarIcon: () => <Text>T</Text>,
              }}
            >
              {props => (
                <Workspace {...props} todos={TODOS[name]} />
              )}
            </Tab.Screen>
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </BottomSafeArea>
  </React.Fragment>
);

export default App;
