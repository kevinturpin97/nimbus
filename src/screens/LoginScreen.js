import * as React from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase/firebase';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView, View, Text, Image, TextInput, Pressable } from 'react-native';
import { myTheme } from '../../assets/js/theme';

export default function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential;
        console.log('Login successful! ==> ' + user.user.email);
      }).catch(error => {
        console.log(error);
        alert(error.message);
      });
  }

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential;
        console.log(user);
      }).catch(error => {
        console.log(error);
        alert(error.message);
      }
      );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myTheme.colors.background }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../assets/images/logo.png')} style={{ resizeMode: 'contain', height: 250 }} />
        <TextInput
          style={{
            height: 40,
            width: '80%',
            borderColor: colors.border,
            borderWidth: 1,
            marginTop: 20,
            borderRadius: 10,
            paddingLeft: 10,
            color: colors.text,
            backgroundColor: 'rgba(255,255,255,0.1)',
          }}
          placeholder="Adresse e-mail"
          textContentType='adresse@mail.fr'
          keyboardType='email-address'
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor={"rgba(0,0,0,0.5)"}
        />
        <TextInput
          style={{
            height: 40,
            width: '80%',
            borderColor: colors.border,
            borderWidth: 1,
            marginTop: 20,
            borderRadius: 10,
            paddingLeft: 10,
            color: colors.text,
            backgroundColor: 'rgba(255,255,255,0.1)',
          }}
          textContentType="Mot de passe"
          secureTextEntry={true}
          keyboardType="default"
          placeholder="Mot de passe"
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor={"rgba(0,0,0,0.5)"}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
          <Pressable onPress={handleLogin}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Connexion</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
          <Pressable onPress={handleSignup}>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Inscription</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}