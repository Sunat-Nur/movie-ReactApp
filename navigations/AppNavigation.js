import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from "../src/screens/home";
import Detailed from "../src/screens/detailed";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Details"
                component={Detailed}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}

