import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/pages/Home';
import {ContextProvider} from './src/context';

const {Screen, Navigator} = createStackNavigator();

export default function MyStack() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Navigator>
          <Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'React Native Context Api',
            }}
          />
        </Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
