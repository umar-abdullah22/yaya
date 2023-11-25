import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import { styles } from '../../styles/about';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../../components/Footer';

const AboutUs = () => {
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
            <View
              style={styles.mainNavBar}
            >
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
                  >
                    {/* BackButton */}
                    <Text style={styles.atrsBtn}>Atrás</Text>
                  </Button>
                </View>
              </View>
              <View style={styles.titleRow}>
                <Text style={[styles.sobreYayaApp, styles.atrsTypo]}>
                  Sobre Yaya App
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View >
      <View style={styles.midSection}>

        <ScrollView
          style={styles.componentacordionlist}>
          <Text
            style={styles.aboutText}
          >
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
 magna ligula.

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
 magna ligula.`}
          </Text>
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
};

export default AboutUs;
