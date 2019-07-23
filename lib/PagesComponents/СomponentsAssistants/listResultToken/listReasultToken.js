"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const style_1 = require("./style");
exports.default = (props) => (React.createElement(react_native_1.View, null,
    React.createElement(react_native_1.View, { style: style_1.style.mainContainer },
        React.createElement(react_native_1.Image, { style: { width: 300, height: 300 }, source: { uri: props.src } }),
        React.createElement(react_native_1.Text, { style: style_1.style.textDescriptionStyle },
            "\u00A3",
            props.name,
            ' '),
        React.createElement(react_native_1.Text, { style: style_1.style.textDescriptionStyle }, props.dis))));
//# sourceMappingURL=listReasultToken.js.map