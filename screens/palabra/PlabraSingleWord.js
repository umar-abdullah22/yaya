import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/palabra';
import Header from '../../components/Header';
import { Button, List } from 'react-native-paper';
import { Image } from 'expo-image';
import Footer from '../../components/Footer';


const PalabraSingleWord = () => {
  const [
    acordionCardElementSingleWIsExpanded,
    setAcordionCardElementSingleWIsExpanded,
  ] = useState(false);
  const [
    acordionCardElementSingleW1IsExpanded,
    setAcordionCardElementSingleW1IsExpanded,
  ] = useState(false);
  const [
    acordionCardElementSingleW2IsExpanded,
    setAcordionCardElementSingleW2IsExpanded,
  ] = useState(false);
  const [
    acordionCardElementSingleW3IsExpanded,
    setAcordionCardElementSingleW3IsExpanded,
  ] = useState(false);
  const [
    acordionCardElementSingleW4IsExpanded,
    setAcordionCardElementSingleW4IsExpanded,
  ] = useState(false);
  const [
    acordionCardElementSingleW5IsExpanded,
    setAcordionCardElementSingleW5IsExpanded,
  ] = useState(false);

  return (
    <View style={styles.palabraSingleWord}>
      <Header />
      <Text style={styles.tittleSelectedWord}>Tittle Selected Word</Text>
      <View style={styles.breakLine}></View>
      <View style={styles.voiceWord}>
        <View style={styles.pronunciarRow}>
          <Text style={styles.pronunciarStyling}>
            Pronunciar
          </Text>
          <Image
            style={styles.voiceIcon}
            contentFit="cover"
            source={require('../../assets/plabra/voice-3.png')}
          />
        </View>
        <View style={styles.divisionRow}>
          <Text style={styles.divisionStyling}>División Silábica:</Text>
          <Image
            style={styles.voiceIcon}
            contentFit="cover"
            source={require('../../assets/plabra/voice-3.png')}
          />
        </View>
      </View>
      <View
        style={styles.componentacordionlist}>
        <View
          style={styles.acordionCardLayout}
        >
          <List.Accordion
            style={styles.paLaBraTypo1}
            title="SinÃģnimo y AntÃģnimo"
            titleStyle={{}}
            expanded={acordionCardElementSingleWIsExpanded}
            onPress={() =>
              setAcordionCardElementSingleWIsExpanded(
                !acordionCardElementSingleWIsExpanded
              )
            }
          />
        </View>
        <View
          style={styles.acordionCardLayout}
        >
          <List.Accordion
            style={styles.paLaBraTypo1}
            title="Uso coloquial o regional"
            titleStyle={{}}
            expanded={acordionCardElementSingleW1IsExpanded}
            onPress={() =>
              setAcordionCardElementSingleW1IsExpanded(
                !acordionCardElementSingleW1IsExpanded
              )
            }
          />
        </View>
        <View
          style={styles.acordionCardLayout}
        >
          <List.Accordion
            style={styles.paLaBraTypo1}
            title="EtimologÃ­a"
            titleStyle={{}}
            expanded={acordionCardElementSingleW2IsExpanded}
            onPress={() =>
              setAcordionCardElementSingleW2IsExpanded(
                !acordionCardElementSingleW2IsExpanded
              )
            }
          />
        </View>
        <View
          style={styles.acordionCardLayout}
        >
          <List.Accordion
            style={styles.paLaBraTypo1}
            title="Significado connotativo"
            titleStyle={{}}
            expanded={acordionCardElementSingleW3IsExpanded}
            onPress={() =>
              setAcordionCardElementSingleW3IsExpanded(
                !acordionCardElementSingleW3IsExpanded
              )
            }
          />
        </View>
        <View
          style={styles.acordionCardLayout}
        >
          <List.Accordion
            style={styles.paLaBraTypo1}
            title="Significado denotativo"
            titleStyle={{}}
            expanded={acordionCardElementSingleW4IsExpanded}
            onPress={() =>
              setAcordionCardElementSingleW4IsExpanded(
                !acordionCardElementSingleW4IsExpanded
              )
            }
          />
        </View>
        <View
          style={styles.acordionCardLayout}
        >
          <List.Accordion
            style={styles.paLaBraTypo1}
            title="CategorÃ­a gramatical"
            titleStyle={{}}
            expanded={acordionCardElementSingleW5IsExpanded}
            onPress={() =>
              setAcordionCardElementSingleW5IsExpanded(
                !acordionCardElementSingleW5IsExpanded
              )
            }
          />
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default PalabraSingleWord;
