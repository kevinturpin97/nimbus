import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../firebase/firebase';

export default function HomeScreen() {
  const handleSignOut = () => {
    auth.signOut().then('Sign out successful!').catch(error => {alert(error)});
  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello, World!</Text>
      <Text>You are logged!</Text>
      <Button title="Logout" onPress={handleSignOut} />
    </SafeAreaView>
  );
}