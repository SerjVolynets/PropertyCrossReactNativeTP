import * as types from './types';
import setData from '../helpres/asyncSetData'

const initialState = <any>{
  valueInput: '',
  showResult: false,
  showError: false,

};

export default function rootReducer(state = initialState, actions: { type: string; payload: any; }) {
  switch (actions.type) {
    case types.ADD_VALUE_INPUT: {
      return {
        ...state,
      showResult: false,
      valueInput: actions.payload,
      }
    }
    case types.ON_SUCCESSFUL_REQUEST: {
      return {
        ...state,
        valueInput: '',
        showResult: true,
        responseProperty: actions.payload.responseProperty,
        foundLocation: actions.payload.foundLocation,
      }
    }
    case types.ON_ERROR: {
      return {
        ...state,
        showError: true,
        error: 'Sorry not found ' + actions.payload
      }
    }
    case types.ADD_DATA_WITH_CURRENT_PROPERTY: {
      const dataOfCurrentProperty2 = {
        key: state.responseProperty[actions.payload].longitude + actions.payload,
        src: state.responseProperty[actions.payload].img_url,
        price: state.responseProperty[actions.payload].price,
        dis: state.responseProperty[actions.payload].summary,
      };
      return {
        ...state,
        dataOfCurrentProperty: dataOfCurrentProperty2,
      };
    }
    case types.CREATE_FAV_LIST_FROM_ASYNC_STORAGE: {
      return {
        ...state,
        favoritesList: actions.payload || []
      }
    }
    case types.ADD_FAVORITE: {
      let isNotAddedToFavorites = true;
      const newFavorites = state.favoritesList.slice();
      if (state.favoritesList.length < 1) {
        newFavorites.push(state.dataOfCurrentProperty);
      } else {
        newFavorites.forEach(
          (obj: { src: string; }) => {
            if (obj.src === state.dataOfCurrentProperty.src) {
              isNotAddedToFavorites = !isNotAddedToFavorites;
            }
          },
        );
        if (isNotAddedToFavorites) {
          newFavorites.push(state.dataOfCurrentProperty);
        }
      }
      setData(JSON.stringify(newFavorites));
      return {
        ...state,
        favoritesList: newFavorites,
      };
    }
    case types.REMOVE_FAVORITE: {
      let workArr;
      let isTokenObjInLocalStorage = false;
      workArr = state.favoritesList;
      workArr.forEach((obj: { src: string; }) => {
        if (obj.src === state.dataOfCurrentProperty.src) {
          isTokenObjInLocalStorage = !isTokenObjInLocalStorage;
        }
      });
      if (isTokenObjInLocalStorage) {
        workArr = workArr.filter((obj: { src: string; }) => obj.src !== state.dataOfCurrentProperty.src);
      }
      setData(JSON.stringify(workArr));
      return {
        ...state,
        favoritesList: workArr,
      };
    }
    case types.REMOVE_CURRENT_FAVORITE: {
      const newFavorites = state.favoritesList.filter((item: { src: string; }) => item.src !== actions.payload);
      setData(JSON.stringify(newFavorites));
      return {
        ...state,
        favoritesList: newFavorites,
      };
    }
    default:
      return state;
  }
}