import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export const GalleryWeek = ({data, firstImage}) => {
  const { imagesCollection, week } = data;
  const [ bigImage, setBigImage ] = useState();

  // Controlamos la renovacion de la imagen grande si hay un cambio de galeria
  useEffect(() =>{
    setBigImage(firstImage)
  }, [data])

  return (
    <View>
      <Text>Semana {week}</Text>
      <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
      <Image source={{uri: bigImage}} style={{ width: '100%', height: 220}} />

      {/* Retornamos las imagenes pequeñas de la galeria */}
      {
        imagesCollection.map((item) => {
          return (
            <TouchableOpacity style={{ width: '33%', height: 120}} key={item.id} onPress={() => setBigImage( item.url )}>
              <Image  source={{uri: item.url}} style={{ width: '100%', height: 120}}/>
            </TouchableOpacity>
          )
        })
      }

      </View>
    </View>
  )
}
