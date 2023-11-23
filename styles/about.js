import { StyleSheet } from 'react-native';
import { FontFamily, Color, FontSize } from '../GlobalStyles';

export const styles = StyleSheet.create({
  rectangleButtonBtn: {
    borderRadius: 3,
    height: '100%',
    width: '100%',
  },
  frameLayout: {
    height: 90,
    width: 348,
    position: 'absolute',
    overflow: 'hidden',
  },
  atrsTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    textAlign: 'left',
    color: Color.colorBlack,
    position: 'absolute',
  },
  logoLayout: {
    height: 34,
    width: 92,
    position: 'absolute',
  },
  frameChild: {
    top: 31,
    backgroundColor: Color.colorDarkslategray,
    height: 59,
    left: 0,
    width: 348,
    position: 'absolute',
  },
  frame: {
    left: 0,
    top: 0,
  },
  googleAdsChild: {
    left: 46,
    backgroundColor: Color.colorGainsboro,
    width: 267,
    height: 40,
    top: 0,
    position: 'absolute',
  },
  anuncioDeGoogle: {
    top: 12,
    fontFamily: FontFamily.interRegular,
    textAlign: 'left',
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    left: 0,
    position: 'absolute',
  },
  frame1: {
    left: 126,
    width: 108,
    height: 27,
    top: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  googleAds: {
    top: 516,
    left: -19,
  },
  bnackground: {
    width: 320,
    height: 220,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  sobreYayaApp: {
    top: 159,
    left: 97,
    fontSize: 18,
  },
  btngobackChild: {
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    position: 'absolute',
  },
  atrs: {
    top: '30.3%',
    left: '22.41%',
    fontSize: FontSize.size_xs,
    fontWeight: '600',
  },
  btngoback: {
    top: 9,
    left: 252,
    width: 58,
    height: 33,
    position: 'absolute',
  },
  image1Icon: {
    left: 0,
    top: 0,
  },
  logo: {
    top: 13,
    left: 9,
  },
  loremIpsumDolor: {
    top: 241,
    left: 27,
    fontSize: 10,
  },
  aboutUs: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 568,
    overflow: 'hidden',
    // marginTop: 100,
  },
});
