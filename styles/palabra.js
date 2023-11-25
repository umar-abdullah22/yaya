import { StyleSheet } from 'react-native';
import { Color, Border, FontFamily, FontSize } from '../GlobalStyles';

export const styles = StyleSheet.create({
  palabraSingleWord: {
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

  breakLine: {
    width: '30%',
    marginTop: 9,
    marginBottom: 6,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#0A97D1',
  },

  voiceWord: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  pronunciarRow: {
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divisionRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pronunciarStyling: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    color: Color.colorBlack,
  },
  divisionStyling: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    color: Color.colorBlack,
  }, 
  voiceIcon: {
    width: 32,
    height: 28,
  },
  componentacordionlist: {
    marginTop: 8,
    width: '100%',
    height: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: -3,
    
  },
  midSection:{
    height: '44%',
  },
  acordionCardLayout: {
    marginTop: 8,
    minHeight: 35,
    width: 320,
    paddingVertical: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 40,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 3,
    borderColor: '#BCB0B0',
    borderStyle: 'solid',
  },
  paLaBraTypo1: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
  },

});
