import * as React from 'react'
import { connect } from 'react-redux'
import { View, Button } from 'react-native'
import ListResultToken from '../СomponentsAssistants/listResultToken/listReasultToken'
import { style } from './style'
import { ScrollView } from 'react-native-gesture-handler';
import { removeFavorite } from '../../redux/actions'

class FavoriteListPage extends React.Component <{responseProperty: any, navigation:any, favoritesList:any, removeFavorite: any}>{
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
      this.props.favoritesList.map((obj: { src: string; price: number; dis: string; key: number }, index: number) => (
          <View key={obj.key + index}>
            <ListResultToken
              src={obj.src}
              name={obj.price}
              dis={obj.dis}
             />
            <View style={style.buttonStyle}>
            <Button
              title="Delete"
              onPress={() => this.props.removeFavorite(obj.src)}
              color="red"
            />
            </View>
          </View>
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

function mapStateToProps(state: { favoritesList: any; }) {
  return {
    favoritesList: state.favoritesList,
  };
}

export default connect(mapStateToProps, {
  removeFavorite
})(FavoriteListPage);