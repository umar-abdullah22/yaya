import * as React from "react";
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { Button, List } from 'react-native-paper';

const Header = ({ style }) => {
  return (
    <>
      <View style={styles.mainHeaderWithLogo}>
        <View style={[styles.heroLogo]}>
          <View style={[styles.heroImageGradient]}>
            <Image
              style={styles.heroImage}
              contentFit="cover"
              source={require('../assets/tainosintheriver-1.png')}
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
                  source={require('../assets/logo.png')}
                />
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
          </View>
        </View>
      </View >
    </>
  );
};

const styles = StyleSheet.create({

  mainHeaderWithLogo: {
    height: "30%",
    backgroundColor: '#000',
  },
  heroImage: {
    height: 240,
    position: 'relative',
  },
  heroImageGradient: {
    position: 'relative',
  },
  headerLinearGradient: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 1,
  },

  mainNavBar: {
    width: '100%',
    position: 'absolute',
    top: 30,
    left: "5%",
    right: "5%",
    zIndex: 2,

  },
  navManage: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image1Icon: {
    width: 92,
    height: 34,
  },
  btngoback: {
    padding: 0,
    width: 80,
    height: 33,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  atrsBtn: {
    color: '#000',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});

export default Header;
