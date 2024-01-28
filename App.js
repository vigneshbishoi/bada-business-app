import React from 'react';
import { View } from 'react-native'
import RootComponent from './src/component/RootComponent';
import MainNavigator from './src/navigator/MainNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux'
import store from './src/Redux/store'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <View style={{ flex: 1 }}>
          <PaperProvider>
            <RootComponent>
              <MainNavigator />
            </RootComponent>
          </PaperProvider>
        </View>
      </Provider>
    );
  }
}
