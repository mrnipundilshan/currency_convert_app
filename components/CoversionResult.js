import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function ConversionResult({ result }) {
  return (
    <View style={styles.resultContainer}>
      {result !== null && (
        <Text variant="bodyLarge" style={styles.result}>
          USD: ${result}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 16,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
