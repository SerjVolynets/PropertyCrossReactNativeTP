import * as types from './types';

export const addValueInput = value => ({
    type: types.ADD_VALUE_INPUT,
    payload: value,
  });

export const onSuccessfulRequest = (responseProperty, foundLocation) => ({
  type: types.ON_SUCCESSFUL_REQUEST,
  payload: {
    responseProperty,
    foundLocation
  }
});

export const onError = (value) => ({
  type: types.ON_ERROR,
  payload: value,
})

export function getRequest(stateLocation) {
  return (dispatch) => {
    fetch(`https://api.nestoria.co.uk/api?encoding=json&foo=bar&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=${stateLocation}`)
      .then(response => response.json())
      .then((data) => {
        dispatch(onSuccessfulRequest(data.response.listings, data.response.locations[0].long_title));
      })
      .catch(() => {
        dispatch(onError(stateLocation));
      });
  };
}