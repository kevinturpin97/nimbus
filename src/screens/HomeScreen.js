import * as React from 'react';
import { FlatList, Modal, Pressable, SafeAreaView, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { auth } from '../firebase/firebase';
import { useNavigation } from '@react-navigation/core';
import Find from './tabs/Search';
import { listTrajet as DATA } from "../example/example";


const {myTheme} = require('../../assets/js/theme');
const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = React.useState(false);

  const handleSignOut = () => {
    auth.signOut().then('Sign out successful!').catch(error => { alert(error) });
  }

  return (
    <>
      <SafeAreaView style={{backgroundColor: myTheme.colors.primary}}>
        <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }} onPress={() => { setShowMenu(true) }}>
          <Text style={{ color: myTheme.colors.textLight, fontSize: 20, fontWeight: 'bold' }}>Mon compte</Text>
        </Pressable>
        <Modal animationType="slide" transparent={true} visible={showMenu}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }} onPress={handleSignOut}>
              <Text style={{ color: myTheme.colors.text, fontSize: 20, fontWeight: 'bold' }} onPress={handleSignOut}>Déconnexion</Text>
            </Pressable>
          </View>
        </Modal>
      </SafeAreaView>
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#499CDE', tabBarStyle: [{display: 'flex', borderTopWidth: 0, backgroundColor: myTheme.colors.tab}, null] }}>
        <Tab.Screen options={{ headerShown: false }} name="Rechercher" component={() => <Find />} />
        <Tab.Screen options={{ headerShown: false }} name="Trajet" component={() => <Trajet />} />
      </Tab.Navigator>
    </>
  );
}

function Trajet() 
{
  return (
    <View style={{ flex: 1, backgroundColor: myTheme.colors.secondary }}>
        <React.Suspense fallback={'fol pas té i charge mm le nafair!'}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Card item={item} />}
                keyExtractor={item => item.id}
            />
        </React.Suspense>
    </View>
);
}

function Card(props)
{
  const { item } = props;
  return (
    <View style={{ flex: 1, backgroundColor: myTheme.colors.primary, margin: 10, borderRadius: 10, elevation: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <Text style={{ color: myTheme.colors.textLight, fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
        <Text style={{ color: myTheme.colors.textLight, fontSize: 20, fontWeight: 'bold' }}>{item.price}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <Text style={{ color: myTheme.colors.textLight, fontSize: 20, fontWeight: 'bold' }}>{item.date}</Text>
        <Text style={{ color: myTheme.colors.textLight, fontSize: 20, fontWeight: 'bold' }}>{item.time}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <Text style={{ color: myTheme.colors.textLight, fontSize: 20, fontWeight: 'bold' }}>{item.place}</Text>
        <Text style={{ color: myTheme.colors.textLight, fontSize: 20, fontWeight: 'bold' }}>{item.place}</Text>
      </View>
    </View>
  );
}