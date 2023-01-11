import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/app/auth/LoginScreen';
import Main from './src/app/Main';
import RegisterScreen from './src/app/auth/RegisterScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="register" component={RegisterScreen} />
          <Stack.Screen name="main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
