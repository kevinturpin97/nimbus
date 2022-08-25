import { setItemAsync } from "expo-secure-store";
import { useState } from "react";
import { Button, TextInput, View, Text, Pressable, StyleSheet } from "react-native";
import Style from "../assets/Style";
import { User } from "../model/User";

const Auth = ({navigation, route}) => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={Style.containerLogin}>
            <Text style={Style.title}>Connexion</Text>
            <View style={Style.view}>
                <TextInput style={Style.textInput} placeholder="Adresse mail" placeholderTextColor={'grey'} onChange={(e) => { setMail(e.nativeEvent.text) }} />
                <TextInput style={Style.textInput} placeholder="Mot de passe" placeholderTextColor={'grey'} onChange={(e) => { setPassword(e.nativeEvent.text) }} />

            </View>
            <View style={Style.view}>
                <Pressable style={Style.btn} children={<Text style={{ color: 'black', fontSize: 22, textAlign: 'center' }}>Se connecter</Text>} onPress={() => {
                    // navigation.push('Accueil');
                    if (mail === 'Admin' && password === 'Admin') {
                        const user = new User(mail, password);
                        setItemAsync('user', JSON.stringify(user));
                    } else {
                        alert('Identifiants incorrects');
                    }
                }} />
                <Pressable style={Style.btn} children={<Text style={{ color: 'black', fontSize: 22, textAlign: 'center' }}>S'inscrire</Text>} onPress={() => {
                    // navigation.navigate('Inscription');
                }} />
            </View>
        </View>
    );
}

export default Auth;