import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from "../src/screens/home";
import Movie from "../src/screens/movie";

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
                name="Movie"
                component={Movie}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}

