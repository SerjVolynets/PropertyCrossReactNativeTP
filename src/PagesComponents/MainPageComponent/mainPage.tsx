import * as React from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { addValueInput, getRequest, createFavListFromAsyncStorage } from '../../redux/actions'
import getData from '../../helpres/asyncGetData'
import { style } from './style'
import SearchResult from '../СomponentsAssistants/searchResultElem/searchResultElem'


class MainPage extends React.Component <{valueInput:string, getRequest:any, showResult:boolean, foundLocation:string, navigation:any, showError:boolean, error:string, addValueInput:any, createFavListFromAsyncStorage:any }>{
 
  componentDidMount() {
    getData().then((value)=>{this.props.createFavListFromAsyncStorage(value)});  
  }

  static navigationOptions = {
    title: 'Property Cross',
    headerStyle: {
      backgroundColor: '#3D6E91',
    },
    headerTitleStyle: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
  };

  onSearchClick = () => {
    if (this.props.valueInput.length < 1) {
      return;
    }
    this.props.getRequest(this.props.valueInput)
  };

  showSearchReasult = () => {
    if(this.props.showResult) {
      return (
      <View>
          <Text style={style.textDescriptionStyle}>Please select a location below:</Text>
          <SearchResult name={this.props.foundLocation} onPress={() => this.props.navigation.navigate('SearchPage')}/>
      </View>)}
    if(this.props.showError) {
      return <SearchResult name={this.props.error} onPress={() => {}}/>
    }
  };

  render() {
    return (
      <View style={style.mainContainerStyle}>
        <View style={style.firstContainerStyle}>
          <Button
            title="Favorites"
            onPress={() => this.props.navigation.navigate('FavoriteList')}
          />
        </View>
        <View style={ style.secondContainerStyle }>
          <Text style={ style.textHeaderStyle }>Property Cross in UK</Text>
          <Text style={style.textDescriptionStyle}>
            Use the form below to search for houses to buy.
          </Text>
          <Text style={style.textDescriptionStyle}>
            You can search by place-name or postcode.
          </Text>
          <TextInput style={ style.textInputStyle } onChangeText={text => this.props.addValueInput(text)} value={this.props.valueInput}></TextInput>
          <Button
          title="Search"
          onPress={() => this.onSearchClick()}
          
        />
         {this.showSearchReasult()}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state: { valueInput: string; showResult: boolean; foundLocation: string; favoritesList: any; data: any; error: string; checkForSearch: any; showError: boolean; responseProperty: any; }) {
  return {
    valueInput: state.valueInput,
    showResult: state.showResult,
    foundLocation: state.foundLocation,
    favoritesList: state.favoritesList,
    data: state.data,
    error: state.error,
    checkForSearch: state.checkForSearch,
    showError: state.showError,
    responseProperty: state.responseProperty
  };
}

export default connect(mapStateToProps, {
  addValueInput,
  getRequest,
  createFavListFromAsyncStorage,
})(MainPage);