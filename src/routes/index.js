import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../screens/welcome';
import InformPassword from '../screens/password';
import Home from '../screens/home';
import Order from '../screens/order';


const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen 
                    name='Welcome' 
                    component={Welcome} 
                />
                <Stack.Screen 
                    name='InformPassword' 
                    component={InformPassword} 
                />
                <Stack.Screen 
                    name='Home' 
                    component={Home} 
                />
                <Stack.Screen 
                    name='Order' 
                    component={Order} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}