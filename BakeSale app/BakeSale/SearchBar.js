import React, { Component } from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        state={
            searchTerm:''
        }
    }
    handleChange=(searchTerm)=>{
     this.setState({searchTerm});
    }
  render() {
    return (
      <View>
          <TextInput
          onChangeText={this.handleChange}
          placeholder ="Search"
           style={styles.input}></TextInput>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    input :{
        height : 40
    }
})