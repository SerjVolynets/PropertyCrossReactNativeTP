import React, { Component } from 'react';
import { Text, View, Image, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import ListResultToken from '../СomponentsAssistants/listResultToken/listReasultToken'
import { style } from './style';

class CurrentPropertyPage extends Component {
  static navigationOptions = {
    title: 'Back to Result List',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };  
  render() {
    return (
      <View style={style.mainContainer}>
        <ListResultToken
        src={this.props.dataOfCurrentProperty.src}
        name={this.props.dataOfCurrentProperty.price}
        dis={this.props.dataOfCurrentProperty.dis}
        >
        </ListResultToken>
        <Button 
          title='Add to Favorite'
          onPress={()=> {alert('added')}}
        />
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
    responseProperty: state.responseProperty,
    dataOfCurrentProperty: state.dataOfCurrentProperty,
  };
}

export default connect(mapStateToProps, {
})(CurrentPropertyPage);