import {AsyncStorage} from 'react-native';

  async function getData():Promise<any>{
   const value:any =  await AsyncStorage.getItem('favorites ')
        let res = JSON.parse(value);
        return res;
  }

  export default getData;
