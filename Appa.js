import React, { useEffect, useState } from 'react';
import { Dimensions, Image, LogBox, StyleSheet, View } from 'react-native';
import { useFonts, Roboto_900Black } from '@expo-google-fonts/dev';
import { ActivityIndicator } from '@react-native-material/core';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQuidditch } from '@fortawesome/free-solid-svg-icons';
import GetLocation from 'react-native-get-location';
import Trajet from './pages/Trajet';
import Auth from './pages/Auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getItemAsync, setItemAsync } from 'expo-secure-store';

const { width, height } = Dimensions.get('window');
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const AuthContext = React.createContext();

LogBox.ignoreAllLogs();

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_900Black,
  });
  const [location, setLocation] = useState({});
  const [auth, setAuth] = useState({});

  useEffect(() => {
    (async () => {
      if (!location) {
        try {
          await GetLocation.requestPermissionsAsync();
          const { coords } = await GetLocation.getCurrentPositionAsync({});
          setLocation(coords);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [location]);

  useEffect(() => {
    (async () => {
      if (!auth.token) {
        const user = await getItemAsync('user');
        console.log(user);
        if (user) {
          setAuth(user);
        }
      }
    });
  }, [auth]);

  if (!fontLoaded) {
    return (
      <View style={{ backgroundColor: '#2E223C', height: '100%' }}>
        <ActivityIndicator size={"large"} style={{ margin: 'auto' }} />
      </View>
    );
  } else {
    if (!auth.token) {
      return (
        <Auth />
      );
    } else {
      return (
        <AuthContext.Provider value={auth}>
          <NavigationContainer>
          {auth.token ? (
            <Tab.Navigator>
              <Tab.Screen name="Home" component={Trajet} options={{ headerTitle: '- nimbus -', tabBarLabel: 'Trajet', tabBarLabelStyle: { color: 'black' }, tabBarIcon: () => <FontAwesomeIcon icon={faQuidditch} color={'black'} size={'50%'} /> }} />
            </Tab.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen name="Auth" component={Auth} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </AuthContext.Provider>
      );
    }
  }
}

{/* <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={Accueil} options={{headerTitle: '🚌 nimbus', headerStyle: {backgroundColor: '#003566'}, headerTintColor: '#FFD60A' }} />
<Stack.Screen name="Trip" component={Voyage} options={{headerTitle: 'Voyages disponibles', headerStyle: {backgroundColor: '#003566'}, headerTintColor: '#FFD60A' }} />
<Stack.Screen name="InfoTrip" component={InfoVoyage} options={{headerTitle: 'Voyages disponibles', headerStyle: {backgroundColor: '#003566'}, headerTintColor: '#FFD60A' }} />
<Stack.Screen name="SignIn" component={Connexion} options={{headerTitle: 'Connectez-vous', headerStyle: {backgroundColor: '#003566'}, headerTintColor: '#FFD60A' }} />

</Stack.Navigator>

</NavigationContainer> */}

const styles = StyleSheet.create({
  menuView: {
    top: '10%',
    width: '75%',
    height: '100%',
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});