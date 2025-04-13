import { Platform } from 'react-native';
import { FC, PropsWithChildren } from 'react';
import './src/config/firebase';
import { FirebaseInitializer } from './components/FirebaseInitializer';

const App: FC = () => {
  return (
    <FirebaseInitializer>
      <>
        {/* ...existing code... */}
      </>
    </FirebaseInitializer>
  );
}

export default App;