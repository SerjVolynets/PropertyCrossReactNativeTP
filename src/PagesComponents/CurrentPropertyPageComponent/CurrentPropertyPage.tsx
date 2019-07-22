import * as React from 'react'
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import ListResultToken from '../СomponentsAssistants/listResultToken/listReasultToken'
import { style } from './style';

class CurrentPropertyPage extends React.Component<{dataOfCurrentProperty:any}>{
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
        key={this.props.dataOfCurrentProperty.key}
        src={this.props.dataOfCurrentProperty.src}
        name={this.props.dataOfCurrentProperty.price}
        dis={this.props.dataOfCurrentProperty.dis}
        />
        <Button 
          title='Add to Favorite'
          onPress={()=> {}}
        />
      </View>
    );
  }
}

function mapStateToProps(state: { valueInput: any; showResult: any; foundLocation: any; favoritesList: any; data: any; error: any; checkForSearch: any; showError: any; responseProperty: any; dataOfCurrentProperty: any; }) {
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