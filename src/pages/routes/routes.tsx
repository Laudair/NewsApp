import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './route-param-list';

import Home from './../home';
import Details from './../details';

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  const {Navigator, Screen} = Stack;
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} options={{title: 'News'}} />
        <Screen
          name="Details"
          component={Details}
          options={{title: 'Details'}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
