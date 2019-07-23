"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("./types");
const initialState = {
    valueInput: '',
    showResult: false,
    showError: false,
};
function rootReducer(state = initialState, actions) {
    switch (actions.type) {
        case types.ADD_VALUE_INPUT: {
            return Object.assign({}, state, { showResult: false, valueInput: actions.payload });
        }
        case types.ON_SUCCESSFUL_REQUEST: {
            return Object.assign({}, state, { valueInput: '', showResult: true, responseProperty: actions.payload.responseProperty, foundLocation: actions.payload.foundLocation });
        }
        case types.ON_ERROR: {
            return Object.assign({}, state, { showError: true, error: 'Sorry not found ' + actions.payload });
        }
        case types.ADD_DATA_WITH_CURRENT_PROPERTY: {
            const dataOfCurrentProperty2 = {
                key: actions.payload,
                src: state.responseProperty[actions.payload].img_url,
                price: state.responseProperty[actions.payload].price,
                dis: state.responseProperty[actions.payload].summary,
            };
            return Object.assign({}, state, { dataOfCurrentProperty: dataOfCurrentProperty2 });
        }
        default:
            return state;
    }
}
exports.default = rootReducer;
//# sourceMappingURL=rootReducer.js.map