

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
  state = {
    places: [],
    selectedPlace : null
  };

  placeAddedHandler = placeName => {
    
    this.setState (prevState => {
      return {
        places: prevState.places.concat ({ 
          key : Math.random(),
           name: placeName ,
           image: { uri : "https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2f033882f3c25404e3f904fbfe2351be&w=1000&q=80"} })
      }
    });
  };
  placeSelectedhandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace : prevState.places.find(place => {
          return place.key === key;
        })
      };
    });

    
    
  };
  placeDeletedHandler = () => 
  {
    this.setState(prevState => {
      return {
        places : prevState.places.filter( place => {
          return place.key !== prevState.selectedPlace.key ;
        }),
        selectedPlace : null
      };
    });
  }
  modalClosedHandler = () => 
  {
    this.setState({
      selectedPlace : null
    });
  }
  render () {
   
    return (
      <View style={styles.container}>
        <PlaceDetail
         slectedPlace= {this.state.selectedPlace} 
        onModalClosed={this.modalClosedHandler} 
        onItemDeleted= {this.placeDeletedHandler}

        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places = {this.state.places} 
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

export default connect() (App);