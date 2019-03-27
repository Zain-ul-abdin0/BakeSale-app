import React , {Component} from 'react';
import {View , Text ,StyleSheet,TextInput,Button,Alert,Image,TouchableOpacity,KeyboardAvoidingView,ImageBackground} from 'react-native';
import firebase from 'firebase'

class Main extends Component {

    constructor(props){
        super(props)
        this.state = {
           random:'',
           name : "",
           partner :"",
           ra:"",
           status : false,
           c:3,
        }
    }
     press =()=>{

        if(this.state.status==false)
       {

        this.setState({
            status:true,
        })
    }
    else {
        this.setState({
            status :false,
        })
    
    }
   
         this.setState({
            random: Math.floor(Math.random() * 100) + 1  ,
            c:++this.state.c
         })

         
      ra:this.state.random
      na=this.state.name
      pa=this.state.partner
      
      

  
      var config = {
        apiKey: "AIzaSyAO8EPjVSRP2FzY98bGES-sikAVT5Wd0NE",
        authDomain: "final-bd24d.firebaseapp.com",
        databaseURL: "https://final-bd24d.firebaseio.com",
        projectId: "final-bd24d",
        storageBucket: "final-bd24d.appspot.com",
        messagingSenderId: "439440313314"
      };
      
    if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
       firebase.database().ref('users').push({
           name : na,
           partner: pa,

       })
       
       .then(()=>{
           console.log('Insert');
       }).catch((error)=>{
           console.log(error);
       });
       
    




    }

    render(){
      
        return (
            <KeyboardAvoidingView style = {styles.container}>
        <TextInput style = {styles.userInput} 
        placeholder = "Your Name"
        onChangeText ={(no)=>{
            this.setState({
                name:no
            })
        }}
        placeholderTextColor="rgba(255,255,255,0.7)"
        />
        
        <TextInput
         placeholder = "Partner Name"
         onChangeText={(part)=>{
             this.setState({
                 partner:part,
             })
         }}
         secureTextEntry
         placeholderTextColor="rgba(255,255,255,0.7)"
         style = {styles.userInput} />
         <TouchableOpacity
         onPress = {()=>this.press()}
          style = {styles.but}>
             <Text style = {styles.Log} >Calculate Now</Text>

         </TouchableOpacity>
         <ImageBackground style={{flex:1,alignItems:'center',justifyContent:'center'}} source = {require ('./images/bla.png')}>

  <View >
             {
                this.state.status ? <Text style ={{color:'#fff',fontWeight:'800'}}>{na} + {pa}</Text>:null
             }
           
            
             {
                this.state.status ? <Text style ={{color:'#fff',fontWeight:'800',alignItems:'center',justifyContent:'center'}} >{this.state.random}%</Text>:null
             }

         </View>

         </ImageBackground>
       
        </KeyboardAvoidingView>
        );
    }
}
export default Main;
const styles= StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#AE0000',
        padding : 20,
    },
    userInput : {
        height : 40 ,
        marginBottom : 20,
        color : '#fff',
        paddingHorizontal: 15,
        backgroundColor:'rgba(255,255,255,0.2)',

    },
  but: {
      paddingVertical : 15,
       backgroundColor:'rgba(255,255,255,0.2)',
      

  },
  Log : {
      textAlign : 'center',
      fontWeight : '700',
      color : '#fff',
       justifyContent : 'center',
  }

})