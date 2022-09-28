import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { dataImagesGallery } from '../data/dataImagesGallery';
import { GalleryWeek } from '../components/galleryWeek';


export const GalleryScreen = () => {

  // Seteo de variables y estados
  let hola = useRef()
  console.log('HOLA', hola.current)
  let weekActual = 5;
  let arrayWeeks = [];
  const [ actualIndex, setActualIndex] = useState(weekActual-1)
  const [ gallerySelect, setGallerySelect ] = useState(dataImagesGallery[weekActual-1])

  //Generamos un array con numeros para crear el carousel de numeros
  for(var i = 1; i <= weekActual; i++) {
    arrayWeeks.push(i)
  };

  // Detectamos el item activo del carousel
  const updateGallery = (weekSelectioned) => {
    setActualIndex(weekSelectioned)
    setGallerySelect(dataImagesGallery[weekSelectioned]);
  }

  const { width } = Dimensions.get('window');
  const uri = 'https://enfamilia.aeped.es/sites/enfamilia.aeped.es/files/images/articulos/parto.shutterstock_85327459.jpg';
  const dataGallery = dataImagesGallery;

  // Seteo de estilos para el carousel
  

  return (
    <View>
      <Text>GalleryScreen</Text>

      <View style={{ height: 80 }}>
          <Carousel 
              ref={hola}
              data={ arrayWeeks }
              renderItem={ (item) => 
                  <Text style={[style.carouselitem, (actualIndex+1 == item.item) ? style.activeItem : style.inactiveItem]} >{item.item}</Text>
              }
              sliderWidth={ width }
              itemWidth={ 50 }
              enableSnap={ true }
              inactiveSlideScale={1}
              activeSlideAlignment={'center'}
              inactiveSlideOpacity={0.3}
              activeAnimationType={'spring'}
              useScrollView={true}
              onBeforeSnapToItem={ item => updateGallery(item)}
              slideStyle={style.slideStyle}
              firstItem={weekActual-1}
              lockScrollWhileSnapping={true}
          /> 
      </View>

      <View>
        <GalleryWeek data={gallerySelect} firstImage={gallerySelect.imagesCollection[0].url}/>
      </View>

    </View>
  )
}

const style = StyleSheet.create({
  slideStyle: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 'auto',
  },
  carouselitem: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 50,
    height: 30,
    paddingVertical: 3,
    borderRadius: 50,
    marginHorizontal: 5,
    
  },
  activeItem: {
    color: 'black',
  },
  inactiveItem: {
    color: 'green',
  },
})
