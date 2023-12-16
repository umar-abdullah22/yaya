import { StyleSheet } from 'react-native';
import { Color, Border, FontFamily, FontSize } from '../GlobalStyles';

export const styles = StyleSheet.create({
  busquedaDePalabras: {
    backgroundColor: '#f6f6f6',
    maxWidth: 480,
    height: "100%",
    overflow: 'hidden',
    width: '100%',
  },
  mainHeaderWithLogo: {
    height:  350,
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

  searchBarRow: {
    marginTop: 210,
    width: '86%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 19,
  },
  searchbar: {
    width: "72%",
  },
  searchbar1: {
    height: 42,
    color: '#000',
    borderRadius: Border.br_10xs,
    width: '100%',
    backgroundColor: Color.colorWhite,
    paddingLeft: 20,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  searchbuttoncomponent: {
    width: 85,
    height: 42,
  },
  searchButton: {
    height: "100%",
    width: '100%',
    backgroundColor: Color.colorWhite,

  },
  searchButtonBtn: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    textTransform: 'capitalize',
    color: '#000',
    borderRadius: 3,
  },
  midSection:{
    height: '46%',
  },

  flatlistLayout: {
    marginTop: 20,
    maxWidth: 220,
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderWidth: 1,
    borderColor: '#0891CB',
    borderStyle: 'solid',
    backgroundColor: '#FFFDFD',
    borderRadius: Border.br_10xs,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  searchresultcards: {
    backgroundColor: '#f6f6f6',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
