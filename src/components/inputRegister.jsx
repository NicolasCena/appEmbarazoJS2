import React from 'react';
import { View, Text, TextInput } from 'react-native';

export const InputRegister = ({ campoTexto, style, autoComplete = 'off', autoFocus = 'false' , onChangeText, keyboardType = 'default', autoCapitalize = 'none', secureTextEntry = 'false'  }) => {
  return (
    <View style={{ marginVertical: 10 }}>
        <Text>{campoTexto}</Text>
        <TextInput 
          style={style} 
          autoComplete={autoComplete} 
          autoFocus={autoFocus} 
          onChangeText={onChangeText} 
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

