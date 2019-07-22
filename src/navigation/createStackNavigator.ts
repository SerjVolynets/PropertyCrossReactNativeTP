import { createStackNavigator } from "react-navigation";
import MainPage from '../PagesComponents/MainPageComponent/mainPage'
import SearchResultPage from '../PagesComponents/SearchResultPageComponent/SearchResultPage'
import CurrentPropertyPage from '../PagesComponents/CurrentPropertyPageComponent/CurrentPropertyPage'
import FavoriteListPage from '../PagesComponents/FavoriteListComponent/FavoriteListPage'

export  const AppNavigator = createStackNavigator(
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