"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
const listReasultToken_1 = require("../\u0421omponentsAssistants/listResultToken/listReasultToken");
const style_1 = require("./style");
const actions_1 = require("../../redux/actions");
class CurrentPropertyPage extends React.Component {
    constructor() {
        super(...arguments);
        this.renderPart = () => {
            const isAdded = this.props.favoritesList.some((el) => el.src === this.props.dataOfCurrentProperty.src);
            if (isAdded) {
                return React.createElement(react_native_1.Button, { title: "Delete from Favorites", onPress: () => { this.props.deleteFromFavorite(); }, color: "red" });
            }
            return React.createElement(react_native_1.Button, { title: "Add to Favorites", onPress: () => { this.props.addToFavorite(); } });
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: style_1.style.mainContainer },
            React.createElement(listReasultToken_1.default, { src: this.props.dataOfCurrentProperty.src, name: this.props.dataOfCurrentProperty.price, dis: this.props.dataOfCurrentProperty.dis }),
            this.renderPart()));
    }
}
CurrentPropertyPage.navigationOptions = {
    title: 'Back to Result List',
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
        dataOfCurrentProperty: state.dataOfCurrentProperty,
    };
}
exports.default = react_redux_1.connect(mapStateToProps, {
    addToFavorite: actions_1.addToFavorite,
    deleteFromFavorite: actions_1.deleteFromFavorite
})(CurrentPropertyPage);
//# sourceMappingURL=CurrentPropertyPage.js.map