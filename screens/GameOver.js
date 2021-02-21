import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors'

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart} color={Colors.accent}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background

  }
});

export default GameOverScreen;