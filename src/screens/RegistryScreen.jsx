import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { TextValidationPassword } from '../components/textValidationPassword';
import { InputRegister } from '../components/inputRegister';
import { useValidatorRegister } from '../hooks/useValidatorRegister';


export const RegistryScreen = () => {

  const { passwordText,setPasswordText,newPasswordText,setNewPasswordText,requirementsObject,CheckStatusRequirements, 
          ControlRequirementsStatus,requirementsStatus,statusColorPassword,statusColorEmail,setNewEmailText,setEmailText, setNameText, nameText} = useValidatorRegister();

  useEffect(() => { CheckStatusRequirements(); }, [ newPasswordText, passwordText ]);
  useEffect(() => { ControlRequirementsStatus(); }, [ requirementsObject ]);

  let disabledButtonSend = (!requirementsStatus || nameText === '' || statusColorEmail !== 'green') ? true : false;

  return (
    <SafeAreaView style={{ marginTop: 100}}>
      <View style={{ margin: 20}}>
        <Text style={{ color: 'black'}}>RegistryScreen</Text>

        <InputRegister 
          campoTexto="Nombre" 
          style={ styles.input }   
          autoComplete="name"
          autoFocus={true}
          onChangeText={ name => setNameText(name)}
        />

        <InputRegister 
          campoTexto="Email" 
          style={ styles.input }             
          autoComplete='email' 
          keyboardType='email-address'
          autoCapitalize="none"
          onChangeText={ email => setEmailText(email)}
        />

        <InputRegister 
          campoTexto="Repetir Email" 
          style={{ ...styles.input, borderColor: statusColorEmail }} 
          autoComplete='off' 
          keyboardType='email-address'
          autoCapitalize="none"
          onChangeText={ email => setNewEmailText(email)}
        />
        
        <InputRegister 
          campoTexto="Contraseña" 
          style={styles.input} 
          onChangeText={ text => { setPasswordText(text) }} 
          secureTextEntry={true}
        />

        <InputRegister 
          campoTexto="Repetir Contraseña" 
          style={{ ...styles.input, borderColor: statusColorPassword }} 
          onChangeText={ text =>{ setNewPasswordText(text) }} 
          secureTextEntry={true}
          autoCapitalize="none"
        />
        
        <View style={ styles.containerInputs }>
          <TextValidationPassword Texto="Letra mayúscula" icono={requirementsObject.uppercase} />
          <TextValidationPassword Texto="Letra mínuscula" icono={requirementsObject.lowercase}/>
          <TextValidationPassword Texto="Simbolo" icono={requirementsObject.caracter}/>
          <TextValidationPassword Texto="Longitud 8 a 12" icono={requirementsObject.length}/>
          <TextValidationPassword Texto="Número" icono={requirementsObject.number}/>
          <TextValidationPassword Texto="Coinciden" icono={requirementsObject.samePass}/>
        </View>

        <View style={ styles.buttonContainer }>
          <TouchableOpacity disabled={ disabledButtonSend }>
            <View style={{...styles.boxButton, backgroundColor: disabledButtonSend ? 'grey' : '#004b67'}}>
              <Text style={{ color: 'white', fontWeight: 'bold'}}>Registrarme</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    position: 'relative',
    color: 'black'
  },
  containerInputs: {
    width: '100%', 
    height: 'auto', 
    display: 'flex', 
    flexWrap: 'wrap', 
    flexDirection: 'row'
  },    
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
  buttonContainer: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 20
  }
})