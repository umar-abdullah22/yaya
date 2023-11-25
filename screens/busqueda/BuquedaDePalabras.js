import React, { useState } from 'react';
import { FlatList, View, ScrollView, Text, TextInput } from 'react-native';
import PalabraText5 from '../../components/PalabraText5';
import PalabraText4 from '../../components/PalabraText4';
import PalabraText3 from '../../components/PalabraText3';
import PalabraText2 from '../../components/PalabraText2';
import PalabraText1 from '../../components/PalabraText1';
import PalabraText from '../../components/PalabraText';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import { styles } from '../../styles/busqueda';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../../components/Footer';

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
      <View style={styles.mainHeaderWithLogo}>
        <View style={[styles.heroLogo]}>
          <View style={[styles.heroImageGradient]}>
            <Image
              style={styles.heroImage}
              contentFit="fill"
              source={require('../../assets/tainosintheriver-1.png')}
            />
            <LinearGradient
              style={styles.headerLinearGradient}
              locations={[0, 1]}
              colors={['rgba(0, 159, 232, 0.85)', 'rgba(0, 159, 232, 0.85)']}
            />
            <View
              style={styles.mainNavBar}
            >
              <View style={styles.navManage}>
                <Image
                  style={styles.image1Icon}
                  contentFit="cover"
                  source={require('../../assets/logo.png')}
                />
                <View style={[styles.searchbarLayout]}>
                  <Button
                    style={styles.btngoback}
                    mode="outlined"
                    btngoback="backscreenbutton"
                    contentStyle={styles.rectangleButtonBtn}
                  >
                    {/* BackButton */}
                    <Text style={styles.atrsBtn}>Atrás</Text>
                  </Button>
                </View>
              </View>
              <View style={styles.searchBarRow}>
                <View style={styles.searchbar}>
                  <TextInput
                    style={styles.searchbar1}
                    value={searchBarTextInput}
                    onChangeText={setSearchBarTextInput}
                    placeholder="Escribir palabra..."
                    secureTextEntry={false}
                  />
                </View>
                <View style={styles.searchbuttoncomponent}>
                  <Button
                    style={styles.searchButton}
                    mode="outlined"
                    labelStyle={styles.searchButtonBtn}
                  >
                    Buscar
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View >
      <View
       style={styles.midSection}
       >
        <ScrollView
          style={styles.searchresultcards}
        >
          <View
            style={styles.flatlistLayout}>
            <PalabraText />
          </View>
          <View
            style={styles.flatlistLayout}>
            <PalabraText1 />
          </View>
          <View
            style={styles.flatlistLayout}>
            <PalabraText2 />
          </View>
          <View
            style={styles.flatlistLayout}>
            <PalabraText3 />
          </View>
          <View
            style={styles.flatlistLayout}>
            <PalabraText4 />
          </View>
          <View
            style={styles.flatlistLayout}>
            <PalabraText5 />
          </View>
          <View
            style={styles.flatlistLayout}>
            <PalabraText4 />
          </View>
          <View
            style={styles.flatlistLayout}>
            <PalabraText5 />
          </View>

        </ScrollView>
      </View>
      <Footer />
    </View >
  );
};

export default BusquedaDePalabras;
