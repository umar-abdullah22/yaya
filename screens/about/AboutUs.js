import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import { styles } from '../../styles/about';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../../components/Footer';

const AboutUs = ({ navigation }) => {
  return (
    <View style={styles.aboutUs}>
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
            <View style={styles.mainNavBar}>
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
                    onPress={() => navigation.goBack()}
                  >
                    {/* BackButton */}
                    <Text style={styles.atrsBtn}>Atrás</Text>
                  </Button>
                </View>
              </View>
              <View style={styles.titleRow}>
                <Text style={[styles.sobreYayaApp, styles.atrsTypo]}>
                  Sobre Nosotros
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.midSection}>
        <ScrollView style={styles.componentacordionlist}>
          <Text style={styles.aboutText}>
            {`YAYA es una aplicación que surge para apoyar la formación  académica y profundizar el conocimiento de la lengua española, sea materna o no. Con YAYA podrás conocer aspectos fundamentales del español, como los fónicos, ortográficos, léxicos, semánticos y gramaticales. Esta aplicación mejora el uso de la lengua en contextos diversos, además, permite curiosear las palabras, motor principal del pensamiento complejo.

La lengua materna está enlazada con la identidad cultural, con el conocimiento del mundo y permite que podamos perfilar los modos de conectar con otras lenguas a través del dominio del léxico y sus distintas variantes. 

La lengua española es muy dinámica y diversa. Tiene una larga trayectoria que viajó en barcos por muchos mares y océanos para legarnos 23 academias que se encargan de investigar, recoger usos particulares e identificar las formas en que sus ciudadanos se comunican. 

 YAYA tiene como objetivo contribuir con el fortalecimiento de la lengua española en todos sus usos y vertientes a nivel mundial. Su aplicación general es un aporte a la educación y al aprendizaje, como motores imprescindibles en la formación del ser pensante.

Su ideóloga es Rita Díaz Blanco, doctora en Mundo Hispánico, línea de morfosintaxis del español dominicano, de la Universidad de León, España. Es docente de la UASD y del ISFODOSU. Tiene maestría en Ciencias de la Educación (Universidad Abierta para Adultos), en Lingüística Aplicada (Universidad Autónoma de Santo Domingo) y Lexicografía Hispánica (Real Academia Española y la Universidad de León). Directora del Instituto Lingüístico Dominicano, miembro correspondiente de la Academia Dominicana de la Lengua y del Instituto Guzmán Ariza de Lexicografía (IGALEX).`}
          </Text>
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
};

export default AboutUs;
