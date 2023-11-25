import * as React from "react";
import { StyleProp, View, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Footer = ({ style }) => {
  return (
    <>
      <View style={styles.mainframeLayout}>
        <View style={styles.frameChild} />
        <View style={styles.mainGoogleAds}>
          <View style={styles.GoogleAdsChild}>
            <Text style={styles.textAnuncioDeGoogle}>Anuncio de Google</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({

  mainframeLayout: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
  frameChild: {
    backgroundColor: '#083649',
    height: 30,
  },
  mainGoogleAds: {
    position: 'absolute',
    top: -30,
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  GoogleAdsChild: {
    backgroundColor: '#d9d9d9',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 250,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAnuncioDeGoogle: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
});

export default Footer;
