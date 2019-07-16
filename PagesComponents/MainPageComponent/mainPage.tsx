import React, { Component } from 'react'
import { Text, View, TextInput, Button, Alert } from 'react-native'
import { connect } from 'react-redux'
import { addValueInput, getRequest } from '../../redux/actions'
import { style } from './style'

class MainPage extends Component {

  onSearchClick = () => {
    if (this.props.valueInput.length < 1) {
      return;
    }
    this.props.getRequest(this.props.valueInput)
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
          <Text>
            Use the form below to search for houses to buy.
          </Text>
          <Text>
            You can search by place-name or postcode.
          </Text>
          <TextInput style={ style.textInputStyle } onChangeText={text => this.props.addValueInput(text)} value={this.props.valueInput}></TextInput>
          <Button
          title="Search"
          onPress={() => this.onSearchClick()}
        />
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
  };
}

export default connect(mapStateToProps, {
  addValueInput,
  getRequest
})(MainPage);