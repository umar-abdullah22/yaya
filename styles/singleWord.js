import { StyleSheet } from 'react-native';
import { Color, FontSize, FontFamily } from '../GlobalStyles';

export const styles = StyleSheet.create({

  singleWordAccordion: {
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
  componentacordionlist: {
    marginTop: 8,
    width: '100%',
    overflow: 'scroll',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: -1,
  },
  midSection:{
    height: '53%',
  },
  acordionCardLayout: {
    marginTop: 8,
    minHeight: 35,
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  paLaBraTypo1: {
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
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  dropDownBox: {
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  cardheading: {
    fontSize: 16,
    fontWeight: '600',
  },
  
  dropDownText: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },

});
