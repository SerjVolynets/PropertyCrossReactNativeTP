"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const react_native_1 = require("react-native");
const listReasultToken_1 = require("../\u0421omponentsAssistants/listResultToken/listReasultToken");
const style_1 = require("./style");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const actions_1 = require("../../redux/actions");
class FavoriteListPage extends React.Component {
    constructor() {
        super(...arguments);
        this.renderPart = () => {
            return (this.props.favoritesList.map((obj, index) => (React.createElement(react_native_1.View, { key: obj.key + index },
                React.createElement(listReasultToken_1.default, { src: obj.src, name: obj.price, dis: obj.dis }),
                React.createElement(react_native_1.View, { style: style_1.style.buttonStyle },
                    React.createElement(react_native_1.Button, { title: "Delete", onPress: () => this.props.removeFavorite(obj.src), color: "red" }))))));
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: style_1.style.mainContainer },
            React.createElement(react_native_gesture_handler_1.ScrollView, null, this.renderPart())));
    }
}
FavoriteListPage.navigationOptions = {
    title: 'Back to Main Page',
    headerStyle: {
        backgroundColor: '#3D6E91',
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
    },
};
function mapStateToProps(state) {
    return {
        favoritesList: state.favoritesList,
    };
}
exports.default = react_redux_1.connect(mapStateToProps, {
    removeFavorite: actions_1.removeFavorite
})(FavoriteListPage);
//# sourceMappingURL=FavoriteListPage.js.map