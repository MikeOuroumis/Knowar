import React, {useContext, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '../screens/SplashScreen';
import {AuthContext} from '../store/auth-context';
import {InitialScreens} from '../types/navigation';
import {authenticatedScreens, unauthenticatedScreens} from './navigationConfig';

const Stack = createNativeStackNavigator();

export function Navigation() {
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={InitialScreens.SplashScreen}
        component={SplashScreen}
      />

      {isAuthenticated
        ? authenticatedScreens.map(screen => (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
            />
          ))
        : unauthenticatedScreens.map(screen => (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
            />
          ))}
    </Stack.Navigator>
  );
}
