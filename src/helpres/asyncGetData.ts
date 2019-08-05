import AsyncStorage from '@react-native-community/async-storage'

  async function getData():Promise<any>{
   const value:any =  await AsyncStorage.getItem('favorites')
        let result = JSON.parse(value);
        return result;
  }

  export default getData;
