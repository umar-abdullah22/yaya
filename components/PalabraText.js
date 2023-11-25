import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PalabraText = ({ style }) => {
  return <Text style={[styles.palabra, style]}>{`Palabra `}</Text>;
};

const styles = StyleSheet.create({
  palabra: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    color: Color.colorBlack,
    textAlign: "left",
    width: 121,
  },
});

export default PalabraText;
