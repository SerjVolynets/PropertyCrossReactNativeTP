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
      backgroundColor: '#3D6E91',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'sans-serif'
    },
  };

  renderPart = () => {
    return (
      this.props.responseProperty.map((obj: { img_url: string; price: number; title: string; latitude: number; longitude: number;  }, index: number) => (
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

function mapStateToProps(state: { favoritesList: any; data: any; responseProperty: any; }) {
  return {
    favoritesList: state.favoritesList,
    data: state.data,
    responseProperty: state.responseProperty
  };
}

export default connect(mapStateToProps, {addDataWithCurrentProperty
})(SearchResultPage);