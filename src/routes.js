import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import CheckIn from './pages/CheckIn';
import HelpOrders from './pages/HelpOrders';
import NewHelpOrder from './pages/NewHelpOrder';

import Header from './components/Header';

export default (signedIn = false) =>
  createAppContainer(
    createStackNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            CheckIn,
            New: {
              screen: createStackNavigator(
                {
                  HelpOrders,
                  NewHelpOrder,
                },
                {
                  headerLayoutPreset: 'center',
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#000',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: <Icon name="live-help" size={20} color="#999999" />,
              },
            },
          },

          {
            // resetOnBlur: true,

            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#FFF',
                // borderTopColor: '#FFF',
              },
            },
          }
        ),
      },

      {
        initialRouteName: signedIn ? 'App' : 'Sign',
        defaultNavigationOptions: navigation => ({
          headerBackground: <Header {...navigation} />,
          headerStyle: {
            backgroundColor: '#FFF',
          },
        }),
      }
    )
  );
