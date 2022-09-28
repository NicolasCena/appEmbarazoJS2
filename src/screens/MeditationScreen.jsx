import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
import cinta from '../assets/cinta.mp4'

export const MeditationScreen = () => {
  
  return (
    <SafeAreaView>
            <View style={{ borderColor: 'red', borderWidth: 2}}>

      <ScrollView style={{ width: '100%', height: '100%', backgroundColor: 'blue', borderColor: 'red', borderWidth: 2}}>
        <View>
          <Text>HOLA</Text>
          <Text>HOLA</Text>
        </View>

          <View >
            <Video  
                source={cinta}                  // the video file
                style={styles.backgroundVideo}  // any style you want
                repeat={true}   
                selectedAudioTrack={{
                  type: "title",
                  value: "Dubbing"
                }}
                controls={true}
                posterResizeMode='cover'
                resizeMode='cover'
            />
          </View>
          <View style={{  borderColor: 'red', borderWidth: 2}}>
            <Text>HOLA</Text>
            <Text>HOLA</Text>
            <Text>HOLA</Text>
            <Text>HOLA</Text>
            <Text>HOLA</Text>
            <Text>HOLA</Text>
          </View>
        </ScrollView>
        </View>

    </SafeAreaView>
  )
}



// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: 600, // agregarle el height automatico mas un porcentaje de vista
    borderColor: 'red',
    borderWidth: 2
  },
});