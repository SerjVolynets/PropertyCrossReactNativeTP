import * as types from './types';
import {AsyncStorage} from 'react-native';


// function getData(){
//     AsyncStorage.setItem('storage_Key','hi');
//     AsyncStorage.getItem('storage_Key').then((token:any)=>{
//     let value = token;
//     return value;
//     }) 
// }
async function retrieveItem() {
  try {
    const retrievedItem:any =  await AsyncStorage.getItem('storage_Key');
    // const item = JSON.parse(retrievedItem);
    return retrievedItem;
  } catch (error) {
    console.log(error.message);
  }
  return
}
let test = retrieveItem();
console.log(test);

const initialState = <any>{
  valueInput: '',
  showResult: false,
  showError: false,
  favoritesList: retrieveItem(),
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
    default:
      return state;
  }
}