import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, TextInput, Button, Linking, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './login';
import Register from './register';
import Porto from './porto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Porto" component={Porto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}