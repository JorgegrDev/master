import { Platform, View } from 'react-native';
import { FC } from 'react';
import './src/config/firebase';
import { FirebaseInitializer } from './components/FirebaseInitializer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <FirebaseInitializer>
        <View style={{ flex: 1 }}>
          {/* Your app content will go here */}
        </View>
      </FirebaseInitializer>
    </SafeAreaProvider>
  );
}

export default App;