import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from '../constants/colors'

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.secondary,
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 7.49,
    shadowOpacity: 0.37,
    elevation: 12,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
