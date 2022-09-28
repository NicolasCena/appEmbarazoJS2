import React, { useEffect, useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView} from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingScreen } from '../screens/SettingScreen';
import { MyDiaryScreen } from '../screens/MyDiaryScreen';
import { GalleryScreen } from '../screens/GalleryScreen';
import { RecomendationScreen } from '../screens/RecomendationScreen';
import { MeditationScreen } from '../screens/MeditationScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { WelcomeUserScreen } from '../screens/WelcomeUserScreen';


import { TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {

  const isLogin = false;

  return (
    <Drawer.Navigator 
    screenOptions={{
      drawerType: 'front',  // Genera que el fondo quede fijo y no se desplace
      drawerActiveTintColor: 'red', // Color del item seleccionado
      drawerHideStatusBarOnOpen: false, // Cuando abro el menu, esto me puede ocultar o no la barra superior
      overlayColor: 'rgba(0, 0, 0, 0.5)', // Color del fondo al desplegar el menu, el fondo fuera del drawer
      swipeEnabled: true, // gesto para abrir el menu sin deslizar
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: 'transparent',
        shadowOpacity: 0,
        shadowColor: 'white', // oculto el shadow del header
      },
    }}
    drawerContent={ (props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
      <Drawer.Screen name="MyDiaryScreen" component={MyDiaryScreen} />
      <Drawer.Screen name="GalleryScreen" component={GalleryScreen} />
      <Drawer.Screen name="RecomendationScreen" component={RecomendationScreen} />
      <Drawer.Screen name="MeditationScreen" component={MeditationScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }) => {


  const [dataPerson, setDataPerson] = useState({
    imagePersona: '../assets/womenPregnet.jpeg',
    name: 'Luciana Holzmann',
    age: 29,
    weekActually: 2,
    babyBirth: '30/12/2023',
  })

  return (
    <DrawerContentScrollView>


      {/* PERFIL DE EMBARAZADA */}
      <View style={ styles.avatarContainer  }>
        <View>
          <Image source={require('../assets/womenPregnet.jpeg')} style={ styles.dataImagePersonal} />
        </View>
        <View>
          <Text>Nombre: {dataPerson.name}</Text>
          <Text>Age: {dataPerson.age}</Text>
          <Text>Week actually: {dataPerson.weekActually}</Text>
          <Text>Baby birth: {dataPerson.babyBirth}</Text>
        </View>
      </View>


      {/* Opciones de menú */}
      <View style={ styles.menuContainer }>

          <TouchableOpacity 
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('HomeScreen') }
          >
            <Text style={ styles.menuTexto }>Navegacion</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('SettingScreen') }
          >
            <Text style={ styles.menuTexto }>Ajustes</Text>
          </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
    avatarContainer: {
      alignItems: 'center',
      marginTop: 20
    },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 100
    },
    menuContainer: {
      marginVertical: 30,
      marginHorizontal: 50,
    },
    menuBoton: {
      marginVertical: 10
    },
    menuTexto: {
      fontSize: 20
    },  
    dataImagePersonal: {
      width: 140,
      height: 140,
      borderRadius: 100,
      shadowColor: "#000",
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
})