"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("./types");
exports.addValueInput = (value) => ({
    type: types.ADD_VALUE_INPUT,
    payload: value,
});
exports.onSuccessfulRequest = (responseProperty, foundLocation) => ({
    type: types.ON_SUCCESSFUL_REQUEST,
    payload: {
        responseProperty,
        foundLocation
    }
});
exports.onError = (value) => ({
    type: types.ON_ERROR,
    payload: value,
});
exports.addDataWithCurrentProperty = (value) => ({
    type: types.ADD_DATA_WITH_CURRENT_PROPERTY,
    payload: value
});
function getRequest(stateLocation) {
    return (dispatch) => {
        fetch(`https://api.nestoria.co.uk/api?encoding=json&foo=bar&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=${stateLocation}`)
            .then(response => response.json())
            .then((data) => {
            dispatch(exports.onSuccessfulRequest(data.response.listings, data.response.locations[0].long_title));
        })
            .catch(() => {
            dispatch(exports.onError(stateLocation));
        });
    };
}
exports.getRequest = getRequest;
exports.createFavListFromAsyncStorage = (value) => ({
    type: types.CREATE_FAV_LIST_FROM_ASYNC_STORAGE,
    payload: value
});
//# sourceMappingURL=actions.js.map