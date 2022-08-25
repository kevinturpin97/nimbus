import { Alert, Pressable, Text, View } from "react-native"
import Style from "../assets/Style";

const InfoVoyage = ({navigation, route}) => {
    const {voyage} = route.params;

    const buyTrip = () => {
        // navigation.navigate('BuyTrip', {voyage: voyage});
        Alert.alert('Confirmation du paiement', 'Voulez-vous vraiment acheter ce voyage?', [
            {text: 'Annuler', onPress: () => Alert.alert('Annulation du paiement', 'Paiement annulé !')},
            {text: 'Confirmer', onPress: () => Alert.alert('Confirmation du paiement', 'Paiement validé !')},
        ]);
    }

    return (
        <View style={Style.container}>
            <Text style={{fontSize: 18, color: 'white'}}>{voyage.title}</Text>
            <Text style={{fontSize: 18, color: 'white'}}>{voyage.date}</Text>
            <Text style={{fontSize: 18, color: 'white'}}>{voyage.time}</Text>
            <Text style={{fontSize: 18, color: 'white'}}>{voyage.price}€</Text>
            <Text style={{fontSize: 18, color: 'white'}}>{voyage.description}</Text>
            <Text style={{fontSize: 18, color: 'white'}}>{voyage.participants.map(p => p.name).join(', ')}</Text>
            <Pressable onPress={buyTrip}>
                <View style={Style.littleBtn}>
                    <Text>Acheter</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default InfoVoyage;