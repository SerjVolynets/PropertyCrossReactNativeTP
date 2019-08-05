"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const style_1 = require("./style");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
exports.default = (props) => (React.createElement(react_native_gesture_handler_1.TouchableOpacity, { style: style_1.style.mainContainerStyle },
    React.createElement(react_native_1.Text, { onPress: props.onPress, style: style_1.style.textFoundCityStyle },
        "  ",
        props.name,
        "  ")));
//# sourceMappingURL=searchResultElem.js.map