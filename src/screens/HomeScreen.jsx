import React from 'react'
import { View, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'
import { BoxSection } from '../components/boxSection';
import { dataSection } from '../data/dataSections';

export const HomeScreen = () => {

  const windows = useWindowDimensions();

  return (
    <View style={ style.containerGlobal }>
      <ScrollView horizontal={true} contentContainerStyle={{ marginHorizontal: 0, paddingHorizontal: 0, width: '100%'}}>
        <ScrollView horizontal={false} contentContainerStyle={{ marginHorizontal: 0, paddingHorizontal: 0, width: '100%'}} showsVerticalScrollIndicator={false}>


          {/* CATEGORIAS */}
          <View style={ style.flatUbication }>
            {
              dataSection.map((item,index) => 
              <BoxSection data={item} key={index}/>
              )
            }
          </View>

        </ScrollView>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    marginVertical: 10
  },
  containerData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
    marginVertical: 20
  },
  flatUbication: {
    flex: 1,
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
})
