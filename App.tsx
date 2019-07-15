import React from 'react' 
import {
  View,
  Text,
} from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import MainPage from './PagesComponents/MainPageComponent/mainPage'
import SearchResultPage from './PagesComponents/SearchResultPageComponent/SearchResultPage'
import CurrentPropertyPage from './PagesComponents/CurrentPropertyPageComponent/CurrentPropertyPage'

const AppNavigator = createStackNavigator(
  {
    Home: MainPage,
    SearchPage: SearchResultPage,
    CurrentPage: CurrentPropertyPage,
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}