import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { List, Button } from 'react-native-paper';
import { Image } from 'expo-image';
import { styles } from '../../styles/singleWord';

const SingleWordAccordion = () => {
  const [
    acordionPalabraSelecionadaIsExpanded,
    setAcordionPalabraSelecionadaIsExpanded,
  ] = useState(true);
  const [
    acordionPalabraSelecionada1IsExpanded,
    setAcordionPalabraSelecionada1IsExpanded,
  ] = useState(true);

  return (
    <View style={styles.singleWordAccordion}>
      <Text style={[styles.palabraSelecionada, styles.loremIpsumDolorFlexBox]}>
        Palabra selecionada
      </Text>
      <View style={styles.singleWordAccordionChild} />
      <View style={[styles.acordionPalabraSelecionada, styles.acordionLayout]}>
        <List.Accordion
          style={styles.atrsTypo1}
          title="Categoría gramatical"
          titleStyle={{}}
          expanded={acordionPalabraSelecionadaIsExpanded}
          onPress={() =>
            setAcordionPalabraSelecionadaIsExpanded(
              !acordionPalabraSelecionadaIsExpanded
            )
          }
        />
      </View>
      <View style={[styles.acordionPalabraSelecionada1, styles.acordionLayout]}>
        <List.Accordion
          style={styles.atrsTypo1}
          title="Significado denotativo"
          titleStyle={{}}
          expanded={acordionPalabraSelecionada1IsExpanded}
          onPress={() =>
            setAcordionPalabraSelecionada1IsExpanded(
              !acordionPalabraSelecionada1IsExpanded
            )
          }
        />
      </View>
      <View style={styles.singleWordAccordionItem} />
      <Text style={[styles.loremIpsumDolor, styles.loremIpsumDolorFlexBox]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa
        felis. Nunc at sem ultrices, ullamcorper mauris in, ultricies nunc.
        Praesent bibendum purus placerat ligula mollis dictum. Aliquam tempus
        nulla eget ex euismod auctor. Vivamus ullamcorper faucibus diam sed
        sagittis. Praesent volutpat ipsum id ante consequat posuere. Quisque id
        est vitae erat accumsan ullamcorper nec in velit. Nullam dictum magna
        vel metus vestibulum, tempus tempor massa ornare. Aliquam in elementum
        nunc. Phasellus ac scelerisque urna, vel egestas leo.
      </Text>
      <View style={[styles.googleAds, styles.frameLayout]}>
        <View style={[styles.frame, styles.framePosition]}>
          <View style={styles.frameChild} />
        </View>
        <View style={[styles.googleAdsChild, styles.framePosition]} />
        <View style={[styles.frame1, styles.framePosition]}>
          <Text style={[styles.anuncioDeGoogle, styles.atrsTypo]}>
            Anuncio de Google
          </Text>
        </View>
      </View>
      <View style={[styles.headermainsingleword, styles.framePosition]}>
        <Image
          style={[styles.tainosInTheRiver1Icon, styles.childPosition]}
          contentFit="cover"
          source={require('../../assets/tainosintheriver-1.png')}
        />
        <View
          style={[styles.headermainsinglewordChild, styles.childPosition]}
        />
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require('../../assets/logo.png')}
        />
      </View>
      <View style={styles.btngoback}>
        <Button
          style={styles.childPosition}
          mode="outlined"
          btngoback="backscreenbutton"
          contentStyle={styles.rectangleButtonBtn}
        >
          BackButton
        </Button>
        <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
      </View>
    </View>
  );
};

export default SingleWordAccordion;
