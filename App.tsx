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
  const backgroundStyle = 'flex-1 bg-neutral-300 dark:bg-slate-900';
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        className={backgroundStyle}
      />
      <Home />
    </SafeAreaView>
  );
};

export default App;
