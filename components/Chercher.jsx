import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Pressable, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-web";

export default function Chercher({ navigation, route }) {
    <SafeAreaView style={Style.container}>
        <Text style={Style.title}>Let's go!</Text>
        <View style={{ flex: 1, width: '80%' }}>
            <View style={{ flex: 1, maxHeight: '25%' }}>
                <GooglePlacesAutocomplete
                    styles={Style.googlePlacesAutocomplete}
                    textInputProps={{ placeholderTextColor: '#000' }}
                    placeholder="Départ"
                    enableHighAccuracyLocation={true}
                    onPress={(data, details = null) => {
                        console.log(data);
                        console.log(details);
                    }
                    }
                    keyboardShouldPersistTaps="handled"
                    query={{
                        key: "AIzaSyBkHf3nZnoQRD1i-0GCsrlDxPhJ9aw4KVU",
                        language: 'fr',
                    }}
                    currentLocation={true}
                    suppressDefaultStyles={true}
                />
                <GooglePlacesAutocomplete
                    styles={Style.googlePlacesAutocomplete}
                    suppressDefaultStyles={true}
                    placeholder="Arrivée"
                    textInputProps={{ placeholderTextColor: '#000' }}
                    enableHighAccuracyLocation={true}
                    onPress={(data, details = null) => {
                        console.log(data);
                        console.log(details);
                    }
                    }
                    query={{
                        key: "AIzaSyBkHf3nZnoQRD1i-0GCsrlDxPhJ9aw4KVU",
                        language: 'fr',
                    }}
                    currentLocation={true}
                />
            </View>
            <RNDateTimePicker style={{ alignSelf: 'center', width: '75%', marginVertical: 5 }} minimumDate={new Date()} value={new Date()} mode={'datetime'} onChange={(event, date) => {
                console.log(date);
            }
            } />
            <Pressable style={Style.btn} children={<Text style={{ color: 'black', fontSize: 22, textAlign: 'center' }}>Rechercher</Text>} onPress={() => {
                navigation.navigate('Trip');
            }} />
        </View>
    </SafeAreaView>
}