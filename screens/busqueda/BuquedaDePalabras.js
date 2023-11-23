import React, { useState } from 'react';
import { FlatList, View, Text, TextInput } from 'react-native';
import PalabraText5 from '../../components/PalabraText5';
import PalabraText4 from '../../components/PalabraText4';
import PalabraText3 from '../../components/PalabraText3';
import PalabraText2 from '../../components/PalabraText2';
import PalabraText1 from '../../components/PalabraText1';
import PalabraText from '../../components/PalabraText';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import { styles } from '../../styles/busqueda';

const BusquedaDePalabras = () => {
  const [flatlist1Data, setFlatlist1Data] = useState([<PalabraText5 />]);
  const [flatlist2Data, setFlatlist2Data] = useState([<PalabraText4 />]);
  const [flatlist3Data, setFlatlist3Data] = useState([<PalabraText3 />]);
  const [flatlist4Data, setFlatlist4Data] = useState([<PalabraText2 />]);
  const [flatlist5Data, setFlatlist5Data] = useState([<PalabraText1 />]);
  const [flatlist6Data, setFlatlist6Data] = useState([<PalabraText />]);
  const [searchBarTextInput, setSearchBarTextInput] = useState('');

  return (
    <View style={styles.busquedaDePalabras}>
      <View
        style={[styles.searchresultcards, styles.bnackgroundPosition]}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.searchResultCardsScrollViewContent}
      >
        <FlatList
          style={styles.flatlistLayout}
          data={flatlist1Data}
          renderItem={({ item }) => item}
        />
        <FlatList
          style={[styles.flatlist2, styles.flatlistLayout]}
          data={flatlist2Data}
          renderItem={({ item }) => item}
        />
        <FlatList
          style={[styles.flatlist2, styles.flatlistLayout]}
          data={flatlist3Data}
          renderItem={({ item }) => item}
        />
        <FlatList
          style={[styles.flatlist2, styles.flatlistLayout]}
          data={flatlist4Data}
          renderItem={({ item }) => item}
        />
        <FlatList
          style={[styles.flatlist2, styles.flatlistLayout]}
          data={flatlist5Data}
          renderItem={({ item }) => item}
        />
        <FlatList
          style={[styles.flatlist2, styles.flatlistLayout]}
          data={flatlist6Data}
          renderItem={({ item }) => item}
        />
      </View>
      <View style={[styles.googleAds, styles.frameLayout]}>
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={styles.frameChild} />
        </View>
        <View style={styles.googleAdsChild} />
        <View style={styles.frame1}>
          <Text style={styles.anuncioDeGoogle}>Anuncio de Google</Text>
        </View>
      </View>
      <View style={[styles.bnackground, styles.bnackgroundPosition]}>
        <Image
          style={[styles.bnackground, styles.bnackgroundPosition]}
          contentFit="cover"
          source={require('../../assets/tainosintheriver-1.png')}
        />
        <Image
          style={[styles.bnackground, styles.bnackgroundPosition]}
          contentFit="cover"
          source={require('../../assets/rectangle-5.png')}
        />
      </View>
      <View style={[styles.searchbuttoncomponent, styles.searchbarLayout]}>
        <Button
          style={[styles.searchButton, styles.framePosition]}
          mode="outlined"
          labelStyle={styles.searchButtonBtn}
          contentStyle={styles.searchButtonBtn1}
        >
          Buscar
        </Button>
      </View>
      <View style={[styles.searchbar, styles.searchbarLayout]}>
        <TextInput
          style={[styles.searchbar1, styles.searchbar1Position]}
          value={searchBarTextInput}
          onChangeText={setSearchBarTextInput}
          // placeholder="Escribir palabra..."
          secureTextEntry={false}
        />
        <Text style={[styles.escribirPalabra, styles.atrsPosition]}>
          Escribir palabra...
        </Text>
      </View>
      <View style={[styles.btngoback, styles.searchbarLayout]}>
        <Button
          style={styles.searchbar1Position}
          mode="outlined"
          btngoback="backscreenbutton"
          contentStyle={styles.rectangleButtonBtn}
        >
          {/* BackButton */}
        </Button>
        <Text style={[styles.atrs, styles.atrsPosition]}>Atrás</Text>
      </View>
      <View style={[styles.logo, styles.logoLayout]}>
        <Image
          style={[styles.image1Icon, styles.logoLayout]}
          contentFit="cover"
          source={require('../../assets/logo.png')}
        />
      </View>
    </View>
  );
};

export default BusquedaDePalabras;
