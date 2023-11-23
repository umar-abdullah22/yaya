import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import { styles } from '../../styles/academic';

const AcademicOffers = () => {
  return (
    <View style={styles.academicOffers}>
      <Text style={styles.ofertasAcadmicas}>Ofertas Académicas</Text>
      <View style={[styles.publicidad, styles.publicidadLayout]}>
        <View style={[styles.publicidadChild, styles.publicidadLayout]} />
        <ImageBackground
          style={styles.publicidad11}
          resizeMode="cover"
          source={require('../../assets/academic/publicidad11.png')}
        />
        <Text
          style={[styles.conocerMs, styles.conocerMsTypo]}
        >{`Conocer más: `}</Text>
        <Text style={[styles.presionaAqu, styles.frame1Position]}>
          Presiona aquí
        </Text>
      </View>
      <View style={[styles.googleAds, styles.frameLayout]}>
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={styles.frameChild} />
        </View>
        <View style={styles.googleAdsChild} />
        <View style={[styles.frame1, styles.frame1Position]}>
          <Text style={[styles.anuncioDeGoogle, styles.atrsTypo]}>
            Anuncio de Google
          </Text>
        </View>
      </View>
      <View style={styles.headermainsingleword}>
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

export default AcademicOffers;
