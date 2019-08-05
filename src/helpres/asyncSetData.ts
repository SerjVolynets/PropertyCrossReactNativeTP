import AsyncStorage from '@react-native-community/async-storage'

  async function setData(value: string):Promise<any>{
    try {
        await AsyncStorage.setItem('favorites', value);
      } catch (error) {
        alert('Sorry ' + error);
      }
  }

export default setData;
