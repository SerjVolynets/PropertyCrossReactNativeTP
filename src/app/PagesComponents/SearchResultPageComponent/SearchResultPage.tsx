import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, Button } from 'react-native'
import ListResultToken from '../СomponentsAssistants/listResultToken/listReasultToken'
import { style } from './style'
import { ScrollView } from 'react-native-gesture-handler';

class SearchResultPage extends Component {
  renderPart = () => {
    return (
      this.props.responseProperty.map((obj, index) => (
          <ListResultToken
            key={index}
            src={obj.img_url}
            name={obj.price}
            dis={obj.title}
          />
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

export default connect(mapStateToProps, {
})(SearchResultPage);