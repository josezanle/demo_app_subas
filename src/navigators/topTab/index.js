import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeStack from '../../screens/stacks/homeStack';
import SubastasStack from '../../screens/stacks/subastasStack';
import FavoritosStack from '../../screens/stacks/FavoritosStack';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: {
                width: windowWidth / 3,
                backgroundColor: "white",
            },
            tabBarStyle: {
                backgroundColor: 'white',
                width: windowWidth,
                justifyContent: "space-between"
            },
            tabBarActiveTintColor: "cornflowerblue",
            tabBarInactiveTintColor: "grey"
        }}>
            <Tab.Screen name="HomeStack" component={HomeStack} options={{ tabBarLabel: 'Inicio' }} />
            <Tab.Screen name="SubastasStack" component={SubastasStack} options={{ tabBarLabel: 'Subastas' }} />
            <Tab.Screen name="FavoritosStack" component={FavoritosStack} options={{ tabBarLabel: 'Favoritos' }} />
        </Tab.Navigator>
    )
}
export default TopTab 