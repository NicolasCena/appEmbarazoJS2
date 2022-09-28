import React from 'react'
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';




export const BoxSection = ({data}) => {

    // I destruct the data
    const { title, page, informationSection} = data;

    // I set the variable for the label image
    let imageForSection = require('../assets/meditationMaternity.png');

    // I use navigation hook
    let navigation = useNavigation();

    // I assign the URL image of each image to each label
    if(title === 'Meditation'){
        imageForSection = require('../assets/meditationMaternity.png');
    }else if(title === 'Tips'){
        imageForSection = require('../assets/tipsMaternity.png');
    }else if(title === 'Gallery'){
        imageForSection = require('../assets/galleryMaternity.png');
    }else if(title === 'My diary'){
        imageForSection = require('../assets/mydiary.png');
    }else{
        imageForSection = require('../assets/saveChildMaternity.png');
    }


  return (
    <View style={style.container}>
        <View style={ style.intoBox }>
            <Image source={ imageForSection } style={{ ...style.positionImage, width: 100, height: 100}} />
            <LinearGradient colors={['#a1c4fd', '#c2e9fb']} style={style.containerGradient}>
                <View style={ style.textsContainer }>
                    <TouchableOpacity style={ style.textTitle} onPress={() => navigation.navigate(page)}>
                        <Text >{title}</Text>
                    </TouchableOpacity>
                    <Text style={ style.textDescription }>{informationSection}</Text>
                </View>
            </LinearGradient>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        height: 110,
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        position: 'relative',
        borderColor: 'black',
    },
    intoBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    positionImage: {
        position: 'absolute',
        top: -20,
        left: 0,
        marginLeft: 10,
        zIndex: 1050
    },
    textDescription: {
        width: '100%',
        color: 'black',
        ...Platform.select({
            android: {
                fontWeight: 'bold'
            }
        })
    },
    textTitle: {
        width: '100%',
        color: 'black',
        ...Platform.select({
            ios: {
                fontWeight: 'bold'
             },
            android: { 
                fontFamily: 'Roboto-Bold'
            }
        })
    },
    textsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 110,
        width: '50%',
        marginLeft: 140,
    },
    containerGradient: {
        borderRadius: 14,
        height: 110,
        width: '100%',
    }
})

