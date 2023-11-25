import { StyleSheet } from 'react-native';
import { FontFamily, Color, FontSize } from '../GlobalStyles';

export const styles = StyleSheet.create({
  aboutUs: {
    backgroundColor: '#fff',
    maxWidth: 480,
    height: "100%",
    overflow: 'hidden',
    width: '100%',
  },
  mainHeaderWithLogo: {
    height: "40%",
  },
  heroImage: {
    height: 350,
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
  sobreYayaApp: {
    fontSize: 18,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    color: Color.colorBlack,
  },
  titleRow: {
    marginTop: "54%",
    width: '86%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutText: {
    marginTop: 20,
    marginHorizontal: 30,
    fontSize: 12,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
  },

});
