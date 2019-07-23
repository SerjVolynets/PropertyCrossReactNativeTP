import * as React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import ListResultToken from '../СomponentsAssistants/listResultToken/listReasultToken'
import { style } from './style'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {addDataWithCurrentProperty} from '../../redux/actions'

class SearchResultPage extends React.Component <{responseProperty: any,addDataWithCurrentProperty:any,navigation:any}>{

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
      this.props.responseProperty.map((obj: { img_url: any; price: any; title: any; latitude: any; longitude: any;  }, index: any) => (
          <TouchableOpacity onPress={() => (this.props.addDataWithCurrentProperty(index), this.props.navigation.navigate('CurrentPage'))} key={obj.latitude+index}>
          <ListResultToken
            key={obj.longitude + index}
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

function mapStateToProps(state: { valueInput: any; showResult: any; foundLocation: any; favoritesList: any; data: any; error: any; checkForSearch: any; showError: any; responseProperty: any; }) {
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