
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TextInput , Button , TouchableHighlight , Image
} from 'react-native';



const ListItem = (props) =>
   (
       <TouchableHighlight onPress = {props.onItemPressed}>
          <View style= { styles.ListItem}  >
          <Image style= { styles.placeImage} source={props.placeImage} />
            <Text>{props.placeName}</Text>
          </View>
        </TouchableHighlight>
   );
const styles = StyleSheet.create(
    {
        ListItem : {
            width : "100%",
            padding : 10,
            margin : 5,
            backgroundColor: "#eee",
            flexDirection: 'row',
            alignItems: 'center'
        },
        placeImage :{
            width: 30,
            height : 30 ,
            marginRight: 8
        }
    }
);
export default ListItem;