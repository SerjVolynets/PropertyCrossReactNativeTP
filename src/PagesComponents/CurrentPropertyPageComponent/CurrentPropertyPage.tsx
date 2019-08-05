import * as React from 'react'
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import ListResultToken from '../СomponentsAssistants/listResultToken/listReasultToken'
import { style } from './style';
import {addToFavorite,deleteFromFavorite} from '../../redux/actions'

class CurrentPropertyPage extends React.Component<{dataOfCurrentProperty:any, favoritesList:any, addToFavorite:any, deleteFromFavorite:any}>{
  static navigationOptions = {
    title: 'Back to Result List',
    headerStyle: {
      backgroundColor: '#3D6E91',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'sans-serif'
    },
  };

  renderPart = () => {
    const isAdded = this.props.favoritesList.some((el: { src: string; }) => el.src === this.props.dataOfCurrentProperty.src);
    if (isAdded) {
      return <Button title="Delete from Favorites" onPress={()=> {this.props.deleteFromFavorite()}} color="red"/>;
    }
    return <Button title="Add to Favorites" onPress={()=> {this.props.addToFavorite()}}/>;
  }; 

  render() {
    return (
      <View style={style.mainContainer}>
        <ListResultToken
        src={this.props.dataOfCurrentProperty.src}
        name={this.props.dataOfCurrentProperty.price}
        dis={this.props.dataOfCurrentProperty.dis}
        />
       {this.renderPart()}
      </View>
    );
  }
}

function mapStateToProps(state: { favoritesList: any; dataOfCurrentProperty: any; }) {
  return {
    favoritesList: state.favoritesList,
    dataOfCurrentProperty: state.dataOfCurrentProperty,
  };
}

export default connect(mapStateToProps, {
  addToFavorite,
  deleteFromFavorite
})(CurrentPropertyPage);