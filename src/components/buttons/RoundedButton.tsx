import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const RoundedButton = (props: any) => {
  return (
    <TouchableOpacity {...props} style={styles.TouchableOpacity}>
      <Text style={styles.Text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = StyleSheet.create({
  TouchableOpacity: {
    width: '100%',
    backgroundColor: '#f3622e',
    elevation: 2,
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
});
