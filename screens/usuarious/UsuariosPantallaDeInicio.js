import * as React from 'react';
import { Button as RNEButton } from '@rneui/themed';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Button as RNPButton } from 'react-native-paper';
import { Button } from '@ui-kitten/components';
import { styles } from '../../styles/usuarious';

const UsuariosPantallaDeInicio = () => {
  return (
    <View style={styles.usuariosPantallaDeInicio}>
      <RNEButton
        title="Sobre YAYA"
        radius="5"
        iconPosition="center"
        type="clear"
        color="#000"
        titleStyle={styles.buttonAboutUsBtn}
        containerStyle={styles.buttonAboutUsBtn1}
        buttonStyle={styles.buttonAboutUsBtn2}
      />
      <View style={styles.mainHeaderWithLogo}>
        <View style={[styles.heroLogo, styles.logoLayout]}>
          <View style={[styles.headerLogo, styles.logoLayout]}>
            <View style={[styles.headerLogo, styles.logoLayout]}>
              <Image
                style={[
                  styles.tainosInTheRiver1Icon,
                  styles.tainosInTheRiver1IconPosition,
                ]}
                contentFit="cover"
                source={require('../../assets/tainosintheriver-1.png')}
              />
              <LinearGradient
                style={[
                  styles.mainheaderbackgroundChild,
                  styles.tainosInTheRiver1IconPosition,
                ]}
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
      </View>
      <RNPButton
        style={[styles.buttonpalabras, styles.buttonofertasPosition]}
        mode="contained"
        labelStyle={styles.buttonPalabrasBtn}
        contentStyle={styles.buttonPalabrasBtn1}
      >
        Palabras
      </RNPButton>
      <Button
        style={[styles.buttonofertas, styles.buttonofertasPosition]}
        title="Ofertas Académicas"
        size="medium"
        status="primary"
        appearance="outline"
        color="#237297"
        textStyle={styles.buttonOfertasText}
      >
        Ofertas Académicas
      </Button>
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameItemPosition]} />
        <Text style={[styles.anuncioDeGoogle, styles.frameItemPosition]}>
          Anuncio de Google
        </Text>
      </View>
    </View>
  );
};

export default UsuariosPantallaDeInicio;
