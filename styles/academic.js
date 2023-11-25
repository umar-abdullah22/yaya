import { StyleSheet } from 'react-native';
import { FontSize, FontFamily, Color } from '../GlobalStyles';

export const styles = StyleSheet.create({
  academicOffers: {
    backgroundColor: '#fff',
    maxWidth: 480,
    height: "100%",
    overflow: 'hidden',
    width: '100%',
  },
  tittleSelectedWord: {
    marginTop: 8,
    fontSize: 26,
    textAlign: 'center',
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
  },


  mainAcademicContainer: {
    marginTop: 9,
    width: '85%',
    height: 202,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  academicImage: {
    height: '100%',
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
});
