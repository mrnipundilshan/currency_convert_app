import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function CurrencyInput({ value, onChange }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Enter amount in LKR"
      keyboardType="numeric"
      value={value}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginVertical: 16,
    fontSize: 16,
  },
});