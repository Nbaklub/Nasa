import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const UnderlinedInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        {...props}
      />
      <View style={styles.underline} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10
  },
  input: {
    width: '100%',
    paddingBottom: 8,
    paddingLeft: 0,
    paddingTop: 10,
    borderColor: 'transparent'
  },
  underline: {
    height: 2,
    backgroundColor: '#ffa800',
    marginBottom: 15
  }
});

export default UnderlinedInput;
