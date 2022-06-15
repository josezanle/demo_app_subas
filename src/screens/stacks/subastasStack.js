import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubastasScreen from '../SubastasScreen';

const Stack = createNativeStackNavigator();

const SubastasStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SubastasScreen" component={SubastasScreen} />
        </Stack.Navigator>
    )
}

export default SubastasStack