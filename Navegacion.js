import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GuardarCliente from './Screens/GuardarCliente';
import ListarClientes from './Screens/ListaCliente';

export default function Navegacion() {
  const Stack = createNativeStackNavigator();

  function StackMenu() {
    return (
      <Stack.Navigator initialRouteName="ListaCliente">
        <Stack.Screen name="GuardarCliente" component={GuardarCliente} />
        <Stack.Screen name="ListaCliente" component={ListarClientes} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <StackMenu />
    </NavigationContainer>
  );
}