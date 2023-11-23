import * as React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import { styles } from '../../styles/about';
const AboutUs = () => {
  return (
    <View style={styles.aboutUs}>
      <View style={[styles.googleAds, styles.frameLayout]}>
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={styles.frameChild} />
        </View>
        <View style={styles.googleAdsChild} />
        <View style={styles.frame1}>
          <Text style={styles.anuncioDeGoogle}>Anuncio de Google</Text>
        </View>
      </View>
      <View style={styles.bnackground}>
        <Image
          style={styles.bnackground}
          contentFit="cover"
          source={require('../../assets/tainosintheriver-1.png')}
        />
        <Image
          style={styles.bnackground}
          contentFit="cover"
          source={require('../../assets/rectangle-5.png')}
        />
        <Text style={[styles.sobreYayaApp, styles.atrsTypo]}>
          Sobre Yaya App
        </Text>
      </View>
      <View style={styles.btngoback}>
        <Button
          style={styles.btngobackChild}
          mode="outlined"
          btngoback="backscreenbutton"
          contentStyle={styles.rectangleButtonBtn}
        >
          {/* BackButton */}
        </Button>
        <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
      </View>
      <View style={[styles.logo, styles.logoLayout]}>
        <Image
          style={[styles.image1Icon, styles.logoLayout]}
          contentFit="cover"
          source={require('../../assets/logo.png')}
        />
      </View>
      <Text
        style={[styles.loremIpsumDolor, styles.atrsTypo]}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Morbi faucibus ligula non ornare tristique. Aenean ac 
efficitur ante. Integer in lobortis elit. Fusce rhoncus libero 
vitae consectetur accumsan. Aliquam et efficitur sem.

 Nullam pellentesque nulla vitae velit porttitor hendrerit.
 Sed et urna vel quam auctor imperdiet nec sit amet dolor. 
Nunc tincidunt, nisl sed condimentum volutpat, est lorem 
hendrerit elit, ut pulvinar tortor nunc in mauris. Donec a
 magna ligula.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Morbi faucibus ligula non ornare tristique. Aenean ac 
efficitur ante. Integer in lobortis elit. Fusce rhoncus libero 
vitae consectetur accumsan. Aliquam et efficitur sem.

 Nullam pellentesque nulla vitae velit porttitor hendrerit.
 Sed et urna vel quam auctor imperdiet nec sit amet dolor. 
Nunc tincidunt, nisl sed condimentum volutpat, est lorem 
hendrerit elit, ut pulvinar tortor nunc in mauris. Donec a
 magna ligula.`}</Text>
    </View>
  );
};

export default AboutUs;
