"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const react_navigation_1 = require("react-navigation");
const index_1 = require("./store/index");
const createStackNavigator_1 = require("./navigation/createStackNavigator");
const AppContainer = react_navigation_1.createAppContainer(createStackNavigator_1.AppNavigator);
class App extends React.Component {
    render() {
        return (React.createElement(react_redux_1.Provider, { store: index_1.default },
            React.createElement(AppContainer, null)));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map