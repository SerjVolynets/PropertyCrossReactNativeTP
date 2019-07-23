"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const react_native_1 = require("react-native");
const listReasultToken_1 = require("../\u0421omponentsAssistants/listResultToken/listReasultToken");
const style_1 = require("./style");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const actions_1 = require("../../redux/actions");
class SearchResultPage extends React.Component {
    constructor() {
        super(...arguments);
        this.renderPart = () => {
            return (this.props.responseProperty.map((obj, index) => (React.createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: () => (this.props.addDataWithCurrentProperty(index), this.props.navigation.navigate('CurrentPage')), key: obj.latitude + index },
                React.createElement(listReasultToken_1.default, { key: obj.longitude + index, src: obj.img_url, name: obj.price, dis: obj.title })))));
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: style_1.style.mainContainer },
            React.createElement(react_native_gesture_handler_1.ScrollView, null, this.renderPart())));
    }
}
SearchResultPage.navigationOptions = {
    title: 'Back to Main Page',
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
exports.default = react_redux_1.connect(mapStateToProps, { addDataWithCurrentProperty: actions_1.addDataWithCurrentProperty
})(SearchResultPage);
//# sourceMappingURL=SearchResultPage.js.map