

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import {connect} from 'react-redux';

import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {addPlace , deletePlace , selectPlace , deselectPlace} from './src/store/actions/index';


type Props = {};
class App extends Component<Props> {
  

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
    
  };

  placeSelectedhandler = key => {
    this.props.onSelectPlace(key);
   
  };

  placeDeletedHandler = () => 
  {
    this.props.onDeletePlace();
  }
  modalClosedHandler = () => 
  {
    this.props.onDeselectPlace();
  }
  render () {
   
    return (
      <View style={styles.container}>
        <PlaceDetail
         slectedPlace= {this.props.selectedPlace} 
        onModalClosed={this.modalClosedHandler} 
        onItemDeleted= {this.placeDeletedHandler}

        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places = {this.props.places} 
          onItemSelected={this.placeSelectedhandler}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
const mapStateToProps = state => {
  return{
    places : state.places.places,
    selectedPlace :  state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => 
{
  return{
    onAddPlace : (name) => dispatch(addPlace(name)),
    onDeletePlace : () => dispatch(deletePlace()),
    onSelectPlace : (key) => dispatch(selectPlace(key)),
    onDeselectPlace : () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps , mapDispatchToProps) (App);