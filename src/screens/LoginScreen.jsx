import { style } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export const LoginScreen = () => {

    const [ onChangeUser, setOnChangeUser] = useState();
    const [ onChangePassword, setOnChangePassword] = useState();
    const [ viewStatus, setViewStatus ] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={{ flex: 1}}>
        <LinearGradient colors={['black', '#004b67']} style={{ flex: 1, paddingTop: 30}}>
          <ScrollView >

              <View style={ styles.containerTitle }>
                <Text style={ styles.titlePage }>Te damos la bienvenida a </Text>
                <Text style={ styles.titleNamePage }>Maternidad Acompañada</Text>
              </View>
              <View style={{display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', paddingTop: 20 }}>
                <Image source={ require('../assets/welcome.png')} style={{ width: 320, height: 250 }}/>
              </View>

              {/* INPUTS SECTION */}

              <View style={{ marginTop: 50, marginHorizontal: 20, marginVertical: 10}}>
                
                <Text style={{ color: 'white', fontWeight: 'bold', marginBottom: 15, fontSize: 20}}>Accede a tu cuenta con email</Text>

                <View>
                  <Text style={{ color: 'white', fontWeight: 'bold'}}>Email</Text>
                  <TextInput
                      style={styles.input}
                      onChangeText={setOnChangeUser}
                      value={onChangeUser}
                      autoComplete={'email'}
                      textContentType={'emailAddress'}
                  />
                </View>

                <View style={{ marginTop: 10}}>
                  <Text style={{ color: 'white', fontWeight: 'bold'}}>Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setOnChangePassword}
                        value={onChangePassword}
                        secureTextEntry={viewStatus}
                        textContentType={'password'}
                        maxLength={15}
                    />
                    <TouchableOpacity style={{ position: 'absolute', right: 10, top: 20}} onPress={() => setViewStatus(!viewStatus)}>
                      <Icon name={viewStatus ?  'eye-off-outline' : 'eye-outline'} size={30} color="white" />
                    </TouchableOpacity>
                </View>


                {/* SOCIAL LOGINS */}
                <View style={ styles.containerSocial }>

                  <Text style={ styles.textRedesSociales }>Ingresa con tus redes sociales</Text>

                  <TouchableOpacity >
                    <View style={{ marginTop: 10}}>
                      <Icon.Button
                        name="mail-outline"
                        backgroundColor="#3b5998"
                        width={200}
                        paddingVertical={10}
                        display='flex'
                        justifyContent='center'
                        onPress={this.loginWithFacebook}
                      >
                        Login con email
                      </Icon.Button>
                    </View>
                  </TouchableOpacity>

                  <View style={{ marginVertical: 10}}>
                    <TouchableOpacity >
                      <Icon.Button
                        name="logo-google"
                        backgroundColor="white"
                        color='black'
                        width={200}
                        paddingVertical={10}
                        display='flex'
                        justifyContent='center'
                        onPress={this.loginWithFacebook}
                      >
                        Login con Google
                      </Icon.Button>
                    </TouchableOpacity>
                  </View>

                </View>

            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 4,
      padding: 5,
      position: 'relative',
      color: 'white'
    },
    textRedesSociales: {
      marginTop: 10, 
      color: 'white', 
      fontWeight: 'bold', 
      textAlign: 'center', 
      width: '100%', 
      textDecorationLine: 'underline', 
      padding: 10
    },
    containerSocial: {
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      margin: 10
    },
    titleNamePage: {
      fontSize: 20, 
      width: '90%', 
      textAlign: 'center',
       marginTop: 5, 
       color: 'white', 
       fontWeight: 'bold'
    },
    titlePage: {
      fontSize: 25, 
      width: '90%', 
      textAlign: 'center',
      marginTop: 20, 
      color: 'white'
    },
    containerTitle: {
      textAlign: 'center', 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
    }
  });
  
