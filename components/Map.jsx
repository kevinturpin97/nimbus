import { useState } from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_API_KEY = "AIzaSyBkHf3nZnoQRD1i-0GCsrlDxPhJ9aw4KVU";
const { width, height } = Dimensions.get('window');
//-21.03743326387649, 55.944924973860786

export default function Map(props)
{
    const [mapView, setMapView] = useState(null);
    const [region, setRegion] = useState({
        latitude: -21.2,
        longitude: 55.56,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
    });
    const [listMarkers, setListMarkers] = useState([]);
    const [search, setSearch] = useState('');
    const [result, setResult] = useState(null);
    const [destination, setDestination] = useState(props.destination);


    return (
        <MapView
        ref={(mapView) => { setMapView(mapView); }}
            initialRegion={region}
            style={{ width: '100%', height: '100%', backgroundColor: 'red', alignSelf: 'center', marginTop: '20%' }}
            onPress={(e) => {
                if (e.nativeEvent.action === "marker-press") {
                    console.log(e.nativeEvent);
                } else {
                    if (listMarkers.length < 2) {
                        setListMarkers([...listMarkers, {
                            id: listMarkers.length + 1,
                            title: "Marker " + (listMarkers.length + 1),
                            description: "Description " + (listMarkers.length + 1),
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude,
                        }]);
                    } else {
                        listMarkers[1] = {
                            id: listMarkers.length,
                            title: "Marker " + (listMarkers.length),
                            description: "Description " + (listMarkers.length),
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude,
                        };
                        setListMarkers([...listMarkers]);
                    }
                }
                return;
            }
            }
            onRegionChange={(e) => setRegion(e)}
            showsUserLocation={true}
        >
            {result !== null && (
                <View>
                    <Text style={{color: 'white'}}>Distance: {result.legs[0].distance.text}</Text>
                <Text style={{color: 'white'}}>Temps: {result.legs[0].duration.text}</Text>
                </View>
            )}
            {listMarkers.length > 0 && listMarkers.map((marker) => (
            <Marker
            key={marker.id}
            title={marker.title}
            description={marker.description}
            style={{top: 0, left: 0}}
            coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
            />
            ))}

            {listMarkers.length > 1 && (
                <MapViewDirections
                origin={listMarkers[0]}
                destination={listMarkers[listMarkers.length - 1]}
                apikey={GOOGLE_API_KEY} // insert your API Key here
                strokeWidth={4}
                strokeColor="#111111"
                onReady={(result) => {
                    console.log(result);
                    console.log(`Distance: ${result.legs[0].distance.text}`);
                    console.log(`Duration: ${result.legs[0].duration.text}.`);
                    setResult(result);
      
                    mapView.fitToCoordinates(result.coordinates, {
                      edgePadding: {
                        right: (width /20),
                        bottom: (height /20),
                        left: (width /20),
                        top: (height /20),
                      }
                    });
                  }}

            />)}
        </MapView>
    );
}