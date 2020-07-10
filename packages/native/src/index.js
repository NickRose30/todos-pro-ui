import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import * as R from 'ramda';
import { Text } from './components/common';
import { SCREEN_NAMES, TABS } from './constants/tabScreens';
import { TODO_TYPES } from './constants/todoTypes';
import TabBar from './components/tabBar';
import Workspace from './components/workspace';
import {
  activeGreyColor,
  defaultGreyColor,
} from './constants/theme';
import useFetch from './helpers/fetch-helper';

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

const App = _ => {
  const [response, loading] = useFetch({
    url: '/v1/todos',
  });
  const data = R.prop('data', response);
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
                      data
                    )}
                    loading={loading}
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

export default App;
