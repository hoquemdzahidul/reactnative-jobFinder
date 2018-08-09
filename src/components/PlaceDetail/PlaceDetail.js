import React, {Component} from 'react';
import {Modal, StyleSheet, Text, View, Button, Image , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetail = props => {
  let modalContent = null;
  if (props.slectedPlace) {
    modalContent = (
      <View>
        <Image style={styles.placeImage} source={props.slectedPlace.image} />
        <Text style={styles.placeName}>{props.slectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal onRequestClose={props.onModalClosed} visible={props.slectedPlace !== null} animationType="slide">
      <View style={styles.listContainer}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={props.onItemDeleted}>
          <View style ={styles.deleteButton}>
            <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create ({
  modalContainer: {
    margin: 20
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName :{
      fontWeight: 'bold',
      fontSize: 28,
      textAlign : "center"
  },
  deleteButton : {
    alignItems: 'center',
  }
});
export default PlaceDetail;
