import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './components/Home';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
          <View style={styles.container}>
            <Home />
            <StatusBar style="auto" />
          </View>
        </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
