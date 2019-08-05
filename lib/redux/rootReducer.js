"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("./types");
const asyncSetData_1 = require("../helpres/asyncSetData");
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
                key: state.responseProperty[actions.payload].longitude + actions.payload,
                src: state.responseProperty[actions.payload].img_url,
                price: state.responseProperty[actions.payload].price,
                dis: state.responseProperty[actions.payload].summary,
            };
            return Object.assign({}, state, { dataOfCurrentProperty: dataOfCurrentProperty2 });
        }
        case types.CREATE_FAV_LIST_FROM_ASYNC_STORAGE: {
            return Object.assign({}, state, { favoritesList: actions.payload || [] });
        }
        case types.ADD_FAVORITE: {
            let isNotAddedToFavorites = true;
            const newFavorites = state.favoritesList.slice();
            if (state.favoritesList.length < 1) {
                newFavorites.push(state.dataOfCurrentProperty);
            }
            else {
                newFavorites.forEach((obj) => {
                    if (obj.src === state.dataOfCurrentProperty.src) {
                        isNotAddedToFavorites = !isNotAddedToFavorites;
                    }
                });
                if (isNotAddedToFavorites) {
                    newFavorites.push(state.dataOfCurrentProperty);
                }
            }
            asyncSetData_1.default(JSON.stringify(newFavorites));
            return Object.assign({}, state, { favoritesList: newFavorites });
        }
        case types.REMOVE_FAVORITE: {
            let workArr;
            let isTokenObjInLocalStorage = false;
            workArr = state.favoritesList;
            workArr.forEach((obj) => {
                if (obj.src === state.dataOfCurrentProperty.src) {
                    isTokenObjInLocalStorage = !isTokenObjInLocalStorage;
                }
            });
            if (isTokenObjInLocalStorage) {
                workArr = workArr.filter((obj) => obj.src !== state.dataOfCurrentProperty.src);
            }
            asyncSetData_1.default(JSON.stringify(workArr));
            return Object.assign({}, state, { favoritesList: workArr });
        }
        case types.REMOVE_CURRENT_FAVORITE: {
            const newFavorites = state.favoritesList.filter((item) => item.src !== actions.payload);
            asyncSetData_1.default(JSON.stringify(newFavorites));
            return Object.assign({}, state, { favoritesList: newFavorites });
        }
        default:
            return state;
    }
}
exports.default = rootReducer;
//# sourceMappingURL=rootReducer.js.map