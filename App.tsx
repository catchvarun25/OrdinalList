import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Main from './src/pages/Main';
import React, { createContext, useState } from 'react';
import 'react-native-devsettings';

import { store } from './src/redux/store';
import { Provider as StoreProvider } from 'react-redux';
import OrdinalDetail from './src/pages/OrdinalDetail';

const Stack = createNativeStackNavigator();

export const ThemeContext = createContext('light')

const App = () => {
  return (
    <StoreProvider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeContext.Provider value={'light'}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Main' >
              <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
              <Stack.Screen name="Detail" component={OrdinalDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeContext.Provider>
      </GestureHandlerRootView >
    </StoreProvider >
  );
}


export default App;
