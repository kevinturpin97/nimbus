import RNDateTimePicker from "@react-native-community/datetimepicker";
import { setItemAsync } from "expo-secure-store";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View, Text, Button, SafeAreaView, } from "react-native";
import React from "react";
import { myTheme } from "../../../assets/js/theme";


export default function Search() {
    const [departure, setDeparture] = React.useState(null);
    const [destination, setDestination] = React.useState(null);
    const [date, setDate] = React.useState(null);
    const [travel, setTravel] = React.useState(null);

    const handleDeparture = (data) => {
        setDeparture(data);
    }

    const handleDestination = (data) => {
        setDestination(data);
    }

    const handleDate = (event, date) => {
        setDate(date);
    }

    const handleTravel = (data) => {
        setTravel(data);
    }
    
    const handleTime = (event, date) => {
        setTime(date);
    }

    const handleSubmit = () => {
        console.log(departure);
        console.log(destination);
        console.log(date);
        console.log(travel);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Rechercher un trajet</Text>
                <View style={{ flex: 1, width: '80%', alignItems: 'center', justifyContent: 'center' }}>
                    <GooglePlacesAutocomplete
                        placeholder="Départ"
                        onPress={(data, details = null) => {
                            handleDeparture(data);
                        }
                        }
                        query={{
                            key: "AIzaSyBkHf3nZnoQRD1i-0GCsrlDxPhJ9aw4KVU",
                            language: 'fr',
                        }}
                        currentLocation={true}
                        styles={{
                            textInputContainer: {
                                width: '100%',
                                height: 50,
                                backgroundColor: '#fff',
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                borderRadius: 10,
                                borderColor: '#000',
                                marginBottom: 10,
                            },
                            textInput: {
                                width: '100%',
                                height: 50,
                                backgroundColor: '#fff',
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                borderRadius: 10,
                                borderColor: '#000',
                                marginBottom: 10,
                            },
                            listView: {
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#fff',
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                borderRadius: 10,
                                borderColor: '#000',
                                marginBottom: 10,
                            },
                            description: {
                                fontSize: 16,
                                color: '#000',
                                fontWeight: 'bold',
                            },
                            predefinedPlacesDescription: {
                                color: '#1faadb',
                            },
                        }}
                        listViewDisplayed={false}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        currentLocationLabel="Ma position"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        GoogleReverseGeocodingQuery={{
                            key: "AIzaSyBkHf3nZnoQRD1i-0GCsrlDxPhJ9aw4KVU",
                            language: 'fr',
                        }}
                        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                        debounce={200}
                    />
                    <GooglePlacesAutocomplete
                        placeholder="Destination"
                        onPress={(data, details = null) => {
                            handleDestination(data);
                        }
                        }
                        query={{
                            key: "AIzaSyBkHf3nZnoQRD1i-0GCsrlDxPhJ9aw4KVU",
                            language: 'fr',
                        }}
                        currentLocation={true}
                        styles={{
                            textInputContainer: {
                                width: '100%',
                                height: 50,
                                backgroundColor: '#fff',
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                borderRadius: 10,
                                borderColor: '#000',
                                marginBottom: 10,
                            },
                            textInput: {
                                width: '100%',
                                height: 50,
                                backgroundColor: '#fff',
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                borderRadius: 10,
                                borderColor: '#000',
                                marginBottom: 10,
                            },
                            listView: {
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#fff',
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                borderRadius: 10,
                                borderColor: '#000',
                                marginBottom: 10,
                            },
                            description: {
                                fontSize: 16,
                                color: '#000',
                                fontWeight: 'bold',
                            },
                            predefinedPlacesDescription: {
                                color: '#1faadb',
                            },
                        }}
                        listViewDisplayed={false}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        currentLocationLabel="Ma position"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        GoogleReverseGeocodingQuery={{
                            key: "AIzaSyBkHf3nZnoQRD1i-0GCsrlDxPhJ9aw4KVU",
                            language: 'fr',
                        }}
                        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                        debounce={200}
                    />
                    
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 10 }}>
                </View>
            </View>
        </SafeAreaView>

    );
}
const styleGooglePlacesAutocomplete = {
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: myTheme.colors.secondary,
    },
    textInputContainer: {
        width: "100%",
        backgroundColor: myTheme.colors.secondary,
    },
    textInput: {
        width: "100%",
        backgroundColor: myTheme.colors.secondary,
    },
    listView: {
        width: "100%",
        backgroundColor: myTheme.colors.secondary,
    },
    description: {
        fontWeight: "bold",
    },
    predefinedPlacesDescription: {
        color: myTheme.colors.primary,
    },
}
