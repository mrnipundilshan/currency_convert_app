import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function ConvertButton({ onPress }) {
  return (
    <Button mode="outlined" onPress={onPress} style={styles.button}>
      Convert
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 8,
  },
});