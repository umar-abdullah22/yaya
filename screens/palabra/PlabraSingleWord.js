import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/palabra';
import Header from '../../components/Header';
import { Image } from 'expo-image';
import Footer from '../../components/Footer';
import * as Speech from 'expo-speech';

const PalabraSingleWord = ({ navigation, route }) => {
  const { wordData } = route.params;

  const [expandedSection, setExpandedSection] = useState(null);

  const handleAccordionPress = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const speak = (word) => {
    Speech.speak(word, {
      language: 'es-ES',
    });
  };

  return (
    <View style={styles.palabraSingleWord}>
      <Header navigation={navigation} />
      <Text style={styles.tittleSelectedWord}>{wordData.slug}</Text>
      <View style={styles.breakLine}></View>
      <Text style={styles.redHeading}>{wordData.acf.division_silabica}</Text>
      <View style={styles.voiceWord}>
        {/* <View style={styles.pronunciarRow}>
          <Text style={styles.pronunciarStyling}>Pronunciar</Text>
          <TouchableOpacity onPress={() => speak(wordData.slug)}>
            <Image
              style={styles.voiceIcon}
              contentFit="cover"
              source={require('../../assets/plabra/voice-3.png')}
            />
          </TouchableOpacity>
        </View> */}
        <View style={styles.divisionRow}>
          <Text style={styles.divisionStyling}>División Silábica:</Text>
          <TouchableOpacity
            onPress={() => speak(wordData.acf.division_silabica)}
          >
            <Image
              style={styles.voiceIcon}
              contentFit="cover"
              source={require('../../assets/plabra/voice-3.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.midSection}>
        <ScrollView style={styles.componentacordionlist}>
          {/* <View style={styles.acordionCardLayout}>
            <TouchableOpacity onPress={() => handleAccordionPress('gramatica')}>
              <View style={styles.cardRow}>
                <Text style={styles.cardheading}>Categoría gramatical</Text>
                <Image
                  style={styles.arrowIcon}
                  contentFit="cover"
                  source={
                    expandedSection === 'gramatica'
                      ? require('../../assets/arrowicon.png')
                      : require('../../assets/arrow_invert.png')
                  }
                />
              </View>
              {expandedSection === 'gramatica' && (
                <View style={styles.dropDownBox}>
                  <Text style={styles.dropDownText}>
                    {wordData.acf.categoria_gramatical}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View> */}
          <View style={styles.acordionCardLayout}>
            <TouchableOpacity
              onPress={() => handleAccordionPress('denotativo')}
            >
              <View style={styles.cardRow}>
                <Text style={styles.cardheading}>Significado denotativo</Text>
                <Image
                  style={styles.arrowIcon}
                  contentFit="cover"
                  source={
                    expandedSection === 'denotativo'
                      ? require('../../assets/arrowicon.png')
                      : require('../../assets/arrow_invert.png')
                  }
                />
              </View>
              {expandedSection === 'denotativo' && (
                <View style={styles.dropDownBox}>
                  <Text style={styles.dropDownText}>
                    {wordData.acf.significado_denotativo}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.acordionCardLayout}>
            <TouchableOpacity
              onPress={() => handleAccordionPress('connotativo')}
            >
              <View style={styles.cardRow}>
                <Text style={styles.cardheading}>Significado connotativo</Text>
                <Image
                  style={styles.arrowIcon}
                  contentFit="cover"
                  source={
                    expandedSection === 'connotativo'
                      ? require('../../assets/arrowicon.png')
                      : require('../../assets/arrow_invert.png')
                  }
                />
              </View>
              {expandedSection === 'connotativo' && (
                <View style={styles.dropDownBox}>
                  <Text style={styles.dropDownText}>
                    {wordData.acf.significado_connotativo}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.acordionCardLayout}>
            <TouchableOpacity
              onPress={() => handleAccordionPress('Etimología')}
            >
              <View style={styles.cardRow}>
                <Text style={styles.cardheading}>Etimología</Text>
                <Image
                  style={styles.arrowIcon}
                  contentFit="cover"
                  source={
                    expandedSection === 'Etimología'
                      ? require('../../assets/arrowicon.png')
                      : require('../../assets/arrow_invert.png')
                  }
                />
              </View>
              {expandedSection === 'Etimología' && (
                <View style={styles.dropDownBox}>
                  <Text style={styles.dropDownText}>
                    {wordData.acf.etimologia}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.acordionCardLayout}>
            <TouchableOpacity onPress={() => handleAccordionPress('regional')}>
              <View style={styles.cardRow}>
                <Text style={styles.cardheading}>Uso coloquial o regional</Text>
                <Image
                  style={styles.arrowIcon}
                  contentFit="cover"
                  source={
                    expandedSection === 'regional'
                      ? require('../../assets/arrowicon.png')
                      : require('../../assets/arrow_invert.png')
                  }
                />
              </View>
              {expandedSection === 'regional' && (
                <View style={styles.dropDownBox}>
                  <Text style={styles.dropDownText}>
                    {wordData.acf.uso_coloquial_o_regional}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.acordionCardLayout}>
            <TouchableOpacity onPress={() => handleAccordionPress('Antónimo')}>
              <View style={styles.cardRow}>
                <Text style={styles.cardheading}>Sinónimo y Antónimo</Text>
                <Image
                  style={styles.arrowIcon}
                  contentFit="cover"
                  source={
                    expandedSection === 'Antónimo'
                      ? require('../../assets/arrowicon.png')
                      : require('../../assets/arrow_invert.png')
                  }
                />
              </View>
              {expandedSection === 'Antónimo' && (
                <View style={styles.dropDownBox}>
                  <Text style={styles.dropDownText}>
                    {wordData.acf.sinonimo_y_antonimo}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
};

export default PalabraSingleWord;
