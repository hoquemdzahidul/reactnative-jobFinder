import React, {Component} from 'react';
import {Modal, StyleSheet, Text, View, Button, Image} from 'react-native';

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
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
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
  }
});
export default PlaceDetail;
