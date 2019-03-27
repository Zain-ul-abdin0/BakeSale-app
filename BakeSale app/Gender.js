import React , {Component} from 'react';
import {View , Text ,StyleSheet,TextInput,Button,Alert,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import Main from './Main'
 class Gender extends Component {
    
    render(){
        return (
        
        <View style = {styles.back}>
          <View >
          <Text style = {{fontSize:20,fontWeight:'700',color:'white',textAlign:'center',padding: 15}}>Select your Gender</Text>
           <TouchableHighlight
         onPress={()=>this.props.navigation.navigate('Main')}>

           <Image 
          style = {styles.ImageDesign}

         source ={require('./images/p.png')}/>


         </TouchableHighlight>
         </View>
         </View>

        );
    }
}

export default Gender;

const styles = StyleSheet.create({
    ImageDesign :{
        height : 200 ,width : 200,
        marginLeft: 80,
        alignItems: 'center',
        marginTop : 20
    },
    back : {
        flex :1,
        backgroundColor:'#AE0000',

    }
})