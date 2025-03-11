import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

export function FirebaseInitializer({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return <>{children}</>;
}