import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../../styles/palabra';
import Header from '../../components/Header';
import { Button, List } from 'react-native-paper';
import { Image } from 'expo-image';
import Footer from '../../components/Footer';

const PalabraSingleWord = ({ navigation }) => {
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
      <Header navigation={navigation} />
      <Text style={styles.tittleSelectedWord}>Tittle Selected Word</Text>
      <View style={styles.breakLine}></View>
      <View style={styles.voiceWord}>
        <View style={styles.pronunciarRow}>
          <Text style={styles.pronunciarStyling}>Pronunciar</Text>
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
      <View style={styles.midSection}>
        <ScrollView style={styles.componentacordionlist}>
          <View style={styles.acordionCardLayout}>
            <View
              style={styles.paLaBraTypo1}
              expanded={acordionCardElementSingleW5IsExpanded}
              onPress={() =>
                setAcordionCardElementSingleW1IsExpanded(
                  !acordionCardElementSingleW1IsExpanded
                )
              }
            >
              <Text>SinÃģnimo y AntÃģnimo</Text>
            </View>
          </View>
          <View style={styles.acordionCardLayout}>
            <View
              style={styles.paLaBraTypo1}
              expanded={acordionCardElementSingleW5IsExpanded}
              onPress={() =>
                setAcordionCardElementSingleW1IsExpanded(
                  !acordionCardElementSingleW1IsExpanded
                )
              }
            >
              <Text>Uso coloquial o regional</Text>
            </View>
          </View>
          <View style={styles.acordionCardLayout}>
            <View
              style={styles.paLaBraTypo1}
              expanded={acordionCardElementSingleW5IsExpanded}
              onPress={() =>
                setAcordionCardElementSingleW1IsExpanded(
                  !acordionCardElementSingleW1IsExpanded
                )
              }
            >
              <Text>SinÃģnimo y AntÃģnimo</Text>
            </View>
          </View>
          <View style={styles.acordionCardLayout}>
            <View
              style={styles.paLaBraTypo1}
              expanded={acordionCardElementSingleW5IsExpanded}
              onPress={() =>
                setAcordionCardElementSingleW1IsExpanded(
                  !acordionCardElementSingleW1IsExpanded
                )
              }
            >
              <Text>Uso coloquial o regional</Text>
            </View>
          </View>
          <View style={styles.acordionCardLayout}>
            <View
              style={styles.paLaBraTypo1}
              expanded={acordionCardElementSingleW5IsExpanded}
              onPress={() =>
                setAcordionCardElementSingleW1IsExpanded(
                  !acordionCardElementSingleW1IsExpanded
                )
              }
            >
              <Text>SinÃģnimo y AntÃģnimo</Text>
            </View>
          </View>
          <View style={styles.acordionCardLayout}>
            <View
              style={styles.paLaBraTypo1}
              expanded={acordionCardElementSingleW5IsExpanded}
              onPress={() =>
                setAcordionCardElementSingleW1IsExpanded(
                  !acordionCardElementSingleW1IsExpanded
                )
              }
            >
              <Text>Uso coloquial o regional</Text>
            </View>
          </View>
          <View style={styles.acordionCardLayout}>
            <View
              style={styles.paLaBraTypo1}
              expanded={acordionCardElementSingleW5IsExpanded}
              onPress={() =>
                setAcordionCardElementSingleW1IsExpanded(
                  !acordionCardElementSingleW1IsExpanded
                )
              }
            >
              <Text>SinÃģnimo y AntÃģnimo</Text>
            </View>
          </View>
          <View style={styles.acordionCardLayout}>
            <View
              style={styles.paLaBraTypo1}
              expanded={acordionCardElementSingleW5IsExpanded}
              onPress={() =>
                setAcordionCardElementSingleW1IsExpanded(
                  !acordionCardElementSingleW1IsExpanded
                )
              }
            >
              <Text>Uso coloquial o regional</Text>
            </View>
          </View>
          <View style={styles.acordionCardLayout}>
            <View
              style={styles.paLaBraTypo1}
              expanded={acordionCardElementSingleW5IsExpanded}
              onPress={() =>
                setAcordionCardElementSingleW1IsExpanded(
                  !acordionCardElementSingleW1IsExpanded
                )
              }
            >
              <Text>SinÃģnimo y AntÃģnimo</Text>
            </View>
          </View>
          <View style={styles.acordionCardLayout}>
            <View
              style={styles.paLaBraTypo1}
              expanded={acordionCardElementSingleW5IsExpanded}
              onPress={() =>
                setAcordionCardElementSingleW1IsExpanded(
                  !acordionCardElementSingleW1IsExpanded
                )
              }
            >
              <Text>Uso coloquial o regional</Text>
            </View>
          </View>
          <View style={styles.acordionCardLayout}>
            <View
              style={styles.paLaBraTypo1}
              expanded={acordionCardElementSingleW5IsExpanded}
              onPress={() =>
                setAcordionCardElementSingleW1IsExpanded(
                  !acordionCardElementSingleW1IsExpanded
                )
              }
            >
              <Text>SinÃģnimo y AntÃģnimo</Text>
            </View>
          </View>
          <View style={styles.acordionCardLayout}>
            <View
              style={styles.paLaBraTypo1}
              expanded={acordionCardElementSingleW5IsExpanded}
              onPress={() =>
                setAcordionCardElementSingleW1IsExpanded(
                  !acordionCardElementSingleW1IsExpanded
                )
              }
            >
              <Text>Uso coloquial o regional</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
};

export default PalabraSingleWord;
