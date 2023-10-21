/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Home} from './app/view/screen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'flex-1 bg-dark dark:bg-white';
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#0C0F14' : '#FFFFFF'}
      />
      <Home />
    </SafeAreaView>
  );
};

export default App;
