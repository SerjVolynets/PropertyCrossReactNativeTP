import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, Button } from 'react-native'
import ListResultToken from '../СomponentsAssistants/listResultToken/listReasultToken'
import { style } from './style'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {addDataWithCurrentProperty} from '../../redux/actions'
class SearchResultPage extends Component {

  static navigationOptions = {
    title: 'Back to Main Page',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  renderPart = () => {
    return (
      this.props.responseProperty.map((obj, index) => (
          <TouchableOpacity onPress={() => (this.props.addDataWithCurrentProperty(index), this.props.navigation.navigate('CurrentPage'))}>
          <ListResultToken
            key={obj.index}
            src={obj.img_url}
            name={obj.price}
            dis={obj.title}
            />
          </TouchableOpacity>
      ))
    );
  }

  render() {
    return (
      <View style={style.mainContainer}>
        <ScrollView>{this.renderPart()}</ScrollView>
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

export default connect(mapStateToProps, {addDataWithCurrentProperty
})(SearchResultPage);