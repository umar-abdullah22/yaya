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
    top: 24,
    left: "4%",
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
    fontSize: 22,
    marginTop: 16,
    marginBottom: 16,
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
    fontSize: 22,
    marginTop: 16,
    marginBottom: 16,
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
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
  buttonAboutUsBtn1: {
    marginTop: 20,
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
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
