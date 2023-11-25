import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/palabra';
import { Header } from '../../components/Header';
import { Button, List } from 'react-native-paper';
import { Image } from 'expo-image';


const PalabraSingleWord = () => {
  const [
    acordionCardElementSingleWIsExpanded,
    setAcordionCardElementSingleWIsExpanded,
  ] = useState(true);
  const [
    acordionCardElementSingleW1IsExpanded,
    setAcordionCardElementSingleW1IsExpanded,
  ] = useState(true);
  const [
    acordionCardElementSingleW2IsExpanded,
    setAcordionCardElementSingleW2IsExpanded,
  ] = useState(true);
  const [
    acordionCardElementSingleW3IsExpanded,
    setAcordionCardElementSingleW3IsExpanded,
  ] = useState(true);
  const [
    acordionCardElementSingleW4IsExpanded,
    setAcordionCardElementSingleW4IsExpanded,
  ] = useState(true);
  const [
    acordionCardElementSingleW5IsExpanded,
    setAcordionCardElementSingleW5IsExpanded,
  ] = useState(true);

  return (
    <View style={styles.palabraSingleWord}>
      
      <Header />
      <Text style={styles.tittleSelectedWord}>Tittle Selected Word</Text>
      <View style={styles.palabraSingleWordChild} />
      <Button
        style={styles.btngoback}
        mode="outlined"
        labelStyle={styles.btnGoBackBtn}
        contentStyle={styles.btnGoBackBtn1}
      >
        AtrÃĄs
      </Button>
      <View style={[styles.googleAds, styles.frameLayout]}>
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={styles.frameChild} />
        </View>
        <View style={styles.googleAdsChild} />
        <View style={styles.frame1}>
          <Text style={[styles.anuncioDeGoogle, styles.paLaBraTypo]}>
            Anuncio de Google
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.componentacordionlist,
          styles.headermainsinglewordPosition,
        ]}
      >
        <Image
          style={[styles.backgroundviewIcon, styles.iconLayout3]}
          contentFit="cover"
          source={require('../../assets/plabra/backgroundview.png')}
        />
        <View
          style={[styles.acordionCardElementSingleW, styles.acordionCardLayout]}
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
          style={[
            styles.acordionCardElementSingleW1,
            styles.acordionCardPosition,
          ]}
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
          style={[
            styles.acordionCardElementSingleW2,
            styles.acordionCardPosition,
          ]}
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
          style={[
            styles.acordionCardElementSingleW3,
            styles.acordionCardLayout,
          ]}
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
          style={[
            styles.acordionCardElementSingleW4,
            styles.acordionCardPosition,
          ]}
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
          style={[
            styles.acordionCardElementSingleW5,
            styles.acordionCardPosition,
          ]}
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
      <View style={styles.voiceWord}>
        <View style={styles.talkSilabicWords1}>
          <Text style={[styles.divisinSilbica, styles.paLaBraTypo]}>
            DivisiÃģn SilÃĄbica:
          </Text>
          <Text style={[styles.paLaBra, styles.paLaBraTypo]}>Pa. la. bra.</Text>
          <Image
            style={[styles.voice3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require('../../assets/plabra/voice-3.png')}
          />
        </View>
        <View style={[styles.pronounsno1, styles.iconLayout]}>
          <Text style={[styles.pronunciar, styles.paLaBraTypo]}>
            Pronunciar
          </Text>
          <Image
            style={[styles.voice4Icon, styles.iconLayout]}
            contentFit="cover"
            source={require('../../assets/plabra/voice-3.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default PalabraSingleWord;
