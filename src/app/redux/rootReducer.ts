import * as types from './types';

const initialState = {
  valueInput: '',
  showResult: false,
  showError: false,
};

export default function rootReducer(state = initialState, actions) {
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
    default:
      return state;
  }
}