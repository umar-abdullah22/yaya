import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { List, Button } from 'react-native-paper';
import { Image } from 'expo-image';
import { styles } from '../../styles/singleWord';
import Header from '../../components/Header'
import Footer from '../../components/Footer';


const SingleWordAccordion = () => {
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
      <Header />
      <Text style={styles.tittleSelectedWord}>Palabra selecionada</Text>
      <View style={styles.breakLine}></View>
      <View
        style={styles.componentacordionlist}>
        <View
          style={styles.acordionCardLayout}
        >
          <List.Accordion
            style={styles.paLaBraTypo1}
            title="Categoría gramatical"
            titleStyle={{}}
            expanded={acordionPalabraSelecionadaIsExpanded}
            onPress={() =>
              setAcordionPalabraSelecionadaIsExpanded(
                !acordionPalabraSelecionadaIsExpanded
              )
            }
          />
          <View style={styles.dropDownBox}>
            <Text style={styles.dropDownText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa
              felis. Nunc at sem ultrices, ullamcorper mauris in, ultricies nunc.
              Praesent bibendum purus placerat ligula mollis dictum. Aliquam tempus
              nulla eget ex euismod auctor. Vivamus ullamcorper faucibus diam sed
              sagittis. Praesent volutpat ipsum id ante consequat posuere. Quisque id
              est vitae erat accumsan ullamcorper nec in velit. Nullam dictum magna
              vel metus vestibulum, tempus tempor massa ornare. Aliquam in elementum
              nunc. Phasellus ac scelerisque urna, vel egestas leo.
            </Text>
          </View>
        </View>
      </View>
      <View
        style={styles.acordionCardLayout}
      >
        <List.Accordion
          style={styles.paLaBraTypo1}
          title="SinÃģnimo y AntÃģnimo"
          titleStyle={{}}
          expanded={acordionPalabraSelecionada1IsExpanded}
          onPress={() =>
            setAcordionPalabraSelecionada1IsExpanded(
              !acordionPalabraSelecionada1IsExpanded
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
          expanded={acordionPalabraSelecionada1IsExpanded}
          onPress={() =>
            setAcordionPalabraSelecionada1IsExpanded(
              !acordionPalabraSelecionada1IsExpanded
            )
          }
        />
      </View>
      <Footer />
    </View>
  );
};

export default SingleWordAccordion;
