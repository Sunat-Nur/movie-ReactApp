import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from '../navigations/AppNavigation';
import "../src/styles/global.css"


export default function App() {
    return (
        <NavigationContainer independent={true}>
            <AppNavigation/>
        </NavigationContainer>
    );
}
