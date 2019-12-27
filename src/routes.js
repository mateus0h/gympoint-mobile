import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import CheckIn from './pages/CheckIn';
import HelpOrders from './pages/HelpOrders';
import NewHelpOrder from './pages/NewHelpOrder';
import ResponseHelpOrder from './pages/ResponseHelpOrder';

import Header from './components/Header';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            CheckIn: {
              screen: createStackNavigator(
                {
                  CheckIn,
                },
                {
                  defaultNavigationOptions: navigation => ({
                    headerBackground: <Header {...navigation} />,
                  }),
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="edit-location" size={20} color={tintColor} />
                ),
              },
            },
            HelpOrder: {
              screen: createStackNavigator(
                {
                  HelpOrders,
                  NewHelpOrder,
                  ResponseHelpOrder,
                },
                {
                  defaultNavigationOptions: navigation => ({
                    headerBackground: <Header {...navigation} />,
                  }),
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
          },

          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#FFF',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
