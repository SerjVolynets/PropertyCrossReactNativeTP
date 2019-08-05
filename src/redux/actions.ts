import * as types from './types';

export const addValueInput = (value: any) => ({
    type: types.ADD_VALUE_INPUT,
    payload: value,
  });

export const onSuccessfulRequest = (responseProperty: any, foundLocation: string) => ({
  type: types.ON_SUCCESSFUL_REQUEST,
  payload: {
    responseProperty,
    foundLocation
  }
});

export const onError = (value: any) => ({
  type: types.ON_ERROR,
  payload: value,
})

export const addDataWithCurrentProperty = (value: any) => ({
  type: types.ADD_DATA_WITH_CURRENT_PROPERTY,
  payload: value
})

export function getRequest(stateLocation: any) {
  return (dispatch: { (arg0: { type: string; payload: { responseProperty: any; foundLocation: any; }; }): void; (arg0: { type: string; payload: any; }): void; }) => {
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

export const createFavListFromAsyncStorage = (value:any) => ({
  type: types.CREATE_FAV_LIST_FROM_ASYNC_STORAGE,
  payload: value
});

export const addToFavorite = () => ({
  type: types.ADD_FAVORITE,
  payload: '',
});

export const deleteFromFavorite = () => ({
  type: types.REMOVE_FAVORITE,
  payload: '',
});

export const removeFavorite = (index: any) => ({
  type: types.REMOVE_CURRENT_FAVORITE,
  payload: index,
});