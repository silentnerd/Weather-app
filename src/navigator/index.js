import React from 'react';
import { Image } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import Welcome from '../screens/Welcome';
import Weather from '../screens/Weather';
import SearchCities from '../screens/SearchCities';
import { theme } from '../constants';

const screens = createStackNavigator(
  {
    Welcome,
    SearchCities,
    Weather
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 3,
        backgroundColor: theme.colors.white,
        borderBottomColor: 'transparent',
        elevation: 0 // for android
      },
      headerBackImage: (
        <Image source={require('../../assets/icons/back.png')} />
      ),
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: theme.sizes.base,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: theme.sizes.base
      }
    }
  }
);

export default createAppContainer(screens);
