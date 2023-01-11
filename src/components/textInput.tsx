import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const Textinput = (props: any) => {
  return <TextInput {...props} style={styles.TextInput} />;
};

export default Textinput;

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: '#bec0c3',
    width: '100%',
    height: 40,
    fontSize: 17,
    paddingStart: 10,
    borderRadius: 10,
  },
});
