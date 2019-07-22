"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const mainPage_1 = require("../PagesComponents/MainPageComponent/mainPage");
const SearchResultPage_1 = require("../PagesComponents/SearchResultPageComponent/SearchResultPage");
const CurrentPropertyPage_1 = require("../PagesComponents/CurrentPropertyPageComponent/CurrentPropertyPage");
const FavoriteListPage_1 = require("../PagesComponents/FavoriteListComponent/FavoriteListPage");
exports.AppNavigator = react_navigation_1.createStackNavigator({
    Home: mainPage_1.default,
    SearchPage: SearchResultPage_1.default,
    CurrentPage: CurrentPropertyPage_1.default,
    FavoriteList: FavoriteListPage_1.default,
}, {
    initialRouteName: "Home"
});
//# sourceMappingURL=createStackNavigator.js.map