import * as React from 'react';
import { Button, Text, View, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase/firebase';

export default function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential;
        console.log('Login successful! ==> ' + user.user.email);
      }).catch(error => {
        console.log(error);
      });
  }

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential;
        console.log(user);
      }).catch(error => {
        console.log(error);
      }
      );
  }

  return (
    <SafeAreaView style={style.container}>
      <Text>Login</Text>
      <View style={{ marginTop: 20, width: '100%' }}>
        <TextInput textContentType='emailAddress' keyboardType='email-address' autoCapitalize={false} style={style.textInput} placeholderTextColor={'grey'} placeholder="Email" onChangeText={setEmail} />
        <TextInput secureTextEntry={true} textContentType='password' style={style.textInput} placeholderTextColor={'grey'} placeholder="Password" onChangeText={setPassword} />
        <Button title="Sign In" onPress={handleLogin} />
        <Button title="Sign Up" onPress={handleSignup} />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  textInput: { backgroundColor: 'white', color: 'black', margin: 5, padding: 5, fontSize: 32 },
  button: { backgroundColor: 'blue', color: 'white', margin: 5, padding: 5, fontSize: 32 }
});