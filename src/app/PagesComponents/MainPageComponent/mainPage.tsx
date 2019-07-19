import React, { Component } from 'react'
import { Text, View, TextInput, Button, Alert } from 'react-native'
import { connect } from 'react-redux'
import { addValueInput, getRequest } from '../../redux/actions'
import { style } from './style'
import SearchResult from '../СomponentsAssistants/searchResultElem/searchResultElem'
import { TouchableOpacity } from 'react-native-gesture-handler';

class MainPage extends Component {

  static navigationOptions = {
    title: 'Property Cross',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
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
      return <SearchResult name={this.props.error}/>
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

function mapStateToProps(state) {
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
  getRequest
})(MainPage);