import { StyleSheet } from 'react-native';
import { FontSize, FontFamily, Color } from '../GlobalStyles';

export const styles = StyleSheet.create({
  academicOffers: {
    backgroundColor: '#fff',
    maxWidth: 480,
    height: '100%',
    width: '100%',
  },
  tittleSelectedWord: {
    marginTop: 8,
    marginBottom: 5,
    fontSize: 24,
    textAlign: 'center',
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
  },
  mainAcademicContainer: {
    width: '85%',
    maxHeight: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },
  academicImage: {
    height: 202,
    width: '100%',
  },
  academicText: {
    backgroundColor: '#fafafa',
    borderBottomWidth: 3,
    borderColor: '#ddd7d7',
    borderStyle: 'solid',
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 11,
  },
  conocerMsText: {
    color: Color.colorBlack,
    fontSize: 16,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
  },
  presionaAqu: {
    color: 'rgba(0, 141, 206, 0.85)',
    fontSize: 16,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
  },
  scrollView: {
    zIndex: -999,
    marginBottom: 65,
  },

});
