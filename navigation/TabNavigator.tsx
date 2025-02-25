// filepath: /c:/Users/jorge/medicAction/navigation/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../app/(tabs)/index'; // Ajusta la ruta de importación según sea necesario

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* Agrega otras pestañas aquí */}
    </Tab.Navigator>
  );
}