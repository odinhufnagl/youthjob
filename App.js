import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts, Poppins_500Medium, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold} from "@expo-google-fonts/poppins";
import { Providers } from "./routes/Providers"
export default function App() {
  let [fontsLoaded] = useFonts({

    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  })
  if (fontsLoaded){
  return (

    
      <Providers></Providers>

  );
  }
  return (<View></View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
