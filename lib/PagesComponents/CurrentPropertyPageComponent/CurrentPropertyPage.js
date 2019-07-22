"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
const listReasultToken_1 = require("../\u0421omponentsAssistants/listResultToken/listReasultToken");
const style_1 = require("./style");
class CurrentPropertyPage extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: style_1.style.mainContainer },
            React.createElement(listReasultToken_1.default, { key: this.props.dataOfCurrentProperty.key, src: this.props.dataOfCurrentProperty.src, name: this.props.dataOfCurrentProperty.price, dis: this.props.dataOfCurrentProperty.dis }),
            React.createElement(react_native_1.Button, { title: 'Add to Favorite', onPress: () => { } })));
    }
}
CurrentPropertyPage.navigationOptions = {
    title: 'Back to Result List',
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};
function mapStateToProps(state) {
    return {
        valueInput: state.valueInput,
        showResult: state.showResult,
        foundLocation: state.foundLocation,
        favoritesList: state.favoritesList,
        data: state.data,
        error: state.error,
        checkForSearch: state.checkForSearch,
        showError: state.showError,
        responseProperty: state.responseProperty,
        dataOfCurrentProperty: state.dataOfCurrentProperty,
    };
}
exports.default = react_redux_1.connect(mapStateToProps, {})(CurrentPropertyPage);
//# sourceMappingURL=CurrentPropertyPage.js.map