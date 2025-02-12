import {NavigationContainer} from "@react-navigation/native";
import Home from "../src/screens/home";
import Detailed from "../src/screens/detailed";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route}) => ({
                   tabBarIcon: ({ focused, color, size }) => {
                       let iconName;

                       if (route.name === 'Home') {
                           iconName = focused? 'home' : 'home-outline';
                       } else if (route.name === 'Details') {
                           iconName = focused? 'settings' : 'settings-outline';
                       }

                       return (
                           <Ionicons name={iconName} size={size} color={color} />
                       );
                   },
                    tabBarActiveTintColor: 'crimson',
                    tabBarInactiveTintColor: 'black',
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                <Tab.Screen
                    name="Details"
                    component={Detailed}
                    options={{headerShown: false}}
                />
            </Tab.Navigator>
        // </NavigationContainer>
    );
}