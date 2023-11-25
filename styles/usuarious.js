import { StyleSheet } from 'react-native';
import { FontFamily, Color } from '../GlobalStyles';

export const styles = StyleSheet.create({
  usuariosPantallaDeInicio: {
    backgroundColor: Color.colorWhite,
    maxWidth: 480,
    height: "100%",
    overflow: 'hidden',
    width: '100%',
  },
  mainHeaderWithLogo: {
    // marginTop: 30,
    height: '50%',
  },
  heroImage: {
    height: '100%',
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
  image1Icon: {
    position: 'absolute',
    top: 20,
    left: 10,
    width: 92,
    height: 34,
    zIndex: 2,
  },
  buttonpalabras: {
    marginTop: 40,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 9,
    height: 60,
    backgroundColor: '#083649',
  },
  buttonPalabrasLabel: {
    color: '#fff',
    fontSize: 28,
    marginTop: 11,
    marginBottom: 11,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
    textTransform: 'capitalize',
  },
  buttonPalabrasContent: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  buttonOfertas: {
    marginTop: 20,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 9,
    height: 60,
    backgroundColor: '#237298',
  },
  buttonOfertasLabel: {
    color: '#fff',
    fontSize: 28,
    marginTop: 11,
    marginBottom: 11,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
    textTransform: 'capitalize',
  },
  buttonOfertasContent: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  buttonAboutUsBtn: {
    color: '#000',
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
  buttonAboutUsBtn1: {
    marginTop: 20,
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonAboutUsBtn2: {
  },
  frame: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  frameChild: {
    backgroundColor: '#083649',
    height: 30,
  },
});
