import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {RootNavigator, SCREEN_NAME} from '@navigation';
import {useStorage} from '@hooks';

const App = () => {
  const [result] = useStorage('lastLogin');
  const initialRoute = result ? SCREEN_NAME.HOME : SCREEN_NAME.LOGIN;

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <RootNavigator initialRoute={initialRoute} />
    </SafeAreaProvider>
  );
};

export default App;
