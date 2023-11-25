import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { List, Button } from 'react-native-paper';
import { Image } from 'expo-image';
import { styles } from '../../styles/singleWord';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SingleWordAccordion = ({ navigation }) => {
  const [
    acordionPalabraSelecionadaIsExpanded,
    setAcordionPalabraSelecionadaIsExpanded,
  ] = useState(false);
  const [
    acordionPalabraSelecionada1IsExpanded,
    setAcordionPalabraSelecionada1IsExpanded,
  ] = useState(false);

  return (
    <View style={styles.singleWordAccordion}>
      <Header navigation={navigation} />
      <Text style={styles.tittleSelectedWord}>Palabra selecionada</Text>
      <View style={styles.breakLine}></View>
      <View style={styles.midSection}>
        <ScrollView style={styles.componentacordionlist}>
          <View style={styles.componentacordionlist}>
            <View style={styles.acordionCardLayout}>
              <View
                style={styles.paLaBraTypo1}
                expanded={acordionPalabraSelecionadaIsExpanded}
                onPress={() =>
                  setAcordionPalabraSelecionadaIsExpanded(
                    !acordionPalabraSelecionadaIsExpanded
                  )
                }
              >
                <Text>Categoría gramatical</Text>
              </View>
              <View style={styles.dropDownBox}>
                <Text style={styles.dropDownText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  non massa felis. Nunc at sem ultrices, ullamcorper mauris in,
                  ultricies nunc. Praesent bibendum purus placerat ligula mollis
                  dictum. Aliquam tempus nulla eget ex euismod auctor. Vivamus
                  ullamcorper faucibus diam sed sagittis. Praesent volutpat
                  ipsum id ante consequat posuere. Quisque id est vitae erat
                  accumsan ullamcorper nec in velit. Nullam dictum magna vel
                  metus vestibulum, tempus tempor massa ornare. Aliquam in
                  elementum nunc. Phasellus ac scelerisque urna, vel egestas
                  leo.
                </Text>
              </View>
            </View>
            <View style={styles.acordionCardLayout}>
              <View
                style={styles.paLaBraTypo1}
                expanded={acordionPalabraSelecionadaIsExpanded}
                onPress={() =>
                  setAcordionPalabraSelecionadaIsExpanded(
                    !acordionPalabraSelecionadaIsExpanded
                  )
                }
              >
                <Text>Categoría gramatical</Text>
              </View>
              <View style={styles.dropDownBox}>
                <Text style={styles.dropDownText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  non massa felis. Nunc at sem ultrices, ullamcorper mauris in,
                  ultricies nunc. Praesent bibendum purus placerat ligula mollis
                  dictum. Aliquam tempus nulla eget ex euismod auctor. Vivamus
                  ullamcorper faucibus diam sed sagittis. Praesent volutpat
                  ipsum id ante consequat posuere. Quisque id est vitae erat
                  accumsan ullamcorper nec in velit. Nullam dictum magna vel
                  metus vestibulum, tempus tempor massa ornare. Aliquam in
                  elementum nunc. Phasellus ac scelerisque urna, vel egestas
                  leo.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.acordionCardLayout}>
            <View
              style={styles.paLaBraTypo1}
              expanded={acordionPalabraSelecionada1IsExpanded}
              onPress={() =>
                setAcordionPalabraSelecionada1IsExpanded(
                  !acordionPalabraSelecionada1IsExpanded
                )
              }
            >
              <Text>SinÃģnimo y AntÃģnimo</Text>
            </View>
          </View>
          <View style={styles.acordionCardLayout}>
            <View
              style={styles.paLaBraTypo1}
              expanded={acordionPalabraSelecionada1IsExpanded}
              onPress={() =>
                setAcordionPalabraSelecionada1IsExpanded(
                  !acordionPalabraSelecionada1IsExpanded
                )
              }
            >
              <Text>Significado denotativo</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
};

export default SingleWordAccordion;
