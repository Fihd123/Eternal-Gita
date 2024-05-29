import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, useColorScheme, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './src/Navigation/Drawer';
import Splash from './src/screens/splash';
import {LanguageProvider} from './src/context/LangContext';
import {useNetInfo} from '@react-native-community/netinfo';

const App = () => {
  const [splashVisible, setSplashVisible] = useState(true);
  const netInfo = useNetInfo();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 3000);
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDarkMode ? '#333333' : '#FFFFFF',
    },
    netInfoText: {
      color: isDarkMode ? '#FFFFFF' : '#000000',
    },
    tryAgainButton: {
      marginTop: 10,
      padding: 10,
      borderRadius: 5,
    },
    tryAgainButtonText: {
      color: '#FFFFFF',
    },
  });

  return (
    <LanguageProvider>
      <NavigationContainer>
        {splashVisible ? (
          <Splash />
        ) : netInfo.isConnected ? (
          <Drawer />
        ) : (
          <View style={styles.container}>
            <Text style={styles.netInfoText}>
              Oops! Mobile Network is not Available
            </Text>
            <Pressable style={styles.tryAgainButton}>
              <Text style={styles.tryAgainButtonText}>Try Again Later </Text>
            </Pressable>
          </View>
        )}
      </NavigationContainer>
    </LanguageProvider>
  );
};

export default App;
