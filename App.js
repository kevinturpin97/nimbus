import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './src/firebase/firebase';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import * as React from 'react';
import { LogBox } from 'react-native';
import { myTheme } from './assets/js/theme';

LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            console.log(user);
        }
        );
        return unsubscribe;
    }, []);

    return (
        <NavigationContainer theme={myTheme}>
            <Stack.Navigator>
                {isLoggedIn ? (
                    <Stack.Screen name="nimbus" options={{ headerShown: false }} component={HomeScreen} />
                ) : (
                    <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}