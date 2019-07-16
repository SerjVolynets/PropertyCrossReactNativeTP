import * as types from './types';

const initialState = {
  valueInput: '',
  showResult: false,
};

export default function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case types.ADD_VALUE_INPUT: {
      return {
        ...state,
      valueInput: actions.payload,
      }
    }
    case types.ON_SUCCESSFUL_REQUEST: {
      return {
        ...state,
        valueInput: '',
        responseProperty: actions.payload.responseProperty,
        foundLocation: actions.payload.foundLocation,
      }
    }
    default:
      return state;
  }
}