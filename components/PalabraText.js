import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Color } from '../GlobalStyles';

const PalabraText = ({ style, text }) => {
  return <Text style={[styles.palabra, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  palabra: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    color: Color.colorBlack,
    textAlign: 'left',
  },
});

export default PalabraText;
