import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import React from 'react';
import { View } from 'react-native';
import { AuthProvider } from './src/providers/AuthProvider';
import Routes from './src/routes/Routes';
export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (fontsLoaded) {
    return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
    );
  }
  return <View></View>;
}
