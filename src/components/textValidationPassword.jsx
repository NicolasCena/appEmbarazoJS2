import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const TextValidationPassword = ({ Texto, icono}) => {
  return (
    <View style={{ width: '50%'}}>
      <View style={ style.validateContainer }>
          <Icon name={icono ? 'checkmark-sharp' : 'close'} color={icono ? 'green' : 'red'} size={25} />
          <Text>{Texto}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    validateContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

