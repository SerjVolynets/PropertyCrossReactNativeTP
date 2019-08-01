"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("./types");
const react_native_1 = require("react-native");
// function getData(){
//     AsyncStorage.setItem('storage_Key','hi');
//     AsyncStorage.getItem('storage_Key').then((token:any)=>{
//     let value = token;
//     return value;
//     }) 
// }
function retrieveItem() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const retrievedItem = yield react_native_1.AsyncStorage.getItem('storage_Key');
            // const item = JSON.parse(retrievedItem);
            return retrievedItem;
        }
        catch (error) {
            console.log(error.message);
        }
        return;
    });
}
let test = retrieveItem();
console.log(test);
const initialState = {
    valueInput: '',
    showResult: false,
    showError: false,
    favoritesList: retrieveItem(),
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