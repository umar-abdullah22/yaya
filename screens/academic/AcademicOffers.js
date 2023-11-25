import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import { styles } from '../../styles/academic';
import Header from '../../components/Header'
import Footer from '../../components/Footer';



const AcademicOffers = () => {
  return (
    <View style={styles.academicOffers}>
      <Header />
      <Text style={styles.tittleSelectedWord}>Ofertas Académicas</Text>
      <View style={styles.mainAcademicContainer}>
        <ImageBackground
          style={styles.academicImage}
          resizeMode="cover"
          source={require('../../assets/academic/publicidad11.png')}
        />
        <View style={styles.academicText}>
          <Text
          style={styles.conocerMsText}
        >{`Conocer más: `}</Text>
        <Text style={styles.presionaAqu}>
          Presiona aquí
        </Text>
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default AcademicOffers;
