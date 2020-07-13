import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import * as R from 'ramda';
import { useStore, actions } from '@todos-pro/common';
import { Text } from './common';
import {
  SCREEN_NAMES,
  TABS,
} from '../constants/tabScreens';
import { TODO_TYPES } from '../constants/todoTypes';
import TabBar from './tabBar';
import Workspace from './workspace';
import {
  activeGreyColor,
  defaultGreyColor,
} from '../constants/theme';

const Tab = createBottomTabNavigator();

const getTodosByType = R.curry((type, todos) =>
  R.compose(
    R.filter(R.propEq('type', type)),
    R.defaultTo([])
  )(todos)
);

const TopSafeArea = styled(SafeAreaView)`
  flex: 0;
  background-color: ${defaultGreyColor};
`;

const BottomSafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${activeGreyColor};
`;

const Main = _ => {
  const { state, dispatch } = useStore();
  const { todos } = state;

  useEffect(() => {
    dispatch(actions.fetchAllTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
                  <Workspace
                    {...props}
                    todos={getTodosByType(
                      TODO_TYPES[name],
                      todos
                    )}
                  />
                )}
              </Tab.Screen>
            ))}
          </Tab.Navigator>
        </NavigationContainer>
      </BottomSafeArea>
    </React.Fragment>
  );
};

export default Main;
