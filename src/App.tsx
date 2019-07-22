import * as React from 'react' 
import { Provider } from 'react-redux'
import { createAppContainer } from "react-navigation"
import  store  from './store/index'
import { AppNavigator } from './navigation/createStackNavigator'

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <AppContainer />
    </Provider>);
  }
}