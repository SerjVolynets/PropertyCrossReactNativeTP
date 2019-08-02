import * as types from './types';


const initialState = <any>{
  valueInput: '',
  showResult: false,
  showError: false,

};

export default function rootReducer(state = initialState, actions: { type: any; payload: any; }) {
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
        key: actions.payload,
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
    default:
      return state;
  }
}