import React , {Component} from 'react';
import {View , Text ,StyleSheet,TextInput,Button,Alert,Image,TouchableOpacity,StatusBar} from 'react-native';
import {createStackNavigator} from 'react-navigation'

export default class Home extends Component {
    

    render(){
        return (
          <View style ={styles.container}>
          
          <View style={styles.ImageStyle}>
          <Text style= {styles.textD}>Real Love Test</Text>
          
          <Text style= {styles.textSimple}>Love...</Text>
          <Image 
          
           style = {{ height : 92 ,width : 104 ,marginTop:10 }}
          source ={require('./images/o.png')}/>
          </View>
          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('Gender')}
           style = {styles.but}>
             <Text style = {styles.Log} >START</Text>
          
         </TouchableOpacity>
          </View>

        );
    }
}

const styles= StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor: '#AE0000',

    },
    but: {
        paddingVertical : 15,
        
  
    },
    Log : {
        textAlign : 'center',
        fontWeight : '700',
        color : '#fff',
         justifyContent : 'center',
         fontSize: 25,
         paddingBottom:  50,
    },
  
    ImageStyle:{
    flex: 1,
    marginTop :30,
    marginLeft: 50,
    margin:20,

    },
    textSimple :{
    marginTop:10,
    color:'#C8C1C1',
    textAlign:'center'
    },
    textD : {
        fontWeight: '900',
        
        textAlign :'center',   
        color :'#fff'
    }
})
