import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritosScreen from '../favoritosScreen';

const Stack = createNativeStackNavigator();

const FavoritosStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="FavoritosScreen" component={FavoritosScreen} />
      </Stack.Navigator>    
  )
}

export default FavoritosStack