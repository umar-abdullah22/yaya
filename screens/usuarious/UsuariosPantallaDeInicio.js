import * as React from 'react';
import { Button as RNEButton } from '@rneui/themed';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Button as RNPButton } from 'react-native-paper';
import { Button } from '@ui-kitten/components';
import { styles } from '../../styles/usuarious';

const UsuariosPantallaDeInicio = ({ navigation }) => {
  const navigateToAboutUs = () => {
    navigation.navigate('AboutUs');
  };

  const navigateToAcademicOffers = () => {
    navigation.navigate('AcademicOffers');
  };

  const navigateToBusquedaDePalabras = () => {
    navigation.navigate('BusquedaDePalabras');
  };

  return (
    <>
      <View style={styles.usuariosPantallaDeInicio}>
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
                colors={['rgba(0, 159, 232, 0.5)', 'rgba(106, 103, 136, 0.5)']}
              />
            </View>
            <Image
              style={styles.image1Icon}
              contentFit="cover"
              source={require('../../assets/logo.png')}
            />
          </View>
        </View>
        <RNPButton
          style={styles.buttonpalabras}
          mode="contained"
          labelStyle={styles.buttonPalabrasLabel}
          contentStyle={styles.buttonPalabrasContent}
          onPress={navigateToBusquedaDePalabras}
        >
          Palabras
        </RNPButton>
        <RNPButton
          style={styles.buttonOfertas}
          mode="contained"
          labelStyle={styles.buttonOfertasLabel}
          contentStyle={styles.buttonOfertasContent}
          onPress={navigateToAcademicOffers}
        >
          Ofertas Académicas
        </RNPButton>
        <RNEButton
          title="Sobre YAYA"
          radius="5"
          type="clear"
          titleStyle={styles.buttonAboutUsBtn}
          containerStyle={styles.buttonAboutUsBtn1}
          buttonStyle={styles.buttonAboutUsBtn2}
          onPress={navigateToAboutUs}
        />
      </View>
      <View style={styles.frame}>
        <View style={styles.frameChild} />
      </View>
    </>
  );
};

export default UsuariosPantallaDeInicio;
