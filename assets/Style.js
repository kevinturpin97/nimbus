import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    textInput: {
        borderColor: 'white',
        width: '75%',
        borderWidth: 1,
        padding: 5,
        margin: 5,
        borderRadius: 5,
        backgroundColor: 'white',
        color: 'black',
        fontSize: 22,
    },
    btn: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    littleBtn: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    containerLogin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 5
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-evenly',
        padding: 5,
        backgroundColor: '#001D3D'
    },
    card:{
        width: 250,
        height: 250,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
      },
    googlePlacesAutocomplete: {
        container: {
          flex: 1,
        },
        textInputContainer: {
          flexDirection: 'row',
        },
        textInput: {
          backgroundColor: '#FFFFFF',
          height: 44,
          borderRadius: 5,
          paddingVertical: 5,
          paddingHorizontal: 10,
          fontSize: 15,
          flex: 1,
        },
        poweredContainer: {
          justifyContent: 'flex-end',
          alignItems: 'center',
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
          borderColor: '#c8c7cc',
          borderTopWidth: 0.5,
        },
        powered: {},
        listView: {
            flex: 1,
            padding: 0,
            textAlign: 'center',
        },
        row: {
          backgroundColor: '#FFFFFF',
          padding: 13,
          height: 44,
          flexDirection: 'row',
        },
        separator: {
          height: 0.5,
          backgroundColor: '#c8c7cc',
        },
        description: {},
        loader: {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          height: 20,
        },
      },
    title: { fontSize: 44, color: 'white', textAlign: "center", marginVertical: 10 },
    view: { width: '100%', alignItems: 'center' },
    logo: { width: '100%', height: '100%' },
});

export default Style;