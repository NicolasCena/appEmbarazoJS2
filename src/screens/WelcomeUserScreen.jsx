import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



export const WelcomeUserScreen = () => {


    const navigation = useNavigation();

  return (
    <SafeAreaView>
        <View>
            <View style={ styles.containerTitle}>
                <Text style={{ ...styles.commonTextTitle,  marginTop: 20, fontSize: 25 }}>Te damos la bienvenida a </Text>
                <Text style={{ ...styles.commonTextTitle, fontSize: 20, marginTop: 5, fontWeight: 'bold'}}>Maternidad Acompañada</Text>
            </View>
            <View style={ styles.containerImage }>
                <Image source={ require('../assets/loginMaternity.png')} style={{ width: 300, height: 250 }}/>
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity style={{ display: 'flex'}} onPress={() => navigation.navigate('LoginScreen')}>
                    <View style={styles.boxButton}>
                        <Text style={{ color: 'white', fontWeight: 'bold'}}>Ya tengo cuenta</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('RegistryScreen')}>
                    <View style={{...styles.boxButton, backgroundColor: '#004b67'}}>
                        <Text style={{ color: 'white', fontWeight: 'bold'}}>Me gustaria registrarme</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    boxButton: {
        backgroundColor: '#00b6d3', 
        display: 'flex', 
        justifyContent: 'center', 
        width: 240, 
        flexDirection: 'row', 
        alignItems: 'center', 
        height: 45, 
        borderRadius: 20,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    containerButtons: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginVertical: 20,
        marginTop: 60
    },
    containerTitle: {
        textAlign: 'center', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    commonTextTitle: {
        width: '90%', 
        textAlign: 'center', 
        color: 'black'
    },
    containerImage: {
        display: 'flex', 
        justifyContent: 'flex-end', 
        width: '100%', 
        alignItems: 'flex-end'
    }
})