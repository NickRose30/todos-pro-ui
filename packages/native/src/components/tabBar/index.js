import React from 'react';
import * as R from 'ramda';
import styled from 'styled-components/native';
import {
  defaultGreyColor,
  activeGreyColor,
  whiteColor,
} from '../../constants/theme';
import { Text } from '../common';

const Container = styled.View`
  flex-direction: row;
  background-color: ${defaultGreyColor};
  height: 50px;
`;

const Tab = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ active }) =>
    active ? defaultGreyColor : activeGreyColor};
  flex-direction: row;
`;

const TabLabel = styled(Text)`
  ${({ active }) => !active && `color: ${whiteColor};`};
  margin: auto;
`;

const TabBar = ({ state, descriptors, navigation }) => {
  const routeIndex = R.prop('index', state);
  const currentRoute = R.path(
    ['routes', routeIndex, 'key'],
    state
  );
  const currentRouteOptions = R.path(
    [currentRoute, 'options'],
    descriptors
  );
  const { tabBarVisible } = currentRouteOptions;

  if (tabBarVisible === false) return null;
  return (
    <Container>
      {state.routes.map(({ name, key }, index) => {
        const { options } = descriptors[key];
        const {
          tabBarLabel,
          title,
          tabBarTestID,
          tabBarAccessibilityLabel,
        } = options;
        const label = tabBarLabel || title || name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: key,
          });
        };

        return (
          <Tab
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityStates={
              isFocused ? ['selected'] : []
            }
            accessibilityLabel={tabBarAccessibilityLabel}
            testID={tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            active={isFocused}
            key={key}
          >
            <TabLabel active={isFocused}>{label}</TabLabel>
          </Tab>
        );
      })}
    </Container>
  );
};

export default TabBar;
