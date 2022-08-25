import React, { lazy, Suspense } from "react";
import { Component } from "react";
import { FlatList, Image, Pressable, SafeAreaView, Text, View } from "react-native";
import Style from "../assets/Style";
import userImg from '../assets/user.png';

const DATA = [
    {
        id: "bd7acea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Le Tampon -> Saint-Pierre",
        date: "12/12/2020",
        time: "12:12",
        price: "12.12",
        description: "Trajet de Saint-Pierre à Tampon en passant par l'axe rapide",
        participants: [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "John Doe",
            },
            {
                id: "bd7abeb-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Jane Doe",
            }
        ]
    },
    {
        id: "bd7acea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Le Tampon -> Saint-Pierre",
        date: "12/12/2020",
        time: "12:12",
        price: "12.12",
        description: "Le Tampon -> Saint-Pierre",
        participants: [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "John Doe",
            }
        ]
    },
    {
        id: "bd7acea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Le Tampon -> Saint-Pierre",
        date: "12/12/2020",
        time: "12:12",
        price: "12.12",
        description: "Le Tampon -> Saint-Pierre",
        participants: [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "John Doe",
            }
        ]
    }
];

class Voyage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: DATA,
        };
    }

    Card = ({ item }) => (
        <View style={{ backgroundColor: '#003566', padding: 10, borderRadius: 5, borderColor: '#000814', borderBottomWidth: 1 }}>
            <Text style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>{item.title}</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Image source={userImg} style={{ width: 50, height: 50, paddingHorizontal: 5 }} />
                <View style={{ justifyContent: 'space-between', width: '90%' }}>
                    <Text style={{ color: 'white', fontSize: 14, paddingHorizontal: 5 }}>{item.description}</Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', paddingHorizontal: 5 }}>{item.price}€</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                <Text style={{ color: 'white', fontSize: 14, paddingHorizontal: 5, fontWeight: 'bold' }}>Date de départ</Text>
                <Text style={{ color: 'white', fontSize: 14, paddingHorizontal: 5, fontWeight: 'bold' }}>Heure de départ</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontSize: 14, paddingHorizontal: 5 }}>{item.date}</Text>
                <Text style={{ color: 'white', fontSize: 14, paddingHorizontal: 5 }}>{item.time}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
                <Pressable onPress={() => { alert('Réservé !') }}>
                    <View style={Style.littleBtn}>
                        <Text>Réserver</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => {
                    this.props.navigation.push('InfoTrip', {
                        voyage: {
                            title: item.title,
                            id: item.id,
                            date: item.date,
                            price: item.price,
                            description: item.description,
                            participants: item.participants,
                        }
                    });
                }}>
                    <View style={Style.littleBtn}>
                        <Text>Voir plus</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#001D3D' }}>
                <Suspense fallback={'fol pas té i charge mm le nafair!'}>
                    <FlatList
                        data={DATA}
                        renderItem={this.Card}
                        keyExtractor={(item) => item.id}
                        extraData={this.props.route.params}
                    />
                </Suspense>
            </View>
        );
    }
}

export default Voyage;