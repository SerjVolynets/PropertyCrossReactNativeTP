import React from 'react' 
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from "react-navigation"
import  store  from './store/index'
import MainPage from './PagesComponents/MainPageComponent/mainPage'
import SearchResultPage from './PagesComponents/SearchResultPageComponent/SearchResultPage'
import CurrentPropertyPage from './PagesComponents/CurrentPropertyPageComponent/CurrentPropertyPage'
import FavoriteListPage from './PagesComponents/FavoriteListComponent/FavoriteListPage'


const AppNavigator = createStackNavigator(
  {
    Home: MainPage,
    SearchPage: SearchResultPage,
    CurrentPage: CurrentPropertyPage,
    FavoriteList: FavoriteListPage,
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <AppContainer />
    </Provider>);
  }
}