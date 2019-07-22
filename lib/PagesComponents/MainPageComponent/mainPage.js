"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
const actions_1 = require("../../redux/actions");
const style_1 = require("./style");
const searchResultElem_1 = require("../\u0421omponentsAssistants/searchResultElem/searchResultElem");
class MainPage extends React.Component {
    constructor() {
        super(...arguments);
        this.onSearchClick = () => {
            if (this.props.valueInput.length < 1) {
                return;
            }
            this.props.getRequest(this.props.valueInput);
        };
        this.showSearchReasult = () => {
            if (this.props.showResult) {
                return (React.createElement(react_native_1.View, null,
                    React.createElement(react_native_1.Text, { style: style_1.style.textDescriptionStyle }, "Please select a location below:"),
                    React.createElement(searchResultElem_1.default, { name: this.props.foundLocation, onPress: () => this.props.navigation.navigate('SearchPage') })));
            }
            if (this.props.showError) {
                return React.createElement(searchResultElem_1.default, { name: this.props.error, onPress: () => { } });
            }
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: style_1.style.mainContainerStyle },
            React.createElement(react_native_1.View, { style: style_1.style.firstContainerStyle },
                React.createElement(react_native_1.Button, { title: "Favorites", onPress: () => this.props.navigation.navigate('FavoriteList') })),
            React.createElement(react_native_1.View, { style: style_1.style.secondContainerStyle },
                React.createElement(react_native_1.Text, { style: style_1.style.textHeaderStyle }, "Property Cross in UK"),
                React.createElement(react_native_1.Text, { style: style_1.style.textDescriptionStyle }, "Use the form below to search for houses to buy."),
                React.createElement(react_native_1.Text, { style: style_1.style.textDescriptionStyle }, "You can search by place-name or postcode."),
                React.createElement(react_native_1.TextInput, { style: style_1.style.textInputStyle, onChangeText: text => this.props.addValueInput(text), value: this.props.valueInput }),
                React.createElement(react_native_1.Button, { title: "Search", onPress: () => this.onSearchClick() }),
                this.showSearchReasult())));
    }
}
MainPage.navigationOptions = {
    title: 'Property Cross',
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
        responseProperty: state.responseProperty
    };
}
exports.default = react_redux_1.connect(mapStateToProps, {
    addValueInput: actions_1.addValueInput,
    getRequest: actions_1.getRequest
})(MainPage);
//# sourceMappingURL=mainPage.js.map